import Image from "next/image";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-muted/50 to-background py-20 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Find Your Perfect Ride
          </h1>
          <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
            Discover a wide range of vehicles for every journey. From economy to
            luxury, we have the perfect car waiting for you.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/images/car1.jpg"
            alt="Luxury car available for rental"
            width={640}
            height={400}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
