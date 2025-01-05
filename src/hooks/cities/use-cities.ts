import { getCitiesAction } from "@/lib/actions";
import { queryKeys } from "@/store";
import { City } from "@prisma/client";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useCities(stateId: string): UseQueryResult<City[], Error> {
  return useQuery({
    queryKey: queryKeys.cities.citiesByStateId(stateId),
    queryFn: () => getCitiesAction(stateId),
  });
}
