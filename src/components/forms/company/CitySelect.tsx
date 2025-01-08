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

type Props = {
  states: State[];
  stateId: string;
  selectedCities: string[];
  onCityAdd: (cityId: string) => void;
  onCityRemove: (cityId: string) => void;
  stateColorMap: Map<string, { bg: string; text: string }>;
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

  // Encontrar el estado actual y sus ciudades seleccionadas
  const currentState = states.find((s) => s.id === stateId);
  const stateCities = selectedCities.filter((cityId) =>
    currentState?.cities.includes(cityId)
  );

  if (isLoading) {
    return <Skeleton className="h-10 w-full" />;
  }

  if (!currentState) return null;

  const stateColor = stateColorMap.get(stateId);

  return (
    <div className="space-y-3 p-3 rounded-lg bg-gray-50">
      <FormLabel className="text-sm font-medium text-gray-700">
        {currentState.name}
      </FormLabel>

      <Select onValueChange={onCityAdd} value="">
        <SelectTrigger className="h-9 bg-white">
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

      <FormField
        control={control}
        name="cities"
        render={() => (
          <FormItem>
            {stateCities.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {stateCities.map((cityId) => {
                  const cityData = cities?.find((c) => c.id === cityId);
                  if (!cityData) return null;

                  return (
                    <span
                      key={cityId}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-sm ${
                        stateColor?.bg || "bg-purple-100"
                      } ${stateColor?.text || "text-purple-700"}`}
                    >
                      {cityData.name}
                      <button
                        onClick={() => onCityRemove(cityId)}
                        className="hover:text-red-600 transition-colors"
                      >
                        ×
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
  );
}
