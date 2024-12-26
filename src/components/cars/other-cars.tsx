"use client";
import Image from "next/image";
import { Car } from "./car-details";
import CarLink from "./car-link";

interface OtherCarsProps {
  currentCarId: string;
  currentCarBrand: string;
  currentCarModel: string;
  cars: Car[];
}

export function OtherCars({
  currentCarId,
  currentCarBrand,
  currentCarModel,
  cars,
}: OtherCarsProps) {
  const otherAvailableCars = cars
    .filter(
      (car) =>
        car.id !== currentCarId &&
        car.status === "AVAILABLE" &&
        (car.brand !== currentCarBrand || car.model !== currentCarModel)
    )
    .slice(0, 4);

  if (otherAvailableCars.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Other Available Cars</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {otherAvailableCars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <CarLink
              brand={car.brand}
              model={car.model}
              year={car.year}
              id={car.id}
            >
              <div className="relative w-full h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                <Image
                  src={car.mainImage}
                  alt={`${car.brand} ${car.model}`}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">
                    {car.brand} {car.model}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium
                      ${
                        car.status === "AVAILABLE"
                          ? "bg-green-100 text-green-800"
                          : car.status === "RENTED"
                          ? "bg-blue-100 text-blue-800"
                          : car.status === "MAINTENANCE"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                  >
                    {car.status}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-gray-600">{car.type}</p>
                  <span className="text-[#5937E0] font-bold">
                    ${car.dailyRate.toFixed(2)}/day
                  </span>
                </div>
              </div>
            </CarLink>
          </div>
        ))}
      </div>
    </section>
  );
}