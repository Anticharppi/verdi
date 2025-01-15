"use server";

import { CompaniesRepository } from "@/lib/repositories";
import { ServiceAreasRepository } from "@/lib/repositories/service-areas";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export type CreateServiceAreaActionInput = {
  companyId: string;
  cityId: string;
  code: string;
};

export async function createServiceAreaAction(
  input: CreateServiceAreaActionInput
) {
  try {
    const kindeUser = await getKindeServerSession().getUser();
    if (!kindeUser) {
      return {
        success: false,
        message: "Usuario no encontrado",
      };
    }
    const company = await CompaniesRepository.findById(input.companyId);

    if (!company) {
      return {
        success: false,
        message: "Empresa no encontrada",
      };
    }

    const user = company.users.find((u) => u.userId === kindeUser.id);

    if (!user) {
      return {
        success: false,
        message: "No tienes permisos para realizar esta acción",
      };
    }

    const companyCity = company.cities.find((c) => c.cityId === input.cityId);

    if (!companyCity) {
      return {
        success: false,
        message: "Ciudad no encontrada",
      };
    }

    const existingServiceArea =
      await ServiceAreasRepository.findByCodeAndCompanyId(
        input.code,
        company.id
      );

    if (existingServiceArea) {
      return {
        success: false,
        message: "Ya existe un área de servicio con ese código",
      };
    }

    await ServiceAreasRepository.create({
      code: input.code,
      companyCityId: companyCity.id,
    });

    return {
      success: true,
      message: "Área de servicio creada correctamente",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Error al crear el área de servicio",
    };
  }
}
