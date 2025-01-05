import { getUserInSession } from "@/lib/actions/users";
import { queryKeys } from "@/store";
import { Company, User } from "@prisma/client";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useUser(): UseQueryResult<User, Error> {
  return useQuery({
    queryKey: queryKeys.session.user,
    queryFn: getUserInSession,
  });
}
