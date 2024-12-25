// app/car/[id]/page.tsx
import prisma from "@/lib/prisma";
import CarDetails from "@/components/cars/car-details";
import { notFound } from "next/navigation";

export default async function CarPage({ params }: { params: { id: string } }) {
  
  try {
    let actualId = await params;
 
    if (!actualId) {
      return notFound();
    }
   actualId = actualId.id.split('-').pop();
    const car = await prisma.car.findUnique({
      where: { id: actualId },
      include: {
        images: true,
      },
    });

    if (!car) {
      return notFound();
    }

    const serializedCar = {
      ...car,
      dailyRate: Number(car.dailyRate)
    };

    return <CarDetails car={serializedCar} />;
  } catch (error) {
    console.error('Error fetching car:', error);
    return notFound();
  }
}