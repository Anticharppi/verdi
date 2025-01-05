import { Badge } from "@/components/ui/badge";
import { stateColors } from "@/constants/state-colors";
import { useCities } from "@/hooks";
import { State } from "@prisma/client";
import { X } from "lucide-react";

type Props = {
  cityId: string;
  states: State[];
  selectedStates: string[];
  onRemove: (cityId: string) => void;
  stateColorMap: Map<string, (typeof stateColors)[0]>;
};

export function SelectedCities({
  cityId,
  states,
  selectedStates,
  onRemove,
  stateColorMap,
}: Props) {
  let cityData = null;

  for (const stateId of selectedStates) {
    const { data: cities } = useCities(stateId);
    const city = cities?.find((c) => c.id === cityId);
    if (city) {
      const state = states.find((s) => s.id === stateId);
      cityData = { city, stateName: state?.name, stateId };
      break;
    }
  }

  if (!cityData) return null;

  const colorScheme = stateColorMap.get(cityData.stateId) || stateColors[0];

  return (
    <Badge
      variant="secondary"
      className={`flex items-center gap-2 pl-3 pr-2 py-1.5 ${colorScheme.bg} border ${colorScheme.border}`}
    >
      <span className={colorScheme.text}>{cityData.city.name}</span>
      <span className={colorScheme.textLight}>({cityData.stateName})</span>
      <button
        type="button"
        onClick={() => onRemove(cityId)}
        className={`${colorScheme.textLight} hover:${colorScheme.text} focus:outline-none ml-1`}
      >
        <X className="h-4 w-4" />
      </button>
    </Badge>
  );
}
