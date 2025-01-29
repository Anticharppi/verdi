import { Prisma } from "@prisma/client";
import { CreateServiceAreaRepositoryInput } from "../types/repositories";
import { db } from "./db";

export class ServiceAreasRepository {
  static async findAllByCompanyId(companyId: string) {
    return await db.nuap.findMany({
      where: {
        companyCity: {
          company: {
            id: companyId,
          },
        },
      },
      include: {
        companyCity: {
          include: {
            city: {
              include: {
                state: true,
              },
            },
          },
        },
        nuecas: {
          include: {
            companyCity: {
              include: {
                city: true,
              },
            },
          },
        },
      },
    });
  }

  static async findAllByCompanyCityId(companyCityId: string) {
    return await db.nuap.findMany({
      where: {
        companyCityId,
      },
    });
  }

  static async create(input: Prisma.NuapUncheckedCreateInput) {
    return await db.nuap.create({
      data: input,
    });
  }

  static async udpate(id: string, input: Prisma.NuapUncheckedUpdateInput) {
    return await db.nuap.update({
      where: {
        id,
      },
      data: input,
    });
  }

  static async findByCodeAndCompanyId(code: string, companyId: string) {
    return await db.nuap.findFirst({
      where: {
        code,
        companyCity: {
          company: {
            id: companyId,
          },
        },
      },
    });
  }

  static async findById(id: string) {
    return await db.nuap.findUnique({
      where: {
        id,
      },
      include: {
        companyCity: {
          include: {
            city: {
              include: {
                state: true,
              },
            },
          },
        },
      },
    });
  }
}
