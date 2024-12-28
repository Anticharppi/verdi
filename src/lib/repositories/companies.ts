import { Prisma } from "@prisma/client";
import { db } from "./db";

export class CompaniesRepository {
  static async create(data: Prisma.CompanyCreateInput) {
    return db.company.create({ data });
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
