import { db } from "./db";

export class ServiceAreasRepository {
  static async findAllByCompanyId(companyId: string) {
    return await db.nuap.findMany({
      where: {
        company: {
          id: companyId,
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
}
