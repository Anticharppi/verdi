"use server";

import { CititesRepository } from "@/lib/repositories";

export async function getCitiesAction(stateId: string) {
  return await CititesRepository.findByStateId(stateId);
}
