// app/cars/page.tsx
import prisma from "@/lib/prisma";
import CarCard from "@/components/cars/car-card";
type tParams = Promise<{
  slug: string[];
  type?: string;
  transmission?: string;
  priceMin?: string;
  priceMax?: string;
}>;

export default async function CarsPage(props: { searchParams: tParams }) {
  // Fetch all cars with filtering logic
  const { type, transmission, priceMin, priceMax } = await props.searchParams;

  const cars = await prisma.car.findMany({
    where: {
      status: "AVAILABLE", // Only show available cars
      ...(type && { type: type }),
      ...(transmission && {
        transmission,
      }),
      dailyRate: {
        gte: priceMin ? Number(priceMin) : undefined,
        lte: priceMax ? Number(priceMax) : undefined,
      },
    },
    include: {
      images: true,
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Our Car Collection</h1>
        <p className="text-gray-600 mt-2">
          Find the perfect car for your journey
        </p>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            id={car.id}
            mainImage={car.mainImage}
            carName={`${car.brand} ${car.model}`}
            price={Number(car.dailyRate)}
            brand={car.brand}
            model={car.model}
            type={car.type}
            transmission={car.transmission}
            fuel={car.fuelType}
            hasAC={car.hasAC}
            year={car.year || new Date().getFullYear()} // Add year prop
          />
        ))}
      </div>

      {/* No Cars Found Message */}
      {cars.length === 0 && (
        <div className="text-center py-12">
          <p className="text-2xl text-gray-500">
            No cars available at the moment
          </p>
        </div>
      )}
    </div>
  );
}

// Metadata for the page
export const metadata = {
  title: "Available Cars | Car Rental",
  description: "Browse our collection of available cars for rent",
};
