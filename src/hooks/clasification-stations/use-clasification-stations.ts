import { getClasificationStationsAction } from "@/lib/actions/clasification-stations";
import { queryKeys } from "@/store";
import { useQuery } from "@tanstack/react-query";

export function useClasificationStations(companyId?: string) {
  return useQuery({
    queryKey: queryKeys.clasificationStations.byCompanyId(companyId),
    queryFn: () => getClasificationStationsAction(companyId),
    enabled: !!companyId,
  });
}
