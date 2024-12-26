// components/CarGrid.tsx
import CarCard from "./car-card";
import prisma from "@/lib/prisma";
import { CarStatus } from "@prisma/client";

async function getAvailableCars() {
  try {
    const cars = await prisma.car.findMany({
      where: {
        status: CarStatus.AVAILABLE,
      },
      include: {
        images: true,
        location: true,
      },
      take: 6,
      orderBy: {
        createdAt: "desc",
      },
    });

    return cars;
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    return [];
  }
}

export async function CarGrid() {
  const cars = await getAvailableCars();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4">
      {cars.map((car) => (
        <CarCard
          key={car.id}
          id={car.id}
          name={car.name}
          mainImage={car.mainImage}
          carName={`${car.brand} ${car.model}`}
          price={Number(car.dailyRate)}
          brand={car.brand}
          model={car.model}
          type={car.type}
          transmission={car.transmission}
          fuel={car.fuelType}
          hasAC={car.hasAC}
          year={car.year}
          status={car.status}
          location={car.location}
        />
      ))}

      {cars.length === 0 && (
        <div className="col-span-full text-center py-12">
          <p className="text-2xl text-gray-500">
            No available cars at the moment
          </p>
        </div>
      )}
    </div>
  );
}