import { getServiceAreaAction } from "@/lib/actions/service-areas";
import { queryKeys } from "@/store";
import { useQuery } from "@tanstack/react-query";

export const useServiceArea = (id: string) => {
  return useQuery({
    queryKey: [...queryKeys.serviceAreas.all, id],
    queryFn: () => getServiceAreaAction(id),
    enabled: !!id,
  });
};
