// components/cars/car-card.tsx
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import CarLink from "./car-link";
import { CarStatus } from "@prisma/client";

interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

interface CarCardProps {
  id: string;
  name: string;
  mainImage: string;
  carName: string;
  price: number;
  brand: string;
  model: string;
  type: string;
  transmission: string;
  fuel: string;
  hasAC: boolean;
  year: number;
  status: CarStatus;
  location: Location;
}

const statusColors = {
  AVAILABLE: "bg-green-100 text-green-800",
  RENTED: "bg-blue-100 text-blue-800",
  MAINTENANCE: "bg-yellow-100 text-yellow-800",
  RESERVED: "bg-purple-100 text-purple-800",
};

const statusLabels = {
  AVAILABLE: "Available",
  RENTED: "Rented",
  MAINTENANCE: "In Maintenance",
  RESERVED: "Reserved",
};

export default function CarCard({
  id,
  name,
  mainImage,
  carName,
  price,
  brand,
  model,
  type,
  transmission,
  fuel,
  hasAC,
  year,
  status,
  location,
}: CarCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={mainImage}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2">
          <Badge 
            variant="secondary" 
            className={statusColors[status]}
          >
            {statusLabels[status]}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold">{carName}</h3>
            <p className="text-sm text-gray-500">{year}</p>
          </div>
          <p className="text-lg font-bold">${price}/day</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="secondary">{type}</Badge>
          <Badge variant="secondary">{transmission}</Badge>
          <Badge variant="secondary">{fuel}</Badge>
          {hasAC && <Badge variant="secondary">AC</Badge>}
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location.city}, {location.state}</span>
        </div>
      </CardContent>

      <Button
        variant="outline"
        className="w-full mt-4 border-[#5937E0] text-[#5937E0] hover:bg-[#5937E0] hover:text-white transition-all duration-300"
        asChild
      >
        <CarLink
          brand={brand}
          model={model}
          year={year}
          id={id}
        >
          View Details
        </CarLink>
      </Button>
    </Card>
  );
}