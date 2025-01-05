import { getCompaniesAction } from "@/lib/actions/companies/get-companies";
import { queryKeys } from "@/store";
import { Company } from "@prisma/client";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useCompanies(): UseQueryResult<Company[], Error> {
  return useQuery({
    queryKey: queryKeys.companies.all,
    queryFn: getCompaniesAction,
  });
}
