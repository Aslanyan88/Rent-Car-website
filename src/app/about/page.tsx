import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <div className="w-[90%] sm:w-[85%] lg:w-3/4 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Experience Luxury and Comfort on Every Journey
            </h1>
            <p className="text-gray-600 text-lg">
              We are dedicated to providing exceptional car rental services that make your travel experience unforgettable. With our premium fleet and customer-first approach, we ensure every journey is comfortable and hassle-free.
            </p>
            <Button className="bg-[#5937E0] hover:bg-[#4926D1] text-white px-8 py-2.5">
              Learn More
            </Button>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/mercedes.jpeg"
              alt="Luxury Car"
              width={600}
              height={400}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full bg-gray-50 py-16">
        <div className="w-[90%] sm:w-[85%] lg:w-3/4 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#5937E0]">1000+</h3>
              <p className="text-gray-600 mt-2">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#5937E0]">500+</h3>
              <p className="text-gray-600 mt-2">Luxury Cars</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#5937E0]">24/7</h3>
              <p className="text-gray-600 mt-2">Support Available</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-[#5937E0]">100%</h3>
              <p className="text-gray-600 mt-2">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-[90%] sm:w-[85%] lg:w-3/4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-gray-600">
              Our fleet consists of carefully maintained luxury vehicles to ensure your comfort and safety.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">24/7 Service</h3>
            <p className="text-gray-600">
              Round-the-clock support to assist you with any queries or concerns during your rental.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
            <p className="text-gray-600">
              Competitive rates and transparent pricing with no hidden fees or charges.
            </p>
          </div>
        </div>
      </div>

     
    </main>
  );
}