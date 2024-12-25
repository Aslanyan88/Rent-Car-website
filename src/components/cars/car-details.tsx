// components/car-details.tsx
"use client";
import Image from "next/image";
import { BookCarDialog } from './book-car-dialog';  
// Using types from your database structure
interface CarImage {
  id: string;
  url: string;
}

interface Car {
    id: string;
    brand: string;
    model: string;
    year: number;
    type: string;
    description: string;
    dailyRate: number;  // Changed from Decimal to number
    status: 'AVAILABLE' | 'RENTED' | 'MAINTENANCE' | 'RESERVED';
    mainImage: string;
    images: CarImage[];
    transmission: string;
    fuelType: string;
    hasAC: boolean;
  }

interface CarDetailsProps {
  car: Car;
}

export default function CarDetails({ car }: CarDetailsProps) {
  const dailyRate = car.dailyRate.toFixed(2);

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Car Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">
          {car.brand} {car.model}
        </h1>
        <p className="text-gray-600">{car.type}</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={car.mainImage}
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          {car.images.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {car.images.map((image) => (
                <div
                  key={image.id}
                  className="relative h-24 rounded-lg overflow-hidden bg-gray-100"
                >
                  <Image
                    src={image.url}
                    alt={`${car.brand} ${car.model}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Details */}
        <div className="space-y-8">
          {/* Price and Availability */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-3xl font-bold text-[#5937E0]">
                ${dailyRate}
                <span className="text-base font-normal text-gray-500">
                  /day
                </span>
              </span>
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium
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
            <BookCarDialog carName={`${car.brand} ${car.model}`} />
          </div>

          {/* Specifications */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Year</p>
                <p className="font-medium">{car.year}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Type</p>
                <p className="font-medium">{car.type}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Transmission</p>
                <p className="font-medium">{car.transmission}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Fuel Type</p>
                <p className="font-medium">{car.fuelType}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            <p className="text-gray-600 leading-relaxed">{car.description}</p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="grid grid-cols-2 gap-y-3">
              {car.hasAC && (
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Air Conditioning</span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{car.transmission}</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>GPS Navigation</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Bluetooth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}