import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface CarCardProps {
  id: string;
  mainImage: string;
  carName: string;
  model: string;
  price: number;
  brand: string;
  transmission: string;
  fuel: string;
  type: string;
  hasAC: boolean;
  className?: string;
}

export default function CarCard({
  id,
  mainImage,
  carName,
  price,
  brand,
  type,
  model,
  transmission,
  fuel,
  hasAC,
  className = "",
}: CarCardProps) {
  return (
    <div
      className={`flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 p-4 ${className}`}
    >
      <div className="relative w-full h-56 mb-4 group overflow-hidden rounded-xl bg-gray-50 hover:shadow-xl transition-all duration-300">
        <Image
          src={mainImage}
          alt={carName}
          fill
          className="object-contain p-4 transition-all duration-300 group-hover:scale-[1.02] "
          priority
        />
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">{carName}</h3>
          <div className="text-right">
            <span className="text-2xl font-bold text-[#5937E0]">${price}</span>
            <span className="text-gray-500 text-sm ml-1">/per day</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm font-medium">{type}</p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          {transmission && (
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
              <Image
                src="/automatic.svg"
                alt="Automatic"
                width={16}
                height={16}
              />
              <span>{transmission}</span>
            </div>
          )}
          {fuel && (
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
              <Image src="/fuel.svg" alt="Fuel" width={16} height={16} />
              <span>{fuel}</span>
            </div>
          )}
          {hasAC && (
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
              <Image
                src="/ac.svg"
                alt="Air Conditioner"
                width={16}
                height={16}
              />
              <span>Air Conditioner</span>
            </div>
          )}
        </div>

        <Button
          variant="outline"
          className="w-full mt-4 border-[#5937E0] text-[#5937E0] hover:bg-[#5937E0] hover:text-white transition-all duration-300"
          asChild
        >
          <Link
            href={`/car/${brand.toLowerCase()}-${model.toLowerCase()}-${id}`}
          >
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
}
