"use server";

import { CompaniesRepository } from "@/lib/repositories";
import { ServiceAreasRepository } from "@/lib/repositories/service-areas";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export type Input = {
  id: string;
  companyId: string;
  cityId: string;
  code: string;
};

export async function updateServiceAreaAction({ id, ...input }: Input) {
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
    const serviceArea = await ServiceAreasRepository.findById(id);

    if (!serviceArea) {
      return {
        success: false,
        message: "Área de servicio no encontrada",
      };
    }

    if (serviceArea.id !== id && serviceArea.code === input.code) {
      return {
        success: false,
        message: "El código NUAP ingresado ya está en uso",
      };
    }
    const companyCity = company.cities.find((c) => c.cityId === input.cityId);

    if (!companyCity) {
      return {
        success: false,
        message: "La ciudad no pertenece a la empresa",
      };
    }
    await ServiceAreasRepository.udpate(id, {
      code: input.code,
      companyCityId: companyCity.id,
    });
    return {
      success: true,
      message: "Área de servicio actualizada correctamente",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Ocurrió un error al actualizar el área de servicio",
    };
  }
}
