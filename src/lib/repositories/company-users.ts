import { db } from "./db";

export class CompanyUsersRepository {
  static async findAllByUserId(userId: string) {
    return db.companyUser.findMany({
      where: {
        userId,
      },
      include: {
        company: {
          include: {
            cities: {
              include: {
                city: {
                  include: {
                    state: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}
