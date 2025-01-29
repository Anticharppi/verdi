import { db } from "./db";

export class ClasificationStationRepository {
  static findAllByCompanyId(companyId: string) {
    return db.nueca.findMany({
      where: {
        companyCity: {
          companyId: companyId,
        },
      },
      include: {
        companyCity: {
          include: {
            city: true,
          },
        },
        materials: true,
      },
    });
  }
}
