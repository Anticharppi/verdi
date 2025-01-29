"use server";

import { ServiceAreasRepository } from "@/lib/repositories/service-areas";

export const getByCompanyCityId = async (companyCityId: string) => {
  return await ServiceAreasRepository.findAllByCompanyCityId(companyCityId);
};
