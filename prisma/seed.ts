// prisma/seed.ts
const { PrismaClient, CarStatus } = require('@prisma/client')
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
      name: 'Range Rover Velar Luxury SUV',
      id: 'luxury-suv-01',
      brand: 'Range Rover',
      model: 'Velar',
      year: 2023,
      type: 'Luxury SUV',
      description: 'Experience ultimate luxury and performance with the Range Rover Velar. Combining sophisticated design with advanced technology, this SUV offers unparalleled comfort and capability. Ideal for those who demand elegance and power in their driving experience.',
      dailyRate: 250.00,
      status: 'AVAILABLE',
      mainImage: '/images/cars/range-rover/velar/main.jpg',
      images: [
        '/images/cars/range-rover/velar/interior.jpg',
        '/images/cars/range-rover/velar/side.jpg',
        '/images/cars/range-rover/velar/rear.jpg'
      ],
      transmission: 'Automatic',
      fuelType: 'Hybrid',
      hasAC: true
    }
  ];

  // Create all cars with their images and availability
  for (const carData of carsData) {
    const { images, mainImage, ...carInfo } = carData;
    
    const car = await prisma.car.create({
      data: {
        ...carInfo,
        mainImage,
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

  console.log('Database has been seeded with a new car! 🌱');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });