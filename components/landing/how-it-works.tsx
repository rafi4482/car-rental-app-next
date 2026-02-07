import { MapPin, CalendarCheck, CarFront } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    icon: MapPin,
    title: "Choose Location",
    description:
      "Select your preferred pick-up and drop-off location from our wide network of stations.",
  },
  {
    icon: CalendarCheck,
    title: "Pick a Date",
    description:
      "Choose your rental dates and times that work best for your schedule.",
  },
  {
    icon: CarFront,
    title: "Book & Drive",
    description:
      "Complete your booking in minutes and hit the road with your perfect vehicle.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Renting a car has never been easier
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="relative text-center">
              <CardContent className="pt-8 pb-6">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="size-8" />
                </div>
                <span className="mb-2 block text-sm font-medium text-muted-foreground">
                  Step {index + 1}
                </span>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
