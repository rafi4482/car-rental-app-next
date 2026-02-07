import { Car, Users, Fuel, Gauge } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CarCardProps {
  name: string;
  category: string;
  seats: number;
  fuel: string;
  transmission: string;
  price: number;
  badge?: string;
}

export function CarCard({
  name,
  category,
  seats,
  fuel,
  transmission,
  price,
  badge: badgeText,
}: CarCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <div className="flex h-48 items-center justify-center bg-muted">
        <Car className="size-20 text-muted-foreground/40" />
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
          {badgeText && <Badge variant="secondary">{badgeText}</Badge>}
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="size-4" />
            {seats}
          </span>
          <span className="flex items-center gap-1">
            <Fuel className="size-4" />
            {fuel}
          </span>
          <span className="flex items-center gap-1">
            <Gauge className="size-4" />
            {transmission}
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4">
        <div>
          <span className="text-2xl font-bold">${price}</span>
          <span className="text-sm text-muted-foreground">/day</span>
        </div>
        <Button size="sm">Rent Now</Button>
      </CardFooter>
    </Card>
  );
}
