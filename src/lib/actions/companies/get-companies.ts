"use server";

import { CompanyUsersRepository } from "@/lib/repositories";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function getCompaniesAction() {
  const { id: userId } = await getKindeServerSession().getUser();
  const companies = await CompanyUsersRepository.findAllByUserId(userId);
  const response = companies.map(({ company }) => {
    return {
      ...company,
      cities: company.cities.map(({ id, city }) => ({
        companyCityId: id,
        ...city,
      })),
    };
  });
  return response;
}
