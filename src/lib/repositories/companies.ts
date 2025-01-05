import { Company, Prisma } from "@prisma/client";
import { db } from "./db";

export class CompaniesRepository {
  static async create(
    data: Prisma.CompanyUncheckedCreateInput,
    citiIds: string[]
  ) {
    return db.$transaction(async (tx) => {
      const company = await tx.company.create({
        data,
      });
      const cities = await tx.city.findMany({
        where: {
          id: {
            in: citiIds,
          },
        },
        select: {
          id: true,
        },
      });
      await tx.companyCity.createMany({
        data: cities.map((city) => ({
          companyId: company.id,
          cityId: city.id,
        })),
      });
      return company;
    });
  }

  static async findBy(where: Partial<Company>) {
    return db.company.findFirst({
      where: {
        OR: Object.entries(where).map(([key, value]) => ({
          [key]: value,
        })),
      },
    });
  }

  static async findManyByUserId(userId: string) {
    return db.company.findMany({
      where: {
        users: {
          some: {
            id: userId,
          },
        },
      },
    });
  }
}
