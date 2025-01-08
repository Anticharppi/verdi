"use server";

import { StatesRepository } from "@/lib/repositories";

export async function getStatesAction() {
  const states = await StatesRepository.findAll();
  const result = states.map((state) => {
    const cities = state.cities.map(({ id }) => id);
    return { ...state, cities };
  });
  return result;
}
