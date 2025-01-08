import { Skeleton } from "@/components/ui/skeleton";
import { stateColors } from "@/constants/state-colors";
import { useCities } from "@/hooks";
import { State } from "@/types/state-with-cities";
import { useMemo } from "react";
interface SelectedCitiesProps {
  cityId: string;
  state: State;
  onRemove: (cityId: string) => void;
  stateColorMap: Map<string, (typeof stateColors)[0]>;
}

export function SelectedCities({
  cityId,
  state,
  stateColorMap,
  onRemove,
}: SelectedCitiesProps) {
  const { data: cities, isLoading: isLoadingCities } = useCities(state.id);

  if (isLoadingCities || !cities) return <Skeleton className="w-20 h-6" />;

  const city = useMemo(
    () => cities.find((city) => city.id === cityId),
    [cities, cityId]
  );

  if (!city) return null;

  const colorObject = stateColorMap.get(state.id) || {
    bg: "bg-gray-50",
    border: "border-gray-100",
    text: "text-gray-700",
    textLight: "text-gray-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full ${colorObject.bg} ${colorObject.border} border`}
    >
      <span className={colorObject.text}>
        {state.name} - {city.name}
      </span>
      <button
        type="button"
        onClick={() => onRemove(cityId)}
        className={`ml-1 ${colorObject.textLight} hover:text-red-500`}
      >
        ×
      </button>
    </span>
  );
}
