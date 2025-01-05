import { db } from "./db";

export class StatesRepository {
  static async findAll() {
    return db.state.findMany();
  }
}
