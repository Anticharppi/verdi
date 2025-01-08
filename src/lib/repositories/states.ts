import { db } from "./db";

export class StatesRepository {
  static async findAll() {
    return db.state.findMany({
      select: {
        id: true,
        name: true,
        cities: {
          select: {
            id: true,
          },
        },
      },
    });
  }
}
