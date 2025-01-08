"use server";

import { CititesRepository, CompaniesRepository } from "@/lib/repositories";
import { CompanyFormValues } from "@/schemas/company";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function updateCompanyAction(
  companyFormValues: CompanyFormValues
) {
  try {
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
      id: companyFormValues.id,
    });

    if (!exists) {
      return {
        success: false,
        message: "La empresa no se encontró",
      };
    }
    const { cities, id, ...data } = companyFormValues;
    await CompaniesRepository.update(id, data, cities);

    return {
      success: true,
      message: "Empresa editada correctamente",
    };
  } catch (error) {
    const err = new Error(error);
    return {
      success: false,
      message: err.message || "Ocurrió un error al editar la empresa",
    };
  }
}
