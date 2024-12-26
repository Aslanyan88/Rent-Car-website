// app/api/cars/route.ts
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

export async function GET() {
  const prisma = new PrismaClient()

  try {
    const cars = await prisma.car.findMany({
      include: {
        images: true
      }
    });

    return NextResponse.json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cars' }, 
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
