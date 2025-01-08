import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useCities } from "@/hooks";
import { CompanyFormValues } from "@/schemas/company";
import { State } from "@/types/state-with-cities";
import { useFormContext } from "react-hook-form";
import { X } from "lucide-react";

type StateColor = {
  bg: string;
  text: string;
};

type Props = {
  states: State[];
  stateId: string;
  selectedCities: string[];
  stateColorMap: Map<string, StateColor>;
  onCityAdd: (cityId: string) => void;
  onCityRemove: (cityId: string) => void;
};

export function CitySelect({
  states,
  selectedCities,
  stateId,
  onCityAdd,
  onCityRemove,
  stateColorMap,
}: Props) {
  const { data: cities, isLoading } = useCities(stateId);
  const { control } = useFormContext<CompanyFormValues>();

  const currentState = states.find((s) => s.id === stateId);
  const stateCities = selectedCities.filter((cityId) =>
    currentState?.cities.includes(cityId)
  );

  if (isLoading) {
    return <Skeleton className="h-10 w-full md:w-80" />;
  }

  if (!currentState) return null;

  const stateColor = stateColorMap.get(stateId);
  const bgColor = stateColor?.bg || "bg-gray-100";
  const textColor = stateColor?.text || "text-gray-700";

  return (
    <div className="rounded-lg border border-gray-100 shadow-sm">
      <div className="p-3 border-b border-gray-100 bg-gray-50">
        <FormLabel className="text-sm font-medium text-gray-700">
          {currentState.name}
        </FormLabel>
      </div>

      <div className="p-4">
        <div className="max-w-md">
          <Select onValueChange={onCityAdd} value="">
            <SelectTrigger className="h-9">
              <SelectValue placeholder={`Seleccionar municipio`} />
            </SelectTrigger>
            <SelectContent>
              {cities
                ?.filter((city) => !selectedCities.includes(city.id))
                .map((city) => (
                  <SelectItem key={city.id} value={city.id}>
                    {city.name}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <FormField
          control={control}
          name="cities"
          render={() => (
            <FormItem>
              {stateCities.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {stateCities.map((cityId) => {
                    const cityData = cities?.find((c) => c.id === cityId);
                    if (!cityData) return null;

                    return (
                      <span
                        key={cityId}
                        className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${bgColor} ${textColor}`}
                      >
                        {cityData.name}
                        <button
                          onClick={() => onCityRemove(cityId)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-red-600 focus:opacity-100 focus:outline-none"
                          aria-label={`Eliminar ${cityData.name}`}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </span>
                    );
                  })}
                </div>
              )}
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
