import { getStatesAction } from "@/lib/actions";
import { queryKeys } from "@/store";
import { State } from "@prisma/client";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

type Result = State & { cities: string[] };

export function useStates(): UseQueryResult<Result[], Error> {
  return useQuery({
    queryKey: queryKeys.states.all,
    queryFn: getStatesAction,
  });
}
