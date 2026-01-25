"use client";

import * as React from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PropertyType, PropertyStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface PropertyFilters {
  search: string;
  type: PropertyType | "all";
  status: PropertyStatus | "all";
  minBeds: number | "any";
  priceRange: string;
  sortBy: "price-asc" | "price-desc" | "newest";
}

interface PropertyFiltersProps {
  filters: PropertyFilters;
  onFiltersChange: (filters: PropertyFilters) => void;
}

const propertyTypes: (PropertyType | "all")[] = [
  "all",
  "Penthouse",
  "Villa",
  "Mansion",
  "Apartment",
  "Estate",
  "Townhouse",
];

const statusOptions: (PropertyStatus | "all")[] = [
  "all",
  "For Sale",
  "For Rent",
  "Off-Market",
];

const bedroomOptions = ["any", "1", "2", "3", "4", "5+"];

const priceRanges = [
  { value: "all", label: "Any Price" },
  { value: "0-5000000", label: "Under $5M" },
  { value: "5000000-10000000", label: "$5M - $10M" },
  { value: "10000000-20000000", label: "$10M - $20M" },
  { value: "20000000-50000000", label: "$20M - $50M" },
  { value: "50000000+", label: "$50M+" },
];

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "price-asc", label: "Price: Low to High" },
];

export function PropertyFilters({
  filters,
  onFiltersChange,
}: PropertyFiltersProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const updateFilter = <K extends keyof PropertyFilters>(
    key: K,
    value: PropertyFilters[K]
  ) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      type: "all",
      status: "all",
      minBeds: "any",
      priceRange: "all",
      sortBy: "newest",
    });
  };

  const activeFilterCount = [
    filters.type !== "all",
    filters.status !== "all",
    filters.minBeds !== "any",
    filters.priceRange !== "all",
  ].filter(Boolean).length;

  return (
    <div className="space-y-4">
      {/* Desktop Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or location..."
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Desktop Filter Dropdowns */}
        <div className="hidden lg:flex gap-3">
          <Select
            value={filters.type}
            onValueChange={(value) =>
              updateFilter("type", value as PropertyType | "all")
            }
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type === "all" ? "All Types" : type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.status}
            onValueChange={(value) =>
              updateFilter("status", value as PropertyStatus | "all")
            }
          >
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map((status) => (
                <SelectItem key={status} value={status}>
                  {status === "all" ? "All Status" : status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={String(filters.minBeds)}
            onValueChange={(value) =>
              updateFilter("minBeds", value === "any" ? "any" : parseInt(value))
            }
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Beds" />
            </SelectTrigger>
            <SelectContent>
              {bedroomOptions.map((beds) => (
                <SelectItem key={beds} value={beds}>
                  {beds === "any" ? "Any Beds" : `${beds}+ Beds`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={filters.priceRange}
            onValueChange={(value) => updateFilter("priceRange", value)}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Price" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Separator orientation="vertical" className="h-10" />

          <Select
            value={filters.sortBy}
            onValueChange={(value) =>
              updateFilter("sortBy", value as PropertyFilters["sortBy"])
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Mobile Filter Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" className="relative">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
              {activeFilterCount > 0 && (
                <Badge
                  variant="default"
                  className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                >
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <SheetHeader>
              <SheetTitle>Filter Properties</SheetTitle>
            </SheetHeader>
            <div className="space-y-6 mt-6 overflow-y-auto">
              {/* Mobile Filter Options */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Property Type</label>
                  <Select
                    value={filters.type}
                    onValueChange={(value) =>
                      updateFilter("type", value as PropertyType | "all")
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type === "all" ? "All Types" : type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <Select
                    value={filters.status}
                    onValueChange={(value) =>
                      updateFilter("status", value as PropertyStatus | "all")
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      {statusOptions.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status === "all" ? "All Status" : status}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Bedrooms</label>
                  <Select
                    value={String(filters.minBeds)}
                    onValueChange={(value) =>
                      updateFilter(
                        "minBeds",
                        value === "any" ? "any" : parseInt(value)
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Beds" />
                    </SelectTrigger>
                    <SelectContent>
                      {bedroomOptions.map((beds) => (
                        <SelectItem key={beds} value={beds}>
                          {beds === "any" ? "Any Beds" : `${beds}+ Beds`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Price Range</label>
                  <Select
                    value={filters.priceRange}
                    onValueChange={(value) => updateFilter("priceRange", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Price" />
                    </SelectTrigger>
                    <SelectContent>
                      {priceRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-2">
                  <label className="text-sm font-medium">Sort By</label>
                  <Select
                    value={filters.sortBy}
                    onValueChange={(value) =>
                      updateFilter("sortBy", value as PropertyFilters["sortBy"])
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sort" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={clearFilters}
                >
                  Clear All
                </Button>
                <Button className="flex-1" onClick={() => setIsOpen(false)}>
                  Apply Filters
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Active Filters */}
      {activeFilterCount > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {filters.type !== "all" && (
            <Badge variant="secondary" className="gap-1">
              {filters.type}
              <button
                onClick={() => updateFilter("type", "all")}
                className="ml-1 hover:text-foreground"
                aria-label={`Remove ${filters.type} filter`}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.status !== "all" && (
            <Badge variant="secondary" className="gap-1">
              {filters.status}
              <button
                onClick={() => updateFilter("status", "all")}
                className="ml-1 hover:text-foreground"
                aria-label={`Remove ${filters.status} filter`}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.minBeds !== "any" && (
            <Badge variant="secondary" className="gap-1">
              {filters.minBeds}+ Beds
              <button
                onClick={() => updateFilter("minBeds", "any")}
                className="ml-1 hover:text-foreground"
                aria-label="Remove bedrooms filter"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {filters.priceRange !== "all" && (
            <Badge variant="secondary" className="gap-1">
              {priceRanges.find((r) => r.value === filters.priceRange)?.label}
              <button
                onClick={() => updateFilter("priceRange", "all")}
                className="ml-1 hover:text-foreground"
                aria-label="Remove price filter"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear all
          </Button>
        </div>
      )}
    </div>
  );
}
