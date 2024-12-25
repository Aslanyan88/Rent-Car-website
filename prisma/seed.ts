// prisma/seed.ts
const { PrismaClient,CarStatus } = require('@prisma/client')
const prisma = new PrismaClient()
async function main() {
  // Create location
  const location = await prisma.location.create({
    data: {
      name: "Main Branch",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zipCode: "10001",
    },
  });

  const carsData = [
    {
      name: "BMW 3 Series",
      brand: "BMW",
      model: "330i",
      year: 2024,
      type: "Sedan",
      description: "Luxury sedan with outstanding performance and comfort",
      dailyRate: 89.99,
      status: CarStatus.AVAILABLE,
      mainImage: "/cars/bmw/main.jpg",
      images: ["/cars/bmw/interior.jpg", "/cars/bmw/side.jpg", "/cars/bmw/back.jpg", "/cars/bmw/dashboard.jpg"]
    },
    {
      name: "Mercedes C-Class",
      brand: "Mercedes",
      model: "C300",
      year: 2024,
      type: "Sedan",
      description: "Elegant luxury sedan with premium features",
      dailyRate: 94.99,
      status: CarStatus.RENTED,
      mainImage: "/cars/mercedes/main.jpg",
      images: ["/cars/mercedes/interior.jpg", "/cars/mercedes/side.jpg", "/cars/mercedes/back.jpg"]
    },
    {
      name: "Tesla Model 3",
      brand: "Tesla",
      model: "Long Range",
      year: 2024,
      type: "Electric",
      description: "High-performance electric vehicle with autopilot",
      dailyRate: 99.99,
      status: CarStatus.AVAILABLE,
      mainImage: "/cars/tesla/main.jpg",
      images: ["/cars/tesla/interior.jpg", "/cars/tesla/screen.jpg", "/cars/tesla/back.jpg"]
    },
    {
      name: "Audi A4",
      brand: "Audi",
      model: "A4",
      year: 2024,
      type: "Sedan",
      description: "Premium sedan with advanced technology",
      dailyRate: 84.99,
      status: CarStatus.MAINTENANCE,
      mainImage: "/cars/audi/main.jpg",
      images: ["/cars/audi/interior.jpg", "/cars/audi/side.jpg", "/cars/audi/back.jpg"]
    },
    {
      name: "Range Rover Sport",
      brand: "Land Rover",
      model: "Sport HSE",
      year: 2024,
      type: "SUV",
      description: "Luxury SUV with off-road capabilities",
      dailyRate: 149.99,
      status: CarStatus.AVAILABLE,
      mainImage: "/cars/rangerover/main.jpg",
      images: ["/cars/rangerover/interior.jpg", "/cars/rangerover/side.jpg", "/cars/rangerover/back.jpg"]
    },
    {
      name: "Porsche 911",
      brand: "Porsche",
      model: "Carrera",
      year: 2024,
      type: "Sports",
      description: "Iconic sports car with exceptional performance",
      dailyRate: 199.99,
      status: CarStatus.RESERVED,
      mainImage: "/cars/porsche/main.jpg",
      images: ["/cars/porsche/interior.jpg", "/cars/porsche/side.jpg", "/cars/porsche/engine.jpg"]
    },
    {
      name: "Toyota Camry",
      brand: "Toyota",
      model: "XSE",
      year: 2024,
      type: "Sedan",
      description: "Reliable and comfortable family sedan",
      dailyRate: 69.99,
      status: CarStatus.AVAILABLE,
      mainImage: "/cars/toyota/main.jpg",
      images: ["/cars/toyota/interior.jpg", "/cars/toyota/side.jpg", "/cars/toyota/back.jpg"]
    },
    {
      name: "Honda CR-V",
      brand: "Honda",
      model: "Touring",
      year: 2024,
      type: "SUV",
      description: "Popular compact SUV with great utility",
      dailyRate: 79.99,
      status: CarStatus.AVAILABLE,
      mainImage: "/cars/honda/main.jpg",
      images: ["/cars/honda/interior.jpg", "/cars/honda/side.jpg", "/cars/honda/cargo.jpg"]
    },
    {
      name: "Lexus RX",
      brand: "Lexus",
      model: "450h",
      year: 2024,
      type: "SUV",
      description: "Luxury hybrid SUV with premium comfort",
      dailyRate: 129.99,
      status: CarStatus.RENTED,
      mainImage: "/cars/lexus/main.jpg",
      images: ["/cars/lexus/interior.jpg", "/cars/lexus/side.jpg", "/cars/lexus/back.jpg"]
    },
    {
      name: "Ford Mustang",
      brand: "Ford",
      model: "GT",
      year: 2024,
      type: "Sports",
      description: "Classic American muscle car",
      dailyRate: 119.99,
      status: CarStatus.AVAILABLE,
      mainImage: "/cars/mustang/main.jpg",
      images: ["/cars/mustang/interior.jpg", "/cars/mustang/side.jpg", "/cars/mustang/engine.jpg"]
    },
    {
      name: "Volkswagen Golf",
      brand: "Volkswagen",
      model: "GTI",
      year: 2024,
      type: "Hatchback",
      description: "Sporty hatchback with great handling",
      dailyRate: 74.99,
      status: CarStatus.MAINTENANCE,
      mainImage: "/cars/vw/main.jpg",
      images: ["/cars/vw/interior.jpg", "/cars/vw/side.jpg", "/cars/vw/back.jpg"]
    },
    {
      name: "Hyundai Tucson",
      brand: "Hyundai",
      model: "Limited",
      year: 2024,
      type: "SUV",
      description: "Modern compact SUV with great value",
      dailyRate: 76.99,
      status: CarStatus.AVAILABLE,
      mainImage: "/cars/hyundai/main.jpg",
      images: ["/cars/hyundai/interior.jpg", "/cars/hyundai/side.jpg", "/cars/hyundai/back.jpg"]
    },
    {
      name: "Chevrolet Corvette",
      brand: "Chevrolet",
      model: "Stingray",
      year: 2024,
      type: "Sports",
      description: "High-performance American sports car",
      dailyRate: 189.99,
      status: CarStatus.RESERVED,
      mainImage: "/cars/corvette/main.jpg",
      images: ["/cars/corvette/interior.jpg", "/cars/corvette/side.jpg", "/cars/corvette/engine.jpg"]
    },
    {
      name: "Mazda CX-5",
      brand: "Mazda",
      model: "Signature",
      year: 2024,
      type: "SUV",
      description: "Upscale compact SUV with sporty handling",
      dailyRate: 82.99,
      status: CarStatus.AVAILABLE,
      mainImage: "/cars/mazda/main.jpg",
      images: ["/cars/mazda/interior.jpg", "/cars/mazda/side.jpg", "/cars/mazda/back.jpg"]
    },
    {
      name: "Subaru Outback",
      brand: "Subaru",
      model: "Wilderness",
      year: 2024,
      type: "Wagon",
      description: "Adventure-ready wagon with off-road capability",
      dailyRate: 89.99,
      status: CarStatus.AVAILABLE,
      mainImage: "/cars/subaru/main.jpg",
      images: ["/cars/subaru/interior.jpg", "/cars/subaru/side.jpg", "/cars/subaru/cargo.jpg"]
    },
    {
      name: "Kia Telluride",
      brand: "Kia",
      model: "SX",
      year: 2024,
      type: "SUV",
      description: "Award-winning family SUV with premium features",
      dailyRate: 109.99,
      status: CarStatus.RENTED,
      mainImage: "/cars/kia/main.jpg",
      images: ["/cars/kia/interior.jpg", "/cars/kia/side.jpg", "/cars/kia/back.jpg"]
    },
    {
      name: "Genesis G70",
      brand: "Genesis",
      model: "3.3T Sport",
      year: 2024,
      type: "Sedan",
      description: "Luxury sport sedan with premium features",
      dailyRate: 99.99,
      status: CarStatus.AVAILABLE,
      mainImage: "/cars/genesis/main.jpg",
      images: ["/cars/genesis/interior.jpg", "/cars/genesis/side.jpg", "/cars/genesis/back.jpg"]
    },
    {
      name: "Acura MDX",
      brand: "Acura",
      model: "Technology",
      year: 2024,
      type: "SUV",
      description: "Luxury three-row SUV with advanced features",
      dailyRate: 139.99,
      status: CarStatus.AVAILABLE,
      mainImage: "/cars/acura/main.jpg",
      images: ["/cars/acura/interior.jpg", "/cars/acura/side.jpg", "/cars/acura/third-row.jpg"]
    },
    {
      name: "Audi Q7",
      brand: "Audi",
      model: "Prestige",
      year: 2024,
      type: "SUV",
      description: "Premium seven-seat luxury SUV",
      dailyRate: 159.99,
      status: CarStatus.RESERVED,
      mainImage: "/cars/audiq7/main.jpg",
      images: ["/cars/audiq7/interior.jpg", "/cars/audiq7/side.jpg", "/cars/audiq7/back.jpg"]
    },
    {
      name: "BMW X5",
      brand: "BMW",
      model: "xDrive40i",
      year: 2024,
      type: "SUV",
      description: "Luxury SUV with powerful performance",
      dailyRate: 149.99,
      status: CarStatus.AVAILABLE,
      mainImage: "/cars/bmwx5/main.jpg",
      images: ["/cars/bmwx5/interior.jpg", "/cars/bmwx5/side.jpg", "/cars/bmwx5/back.jpg"]
    }
  ];

  // Create all cars with their images and availability
  for (const carData of carsData) {
    const { images, ...carInfo } = carData;
    
    const car = await prisma.car.create({
      data: {
        ...carInfo,
        locationId: location.id,
        availability: {
          create: {
            startDate: new Date(),
            endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            isAvailable: carInfo.status === CarStatus.AVAILABLE
          }
        }
      }
    });

    // Create images for the car
    await prisma.carImage.createMany({
      data: images.map(url => ({
        url,
        carId: car.id
      }))
    });
  }

  console.log('Database has been seeded with 20 cars! 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });