"use server";

import { CititesRepository, CompaniesRepository } from "@/lib/repositories";
import { CompanyFormValues } from "@/schemas/company";

export async function createCompanyAction(
  companyFormValues: CompanyFormValues
) {
  const existsCities = await CititesRepository.findByIds(
    companyFormValues.cities
  );
  if (!existsCities?.length) {
    throw new Error("Ciudades no encontradas");
  }
  if (existsCities.length !== companyFormValues.cities.length) {
    throw new Error("No se encontraron todas las ciudades");
  }
  const exists = await CompaniesRepository.findBy({
    nit: companyFormValues.nit,
    email: companyFormValues.email,
    superServicesId: companyFormValues.superServicesId,
    phone: companyFormValues.phone,
  });
  if (exists) {
    throw new Error("La empresa ya existe");
  }
  const { cities, ...data } = companyFormValues;
  await CompaniesRepository.create(data, cities);
}
