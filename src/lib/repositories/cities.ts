import { db } from "./db";

export class CititesRepository {
  static async findByIds(ids: string[]) {
    return db.city.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }

  static async findByStateId(stateId: string) {
    return db.city.findMany({
      where: {
        stateId,
      },
    });
  }
}
