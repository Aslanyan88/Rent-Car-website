"use client";

import { useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { parse } from "date-fns/parse";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterFormProps {
  brands: { brand: string }[];
  types: { type: string }[];
  transmissions: { transmission: string }[];
  locations: {
    id: string;
    state: string;
    city: string;
  }[];
  currentFilters: Record<string, string | string[] | undefined>;
}

export function FilterForm({
  brands,
  types,
  transmissions,
  locations,
  currentFilters,
}: FilterFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Parse date from search params or set to undefined
  const [startDate, setStartDate] = useState<Date | undefined>(
    currentFilters.startDate 
      ? parse(currentFilters.startDate as string, 'yyyy-MM-dd', new Date()) 
      : undefined
  );
  const [endDate, setEndDate] = useState<Date | undefined>(
    currentFilters.endDate
      ? parse(currentFilters.endDate as string, 'yyyy-MM-dd', new Date())
      : undefined
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      params.delete("page");
      return params.toString();
    },
    [searchParams]
  );

  const handleFilterChange = (name: string, value: string) => {
    router.push(`/cars?${createQueryString(name, value)}`);
  };

  const handleDateChange = (start?: Date, end?: Date) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // Set or delete start date
    if (start) {
      params.set('startDate', format(start, 'yyyy-MM-dd'));
      setStartDate(start);
    } else {
      params.delete('startDate');
      setStartDate(undefined);
    }
    
    // Set or delete end date
    if (end) {
      params.set('endDate', format(end, 'yyyy-MM-dd'));
      setEndDate(end);
    } else {
      params.delete('endDate');
      setEndDate(undefined);
    }
    
    // Remove page parameter
    params.delete('page');
    
    // Navigate with new params
    router.push(`/cars?${params.toString()}`);
  };

  const selectTriggerClass =
    "bg-white border border-gray-200 focus:ring-2 focus:ring-[#5937E0] focus:border-[#5937E0] hover:bg-gray-50";
  const selectContentClass = "bg-white border border-gray-200";
  const selectItemClass =
    "hover:bg-[#5937E0] hover:text-white focus:bg-[#5937E0] focus:text-white";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
      {/* Brand Filter */}
      <div className="space-y-2">
        <Label htmlFor="brand" className="text-gray-700">
          Brand
        </Label>
        <Select
          value={currentFilters.brand?.toString() || "all"}
          onValueChange={(value) =>
            handleFilterChange("brand", value === "all" ? "" : value)
          }
        >
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="All Brands" />
          </SelectTrigger>
          <SelectContent className={selectContentClass}>
            <SelectItem value="all" className={selectItemClass}>
              All Brands
            </SelectItem>
            {brands.map(({ brand }) => (
              <SelectItem key={brand} value={brand} className={selectItemClass}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Type Filter */}
      <div className="space-y-2">
        <Label htmlFor="type" className="text-gray-700">
          Type
        </Label>
        <Select
          value={currentFilters.type?.toString() || "all"}
          onValueChange={(value) =>
            handleFilterChange("type", value === "all" ? "" : value)
          }
        >
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent className={selectContentClass}>
            <SelectItem value="all" className={selectItemClass}>
              All Types
            </SelectItem>
            {types.map(({ type }) => (
              <SelectItem key={type} value={type} className={selectItemClass}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Transmission Filter */}
      <div className="space-y-2">
        <Label htmlFor="transmission" className="text-gray-700">
          Transmission
        </Label>
        <Select
          value={currentFilters.transmission?.toString() || "all"}
          onValueChange={(value) =>
            handleFilterChange("transmission", value === "all" ? "" : value)
          }
        >
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="All Transmissions" />
          </SelectTrigger>
          <SelectContent className={selectContentClass}>
            <SelectItem value="all" className={selectItemClass}>
              All Transmissions
            </SelectItem>
            {transmissions.map(({ transmission }) => (
              <SelectItem
                key={transmission}
                value={transmission}
                className={selectItemClass}
              >
                {transmission}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location Filter */}
      <div className="space-y-2">
        <Label htmlFor="location" className="text-gray-700">
          Location
        </Label>
        <Select
          value={currentFilters.locationId?.toString() || "all"}
          onValueChange={(value) =>
            handleFilterChange("locationId", value === "all" ? "" : value)
          }
        >
          <SelectTrigger className={selectTriggerClass}>
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent className={selectContentClass}>
            <SelectItem value="all" className={selectItemClass}>
              All Locations
            </SelectItem>
            {locations.map((location) => (
              <SelectItem
                key={location.id}
                value={location.id}
                className={selectItemClass}
              >
                {location.city}, {location.state}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Date Range Filter */}
      <div className="space-y-2">
        <Label className="text-gray-700">Rental Dates</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal truncate",
                !startDate && !endDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4 shrink-0" />
              {startDate && endDate ? (
                <span className="truncate">
                  {format(startDate, 'MMM d')} - {format(endDate, 'MMM d')}
                </span>
              ) : (
                <span>Pick dates</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="range"
              selected={{
                from: startDate,
                to: endDate
              }}
              onSelect={(range) => handleDateChange(range?.from, range?.to)}
              numberOfMonths={2}
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}