// components/view-all.tsx
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ViewAll() {
  return (
    <Button
      variant="outline"
      className="group relative overflow-hidden border-2 border-black transition-all duration-300 hover:text-white"
      asChild
    >
      <Link href="/cars" aria-label="View all cars">
        <span className="relative z-10 flex items-center gap-2 font-medium">
          View All
          <ChevronRight 
            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" 
            aria-hidden="true"
          />
        </span>
        <div 
          className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" 
          aria-hidden="true"
        />
      </Link>
    </Button>
  );
}