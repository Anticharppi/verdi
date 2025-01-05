"use server";

import { CititesRepository, CompaniesRepository } from "@/lib/repositories";
import { CompanyFormValues } from "@/schemas/company";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function createCompanyAction(
  companyFormValues: CompanyFormValues
) {
  try {
    const user = await getKindeServerSession().getUser();

    if (!user) {
      return {
        success: false,
        message: "No se encontró el usuario",
      };
    }

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
    await CompaniesRepository.create(data, cities, user.id);

    return {
      success: true,
      message: "Empresa creada correctamente",
    };
  } catch (error) {
    const err = new Error(error);
    return {
      success: false,
      message: err.message || "Ocurrió un error al crear la empresa",
    };
  }
}
