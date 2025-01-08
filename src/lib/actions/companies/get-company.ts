"use server";

import { CompaniesRepository } from "@/lib/repositories";

export async function getCompanyAction(id: string) {
  const company = await CompaniesRepository.findById(id);
  if (!company) return null;
  const cities = company.cities.map(({ cityId }) => cityId);
  return { ...company, cities };
}
