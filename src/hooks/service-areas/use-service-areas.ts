import { getServiceAreasAction } from "@/lib/actions/service-areas";
import { queryKeys } from "@/store";
import { useQuery } from "@tanstack/react-query";

export const useServiceAreas = (companyId: string | null) => {
  return useQuery({
    queryKey: [...queryKeys.serviceAreas.all, companyId],
    queryFn: () => getServiceAreasAction(companyId!),
    enabled: !!companyId,
  });
};
