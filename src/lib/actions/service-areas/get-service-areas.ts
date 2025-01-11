"use server";

import { ServiceAreasRepository } from "@/lib/repositories/service-areas";

export async function getServiceAreasAction(companyId: string) {
  const serviceAreas = await ServiceAreasRepository.findAllByCompanyId(
    companyId
  );
  return serviceAreas;
}
