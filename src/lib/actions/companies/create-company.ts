"use server";

import { CititesRepository, CompaniesRepository } from "@/lib/repositories";
import { CompanyFormValues } from "@/schemas/company";

export async function createCompanyAction(
  companyFormValues: CompanyFormValues
) {
  const existsCities = await CititesRepository.findByIds(
    companyFormValues.cities
  );
  if (
    !existsCities?.length ||
    existsCities.length !== companyFormValues.cities.length
  ) {
    return {
      success: false,
      message: "No se encontraron todas las ciudades",
    };
  }

  const exists = await CompaniesRepository.findBy({
    nit: companyFormValues.nit,
    email: companyFormValues.email,
    superServicesId: companyFormValues.superServicesId,
    phone: companyFormValues.phone,
  });

  if (exists) {
    return {
      success: false,
      message: "Ya existe una empresa con estos datos",
    };
  }
  const { cities, ...data } = companyFormValues;
  await CompaniesRepository.create(data, cities);

  return {
    success: true,
    message: "Empresa creada correctamente",
  };
}
