import { KindeUser, Prisma } from "@prisma/client";
import { db } from "./db";

export class KindeUsersRepository {
  static async sync(
    id: string,
    data:
      | Prisma.KindeUserUncheckedCreateInput
      | Prisma.KindeUserUncheckedCreateInput
  ): Promise<KindeUser> {
    return db.kindeUser.upsert({
      where: { id },
      update: data,
      create: data,
    });
  }

  static async findById(id: string): Promise<KindeUser | null> {
    return db.kindeUser.findUnique({ where: { id } });
  }
}
