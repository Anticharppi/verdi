"use server";

import { CompaniesRepository } from "@/lib/repositories";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function getCompaniesAction() {
  const { id: userId } = await getKindeServerSession().getUser();
  const companies = await CompaniesRepository.findManyByUserId(userId);
  return companies;
}
