"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PropertyType, PropertyStatus } from "@/lib/types";
import { useTranslation } from "@/components/language-provider";

export interface PropertyFilters {
  search: string;
  types: PropertyType[];
  statuses: PropertyStatus[];
  minBeds: number[];
  priceRanges: string[];
  sortBy: "price-asc" | "price-desc" | "newest";
}

interface PropertyFiltersProps {
  filters: PropertyFilters;
  onFiltersChange: React.Dispatch<React.SetStateAction<PropertyFilters>>;
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
  { value: "all", key: "anyPrice" },
  { value: "0-5000000", key: "under5" },
  { value: "5000000-10000000", key: "r5_10" },
  { value: "10000000-20000000", key: "r10_20" },
  { value: "20000000-50000000", key: "r20_50" },
  { value: "50000000+", key: "over50" },
] as const;

const sortOptions = [
  { value: "newest", key: "newest" },
  { value: "price-desc", key: "priceDesc" },
  { value: "price-asc", key: "priceAsc" },
] as const;

export function PropertyFilters({
  filters,
  onFiltersChange,
}: PropertyFiltersProps) {
  const { dict } = useTranslation();
  const P = dict.properties;
  const updateFilter = <K extends keyof PropertyFilters>(
    key: K,
    value: PropertyFilters[K]
  ) => {
    onFiltersChange((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      types: [],
      statuses: [],
      minBeds: [],
      priceRanges: [],
      sortBy: "newest",
    });
  };

  const activeFilterCount =
    (filters.search.trim() ? 1 : 0) +
    filters.types.length +
    filters.statuses.length +
    filters.minBeds.length +
    filters.priceRanges.length;

  const toggleInArray = <T,>(items: T[], item: T): T[] =>
    items.includes(item) ? items.filter((i) => i !== item) : [...items, item];

  return (
    <div className="space-y-4">
      {/* Desktop Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={P.searchPlaceholder}
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Desktop Controls */}
        <div className="hidden lg:flex gap-3 items-center">
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="h-10"
          >
            {P.clearAll}
          </Button>
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
                  {P.sort[option.key]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="lg:hidden flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="h-10"
          >
            {P.clearAll}
          </Button>
          <Select
            value={filters.sortBy}
            onValueChange={(value) =>
              updateFilter("sortBy", value as PropertyFilters["sortBy"])
            }
          >
            <SelectTrigger className="flex-1">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {P.sort[option.key]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Multi-select Filter Chips */}
      <div className="grid gap-4">
        <div className="space-y-2">
          <p className="text-sm font-medium">{P.filterType}</p>
          <div className="flex flex-wrap gap-2">
            {propertyTypes.filter((t) => t !== "all").map((type) => {
              const selected = filters.types.includes(type as PropertyType);
              return (
                <Button
                  key={type}
                  variant={selected ? "default" : "outline"}
                  size="sm"
                  onClick={() =>
                    updateFilter("types", toggleInArray(filters.types, type as PropertyType))
                  }
                >
                  {P.types[type] ?? type}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">{P.filterStatus}</p>
          <div className="flex flex-wrap gap-2">
            {statusOptions.filter((s) => s !== "all").map((status) => {
              const selected = filters.statuses.includes(status as PropertyStatus);
              return (
                <Button
                  key={status}
                  variant={selected ? "default" : "outline"}
                  size="sm"
                  onClick={() =>
                    updateFilter(
                      "statuses",
                      toggleInArray(filters.statuses, status as PropertyStatus)
                    )
                  }
                >
                  {P.statuses[status] ?? status}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">{P.filterBedrooms}</p>
          <div className="flex flex-wrap gap-2">
            {bedroomOptions.filter((b) => b !== "any").map((beds) => {
              const value = beds === "5+" ? 5 : parseInt(beds, 10);
              const selected = filters.minBeds.includes(value);
              return (
                <Button
                  key={beds}
                  variant={selected ? "default" : "outline"}
                  size="sm"
                  onClick={() =>
                    updateFilter("minBeds", toggleInArray(filters.minBeds, value))
                  }
                >
                  {beds === "5+" ? P.bedsPlus : `${beds} ${P.bedsSuffix}`}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">{P.filterPrice}</p>
          <div className="flex flex-wrap gap-2">
            {priceRanges.filter((r) => r.value !== "all").map((range) => {
              const selected = filters.priceRanges.includes(range.value);
              return (
                <Button
                  key={range.value}
                  variant={selected ? "default" : "outline"}
                  size="sm"
                  onClick={() =>
                    updateFilter(
                      "priceRanges",
                      toggleInArray(filters.priceRanges, range.value)
                    )
                  }
                >
                  {P.priceRanges[range.key]}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Filters */}
      {activeFilterCount > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">{P.activeFilters}</span>
          {filters.types.map((type) => (
            <Badge key={`type-${type}`} variant="secondary" className="gap-1">
              {P.types[type] ?? type}
              <button
                onClick={() =>
                  updateFilter("types", filters.types.filter((t) => t !== type))
                }
                className="ml-1 hover:text-foreground"
                aria-label={`Remove ${type} filter`}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {filters.statuses.map((status) => (
            <Badge key={`status-${status}`} variant="secondary" className="gap-1">
              {P.statuses[status] ?? status}
              <button
                onClick={() =>
                  updateFilter(
                    "statuses",
                    filters.statuses.filter((s) => s !== status)
                  )
                }
                className="ml-1 hover:text-foreground"
                aria-label={`Remove ${status} filter`}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {filters.minBeds.map((beds) => (
            <Badge key={`beds-${beds}`} variant="secondary" className="gap-1">
              {beds === 5 ? P.bedsPlus : `${beds} ${P.bedsSuffix}`}
              <button
                onClick={() =>
                  updateFilter(
                    "minBeds",
                    filters.minBeds.filter((b) => b !== beds)
                  )
                }
                className="ml-1 hover:text-foreground"
                aria-label="Remove bedrooms filter"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {filters.priceRanges.map((rangeValue) => (
            <Badge key={`price-${rangeValue}`} variant="secondary" className="gap-1">
              {(() => {
                const r = priceRanges.find((r) => r.value === rangeValue);
                return r ? P.priceRanges[r.key] : rangeValue;
              })()}
              <button
                onClick={() =>
                  updateFilter(
                    "priceRanges",
                    filters.priceRanges.filter((r) => r !== rangeValue)
                  )
                }
                className="ml-1 hover:text-foreground"
                aria-label="Remove price filter"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            {P.clearAll}
          </Button>
        </div>
      )}
    </div>
  );
}
