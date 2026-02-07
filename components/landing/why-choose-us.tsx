import { Shield, Clock, DollarSign, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "All our vehicles come with comprehensive insurance coverage for your peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Our dedicated support team is available around the clock to assist you anytime.",
  },
  {
    icon: DollarSign,
    title: "Best Prices",
    description:
      "Competitive pricing with no hidden fees. We guarantee the best rates in the market.",
  },
  {
    icon: Star,
    title: "Top Rated",
    description:
      "Rated 4.9/5 by thousands of satisfied customers. Quality you can trust.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            We go the extra mile to make your rental experience exceptional
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardContent className="pt-8 pb-6">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="size-6" />
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
