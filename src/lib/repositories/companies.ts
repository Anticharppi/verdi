import { Prisma } from "@prisma/client";
import { db } from "./db";

export class CompaniesRepository {
  static async create(data: Prisma.CompanyCreateInput) {
    return db.company.create({ data });
  }
}
