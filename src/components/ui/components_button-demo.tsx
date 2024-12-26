import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ButtonDemo() {
  return (
    <div className="space-y-4 mt-5">
      <Link href="/cars" className="hover:text-[#5937E0] transition-colors">
        <Button
          className="bg-[#FF9E0C] text-white rounded-xl px-6 py-2.5 transition-all duration-300 
        hover:bg-[#E08C00] hover:shadow-lg hover:translate-y-[-2px]"
        >
          View all cars
        </Button>
      </Link>
    </div>
  );
}
