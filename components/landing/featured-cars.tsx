import { CarCard } from "./car-card";

const cars = [
  {
    name: "Toyota Camry",
    category: "Sedan",
    seats: 5,
    fuel: "Petrol",
    transmission: "Auto",
    price: 45,
    badge: "Popular",
  },
  {
    name: "Honda CR-V",
    category: "SUV",
    seats: 5,
    fuel: "Petrol",
    transmission: "Auto",
    price: 65,
  },
  {
    name: "BMW 3 Series",
    category: "Luxury",
    seats: 5,
    fuel: "Petrol",
    transmission: "Auto",
    price: 95,
    badge: "Premium",
  },
  {
    name: "Tesla Model 3",
    category: "Electric",
    seats: 5,
    fuel: "Electric",
    transmission: "Auto",
    price: 85,
    badge: "Eco",
  },
  {
    name: "Ford Mustang",
    category: "Sports",
    seats: 4,
    fuel: "Petrol",
    transmission: "Manual",
    price: 110,
  },
  {
    name: "Toyota Corolla",
    category: "Economy",
    seats: 5,
    fuel: "Petrol",
    transmission: "Auto",
    price: 35,
    badge: "Best Value",
  },
];

export function FeaturedCars() {
  return (
    <section id="featured" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Vehicles
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Choose from our top-rated selection of vehicles
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.name} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
}
