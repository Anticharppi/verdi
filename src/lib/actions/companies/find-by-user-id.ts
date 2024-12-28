"use server";

import { CompaniesRepository } from "../../repositories";

export async function findByUserIdAction(userId: string) {
  const companies = await CompaniesRepository.findManyByUserId(userId);
  return companies;
}
