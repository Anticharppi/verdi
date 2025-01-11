import { getCompaniesAction } from "@/lib/actions/companies/get-companies";
import { queryKeys } from "@/store";
import { useQuery } from "@tanstack/react-query";

export function useCompanies() {
  return useQuery({
    queryKey: queryKeys.companies.all,
    queryFn: getCompaniesAction,
  });
}
