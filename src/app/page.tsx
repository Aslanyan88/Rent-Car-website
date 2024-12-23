import { CarGrid } from "@/components/cars/car-card";
import { ButtonDemo } from "@/components/ui/components_button-demo";
import { ViewAll } from "@/components/ui/view-all-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-[90%] sm:w-[85%] lg:w-3/4 min-h-[480px] sm:h-[520px] lg:h-[660px] p-4 bg-[#5937E0] rounded-2xl lg:rounded-3xl relative overflow-hidden">
        <Image
          src="/bg-vector.svg"
          alt="vector"
          width={1500}
          height={800}
          className="absolute inset-0 w-full h-full object-cover object-center"
          priority
        />

        <div className="absolute -bottom-4 sm:bottom-0 -right-4 sm:right-0 lg:right-14 w-[280px] sm:w-[380px] lg:w-[600px]">
          <Image
            src="/bmw-car.svg"
            alt="BMW Car"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="relative z-10 pt-8 sm:pt-12 lg:pt-0 lg:absolute lg:left-10 lg:top-1/2 lg:-translate-y-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-[260px] sm:max-w-md lg:max-w-xl leading-tight">
            Experience the road like never before
          </h1>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-[260px] sm:max-w-md lg:max-w-xl mt-4 lg:mt-5">
            Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
            tristique et gravida.
          </p>
          <div className="mt-6 lg:mt-8">
            <ButtonDemo />
          </div>
        </div>
      </div>

      <div className="w-[90%] sm:w-[85%] lg:w-3/4 px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center gap-4">
            <Image
              src="/availability.svg"
              alt="Availability icon"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
            <h3 className="font-bold text-lg">Availability</h3>
            <p className="text-gray-600 max-w-xs">
              Cars ready when you need them, anywhere in the city
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <Image
              src="/comfort.svg"
              alt="Comfort icon"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
            <h3 className="font-bold text-lg">Comfort</h3>
            <p className="text-gray-600 max-w-xs">
              Premium vehicles with luxury features included
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-4">
            <Image
              src="/savings.svg"
              alt="Savings icon"
              width={64}
              height={64}
              className="object-contain"
              priority
            />
            <h3 className="font-bold text-lg">Savings</h3>
            <p className="text-gray-600 max-w-xs">
              Best rates with no hidden fees or charges
            </p>
          </div>
        </div>
      </div>

      <div className="w-[90%] sm:w-[85%] lg:w-3/4 px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2">
            <Image
              src="/family.jpg"
              alt="Car Rental Process"
              width={700}
              height={700}
              className="w-full h-auto object-cover rounded-2xl"
              priority
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Easy Booking Process</h3>
                <p className="text-gray-600 mt-2">
                  Book your ideal car in minutes through our user-friendly
                  platform.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Flexible Pickup Options
                </h3>
                <p className="text-gray-600 mt-2">
                  Choose from multiple convenient pickup locations across the
                  city.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Premium Vehicle Selection
                </h3>
                <p className="text-gray-600 mt-2">
                  Access our diverse fleet of well-maintained vehicles.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">24/7 Customer Support</h3>
                <p className="text-gray-600 mt-2">
                  Our dedicated support team is available round the clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[90%] sm:w-[85%] lg:w-3/4 px-4 py-12">
        <div className="flex flex-col w-full gap-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              Choose the car that suits you
            </h2>
            <ViewAll />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"></div>
        </div>
      </div>
      <div className="w-[90%] sm:w-[85%] lg:w-3/4 px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <CarGrid />
        </div>
      </div>
      <div className="w-[90%] sm:w-[85%] lg:w-3/4 px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <Image
            src="/facts.svg"
            alt="Car Rental Process"
            width={700}
            height={700}
            className="w-full h-auto object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
