import { useState, useEffect } from "react";
import { State } from "@prisma/client";

export function useSelectedStates(
  states: State[] | undefined,
  selectedCities: string[]
) {
  const [selectedStates, setSelectedStates] = useState<string[]>(() => {
    if (!states || !selectedCities?.length) return [];

    const stateIds = new Set<string>();
    states.forEach((state) => {
      if (selectedCities.some((cityId) => cityId.startsWith(state.id))) {
        stateIds.add(state.id);
      }
    });

    return Array.from(stateIds);
  });

  useEffect(() => {
    if (!states?.length || !selectedCities?.length) {
      setSelectedStates([]);
      return;
    }

    const stateIds = new Set<string>();
    states.forEach((state) => {
      if (selectedCities.some((cityId) => cityId.startsWith(state.id))) {
        stateIds.add(state.id);
      }
    });

    setSelectedStates((prev) => {
      const newStates = Array.from(stateIds);
      if (JSON.stringify(prev.sort()) !== JSON.stringify(newStates.sort())) {
        return newStates;
      }
      return prev;
    });
  }, [selectedCities, states]);

  return { selectedStates, setSelectedStates };
}
