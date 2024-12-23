import Image from "next/image";
import { Button } from "@/components/ui/button";

export function CarCard() {
  return (
    <div className="flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 p-4">
      <div className="relative w-full h-56 mb-4">
        <Image
          src="/mercedes.jpeg"
          alt="Mercedes"
          fill
          className="object-contain p-4"
          priority
        />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">Mercedes</h3>
          <div className="text-right">
            <span className="text-2xl font-bold text-[#5937E0]">$25</span>
            <span className="text-gray-500 text-sm ml-1">/per day</span>
          </div>
        </div>

        <p className="text-gray-500 text-sm font-medium">Sedan</p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
            <Image
              src="/automatic.svg"
              alt="Automatic"
              width={16}
              height={16}
            />
            <span>Automat</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
            <Image
              src="/fuel.svg"
              alt="Fuel"
              width={16}
              height={16}
            />
            <span>PB 95</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg">
            <Image
              src="/ac.svg"
              alt="Air Conditioner"
              width={16}
              height={16}
            />
            <span>Air Conditioner</span>
          </div>
        </div>

        <Button 
          variant="outline" 
          className="w-full mt-4 border-[#5937E0] text-[#5937E0] hover:bg-[#5937E0] hover:text-white transition-all duration-300"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}

// Parent container for 3x2 grid
export function CarGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
    </div>
  );
}