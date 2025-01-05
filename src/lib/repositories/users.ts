import { Prisma } from "@prisma/client";
import { db } from "./db";

export class UsersRepository {
  static async create(data: Prisma.UserUncheckedCreateInput) {
    return db.user.create({ data });
  }

  static findById(id: string) {
    return db.user.findUnique({ where: { id } });
  }
}
