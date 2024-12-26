// app/cars/page.tsx
import prisma from "@/lib/prisma";
import CarCard from "@/components/cars/car-card";
import { Pagination } from "@/components/ui/pagination";
import { FilterForm } from "@/components/cars/filter-form";
import { Prisma, CarStatus } from "@prisma/client";
import { parse } from "date-fns";

type tParams = Promise<{
  slug?: string[];
  type?: string;
  transmission?: string;
  brand?: string;
  status?: string;
  page?: string;
  state?: string;
  city?: string;
  startDate?: string;
  endDate?: string;
}>;

const ITEMS_PER_PAGE = 1;

export default async function CarsPage(props: { searchParams: tParams }) {
  const params = await props.searchParams;
  const currentPage = params.page ? Number(params.page) : 1;
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  // Parse start and end dates
  const startDate = params.startDate 
    ? parse(params.startDate, 'yyyy-MM-dd', new Date()) 
    : undefined;
  const endDate = params.endDate 
    ? parse(params.endDate, 'yyyy-MM-dd', new Date()) 
    : undefined;

  // Build where clause for filtering
  const where: Prisma.CarWhereInput = {
    ...(params.type && { type: params.type }),
    ...(params.transmission && { transmission: params.transmission }),
    ...(params.brand && { brand: params.brand }),
    ...(params.status && { status: params.status as CarStatus }),
    ...(params.state || params.city ? {
      location: {
        ...(params.state && { state: params.state }),
        ...(params.city && { city: params.city }),
      }
    } : {}),
    // Date filtering logic
    ...(startDate && endDate ? {
      availability: {
        some: {
          isAvailable: true,
          OR: [
            // Case 1: New availability completely overlaps with requested dates
            {
              startDate: { lte: startDate },
              endDate: { gte: endDate }
            },
            // Case 2: Availability starts during the requested period
            {
              startDate: { gte: startDate, lte: endDate }
            },
            // Case 3: Availability ends during the requested period
            {
              endDate: { gte: startDate, lte: endDate }
            }
          ]
        }
      }
    } : {})
  };

  const [cars, totalCars, filterData] = await Promise.all([
    prisma.car.findMany({
      where,
      include: {
        images: true,
        location: true,
        availability: {
          where: {
            isAvailable: true,
            endDate: {
              gte: new Date(),
            },
          },
        },
      },
      take: ITEMS_PER_PAGE,
      skip,
      orderBy: {
        createdAt: 'desc',
      },
    }),
    prisma.car.count({ where }),
    Promise.all([
      // Get unique brands
      prisma.car.findMany({
        select: { brand: true },
        distinct: ['brand'],
        orderBy: { brand: 'asc' },
      }),
      // Get unique types
      prisma.car.findMany({
        select: { type: true },
        distinct: ['type'],
        orderBy: { type: 'asc' },
      }),
      // Get unique transmissions
      prisma.car.findMany({
        select: { transmission: true },
        distinct: ['transmission'],
        orderBy: { transmission: 'asc' },
      }),
      // Get unique states
      prisma.location.findMany({
        select: { state: true },
        distinct: ['state'],
        orderBy: { state: 'asc' },
      }),
      // Get cities based on selected state
      prisma.location.findMany({
        where: params.state ? { state: params.state } : undefined,
        select: { city: true },
        distinct: ['city'],
        orderBy: { city: 'asc' },
      }),
    ]),
  ]);

  const [brands, types, transmissions, states, cities] = filterData;
  const totalPages = Math.ceil(totalCars / ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="mb-8">
        <p className="text-gray-600 mt-2">
          Find the perfect car for your journey
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Showing {cars.length} of {totalCars} cars available
        </p>
      </div>

      {/* Filters Section */}
      <div className="mb-8">
        <FilterForm
          brands={brands}
          types={types}
          transmissions={transmissions}
          locations={cities.map(city => ({
            id: city.city,
            state: states[0]?.state || '',
            city: city.city
          }))}
          currentFilters={params}
        />
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
      </div>

      {/* No Cars Found Message */}
      {cars.length === 0 && (
        <div className="text-center py-12">
          <p className="text-2xl text-gray-500">
            No cars found matching your criteria
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            searchParams={params}
          />
        </div>
      )}
    </div>
  );
}

export const metadata = {
  title: "Available Cars | Car Rental",
  description: "Browse our collection of available cars for rent",
};