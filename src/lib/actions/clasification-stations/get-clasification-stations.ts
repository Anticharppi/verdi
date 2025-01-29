"use server";

import { ClasificationStationRepository } from "@/lib/repositories";

export async function getClasificationStationsAction(companyId: string) {
  return ClasificationStationRepository.findAllByCompanyId(companyId);
}
