import { getStatesAction } from "@/lib/actions";
import { queryKeys } from "@/store";
import { State } from "@prisma/client";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useStates(): UseQueryResult<State[], Error> {
  return useQuery({
    queryKey: queryKeys.states.all,
    queryFn: getStatesAction,
  });
}
