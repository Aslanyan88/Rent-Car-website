"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { BookCarDialog } from "./book-car-dialog";
import { OtherCars } from "./other-cars";
import { RENTAL_TIERS, calculateRentalPrice } from "./rental-pricing-util";

// Using types from your database structure
export interface CarImage {
  id: string;
  url: string;
}

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  type: string;
  description: string;
  dailyRate: number;
  status: "AVAILABLE" | "RENTED" | "MAINTENANCE" | "RESERVED";
  mainImage: string;
  images: CarImage[];
  transmission: string;
  fuelType: string;
  hasAC: boolean;
}

interface CarDetailsProps {
  car: Car;
  allCars: Car[];
}

export default function CarDetails({ car, allCars }: CarDetailsProps) {
  const [showPricingTiers, setShowPricingTiers] = useState(false);

  // Combine main image with additional images
  const allImages = [{ id: "main", url: car.mainImage }, ...car.images];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length
    );
  };

  const handleSmallImageClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Pricing Tiers Popup
  const PricingTiersPopup = () => {
    return (
      <div className="absolute z-10 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 border">
        <h4 className="font-semibold mb-2 text-lg">Rental Pricing Tiers</h4>
        {RENTAL_TIERS.map((tier) => {
          const pricing = calculateRentalPrice(car.dailyRate, tier.minDays);
          return (
            <div
              key={tier.minDays}
              className="mb-3 pb-3 border-b last:border-b-0"
            >
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium">
                  {tier.minDays}-{tier.maxDays} days
                </p>
                <div className="flex items-center space-x-2">
                  {pricing.discountPercentage > 0 && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      {pricing.discountPercentage}% off
                    </span>
                  )}
                  <span className="font-bold text-[#5937E0]">
                    ${pricing.dailyRate.toFixed(2)}/day
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-1">{tier.description}</p>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
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
            {/* Main Image with Navigation */}
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-gray-100 group">
              {/* Previous Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 
                           bg-white/70 hover:bg-white/90 rounded-full p-2 
                           shadow-md transition-all duration-300 
                           opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="text-gray-700" />
              </button>

              {/* Main Image */}
              <Image
                src={allImages[currentImageIndex].url}
                alt={`${car.brand} ${car.model}`}
                fill
                className="object-contain hover:scale-105 transition-transform duration-300"
                priority
              />

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 
                           bg-white/70 hover:bg-white/90 rounded-full p-2 
                           shadow-md transition-all duration-300 
                           opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="text-gray-700" />
              </button>
            </div>

            {/* Small Images */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {allImages.map((image, index) => (
                  <div
                    key={image.id}
                    onClick={() => handleSmallImageClick(index)}
                    className={`relative h-24 rounded-lg overflow-hidden bg-gray-100 cursor-pointer 
                      border-2 transition-all duration-300 
                      ${
                        currentImageIndex === index
                          ? "border-[#5937E0]"
                          : "border-gray-300 hover:border-[#5937E0]/50"
                      }`}
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
            <div className="bg-white rounded-xl p-6 shadow-sm relative">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-[#5937E0]">
                    ${car.dailyRate.toFixed(2)}
                    <span className="text-base font-normal text-gray-500">
                      /day
                    </span>
                  </span>
                  <button
                    onClick={() => setShowPricingTiers(!showPricingTiers)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Info size={20} />
                  </button>
                </div>
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

              {showPricingTiers && <PricingTiersPopup />}

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
          </div>
        </div>
      </main>

      {/* Other Cars Section */}
      <OtherCars
        currentCarId={car.id}
        currentCarBrand={car.brand}
        currentCarModel={car.model}
        cars={allCars}
      />
    </>
  );
}
