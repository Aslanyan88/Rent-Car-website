import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ViewAll() {
  return (
    <Button 
      variant="outline" 
      className="group relative overflow-hidden transition-all duration-300 hover:text-white"
    >
      <span className="relative z-10 flex items-center gap-2">
        View All
        <ChevronRight className="transition-transform group-hover:translate-x-1" />
      </span>
      <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
    </Button>
  )
}