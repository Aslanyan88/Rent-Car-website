// components/CarGrid.js
import CarCard from "./car-card";
import prisma from "../../lib/prisma";

async function getAvailableCars() {
  try {
    const cars = await prisma.car.findMany({
      where: {
        status: "AVAILABLE"
      },
      include: {
        images: true
      },
      take: 6,  
      orderBy: {
        createdAt: 'desc'
      }
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
          mainImage={car.mainImage}
          carName={`${car.brand} ${car.model}`}
          brand={car.brand}
          model={car.model}
          price={Number(car.dailyRate)}
          type={car.type}
          transmission={car.transmission}
          fuel={car.fuelType}
          hasAC={car.hasAC}
        />
      ))}
    </div>
  );
}