"use client";

import { useQuery } from "@tanstack/react-query";
import { getByCompanyCityId } from "@/lib/actions/service-areas";
import { queryKeys } from "@/store";

export const useServiceAreaByCompanyCityId = (companyCityId?: string) => {
  return useQuery({
    queryKey: [...queryKeys.serviceAreas.byCompanyCityId(companyCityId)],
    queryFn: () => getByCompanyCityId(companyCityId),
    enabled: !!companyCityId,
  });
};
