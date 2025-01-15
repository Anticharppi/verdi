import { db } from "./db";

export class CompanyCitiesRepository {
  static async findManyByIdCityIdAndCompanyId(
    cityId: string,
    companyId: string
  ) {
    return db.companyCity.findMany({
      where: {
        cityId,
        companyId,
      },
    });
  }
}
