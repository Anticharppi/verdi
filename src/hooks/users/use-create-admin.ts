import { createAdminAction } from "@/lib/actions/users";
import { queryKeys } from "@/store";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useCreateAdmin(): UseQueryResult<{ code: string }, Error> {
  return useQuery({
    queryKey: queryKeys.auth.welcome,
    queryFn: createAdminAction,
  });
}
