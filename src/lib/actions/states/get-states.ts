"use server";

import { StatesRepository } from "@/lib/repositories";

export async function getStatesAction() {
  return await StatesRepository.findAll();
}
