"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSelectedCompanyStore } from "@/store/companies";
import { Skeleton } from "@/components/ui/skeleton";

export interface CitySelectorProps {
  selectedState: string;
  selectedCity: string;
  onCitySelect: (cityId: string) => void;
}

export const CitySelectorSkeleton = () => {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-10 w-full" />
    </div>
  );
};

export const CitySelector = ({
  selectedState,
  selectedCity,
  onCitySelect,
}: CitySelectorProps) => {
  const { cities, isLoading } = useSelectedCompanyStore();

  const filteredCities = selectedState
    ? cities.filter((city) => city.stateId === selectedState)
    : [];

  const selectedCityData = cities.find((city) => city.id === selectedCity);

  if (isLoading) return <CitySelectorSkeleton />;

  if (!selectedState) return null;

  return (
    <div>
      <label className="text-sm font-medium text-gray-900 mb-1.5 block">
        Ciudad
      </label>
      <div className="space-y-2">
        <Select
          value={selectedCity}
          onValueChange={onCitySelect}
          defaultValue={selectedCity}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona una ciudad">
              {selectedCityData?.name}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {filteredCities.map((city) => (
              <SelectItem key={city.id} value={city.id}>
                {city.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
