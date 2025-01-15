"use server";

import { ServiceAreasRepository } from "@/lib/repositories/service-areas";

export async function getServiceAreaAction(id: string) {
  const serviceArea = await ServiceAreasRepository.findById(id);
  return {
    ...serviceArea,
    cityId: serviceArea.companyCity.cityId,
  };
}
