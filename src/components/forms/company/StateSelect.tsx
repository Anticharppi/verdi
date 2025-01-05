import { FormLabel } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { useCities } from "@/hooks";

type Props = {
  stateId: string;
  stateName: string;
  selectedCities: string[];
  onCityAdd: (cityId: string) => void;
};

export function StateSelect({
  stateId,
  stateName,
  selectedCities,
  onCityAdd,
}: Props) {
  const { data: cities, isLoading } = useCities(stateId);

  if (isLoading) {
    return <Skeleton className="h-10 w-full" />;
  }

  return (
    <div className="space-y-1">
      <FormLabel className="text-sm text-gray-600">{stateName}</FormLabel>
      <Select onValueChange={onCityAdd} value="">
        <SelectTrigger className="h-9">
          <SelectValue placeholder={`Selecciona una ciudad de ${stateName}`} />
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
  );
}
