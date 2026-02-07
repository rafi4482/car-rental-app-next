"use client";

import { MapPin, Calendar, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchBar() {
  return (
    <div className="w-full rounded-xl border bg-card p-4 shadow-lg">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium">
            <MapPin className="size-4 text-muted-foreground" />
            Location
          </label>
          <Input type="text" placeholder="Pick-up location" />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium">
            <Calendar className="size-4 text-muted-foreground" />
            Pick-up Date
          </label>
          <Input type="date" />
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium">
            <Calendar className="size-4 text-muted-foreground" />
            Return Date
          </label>
          <Input type="date" />
        </div>

        <div className="flex items-end">
          <Button className="w-full" size="lg">
            <Search className="size-4" />
            Search Cars
          </Button>
        </div>
      </div>
    </div>
  );
}
