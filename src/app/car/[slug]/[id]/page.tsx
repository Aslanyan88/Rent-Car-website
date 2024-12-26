// app/car/[slug]/[id]/page.tsx
import prisma from "@/lib/prisma";
import CarDetails from "@/components/cars/car-details";
import { notFound } from "next/navigation";
type tParams = Promise<{ slug: string[],id: string }>;



export default async function CarPage(props:{ params : tParams}) {
  const { id } = await props.params;

  if (!id) {
    return notFound();
  }

  try {
    const car = await prisma.car.findUnique({
      where: { id },
      include: {
        images: true,
      },
    });

    if (!car) {
      return notFound();
    }

    const allCars = await prisma.car.findMany({
      include: {
        images: true,
      },
    });

    // Convert Decimal to number
    const formattedCar = {
      ...car,
      dailyRate: Number(car.dailyRate),
    };

    // Convert all cars' daily rates
    const formattedAllCars = allCars.map(c => ({
      ...c,
      dailyRate: Number(c.dailyRate),
    }));

    return <CarDetails car={formattedCar} allCars={formattedAllCars} />;
  } catch (error) {
    console.error('Error fetching car details:', error);
    return notFound();
  } finally {
    await prisma.$disconnect();
  }
}
