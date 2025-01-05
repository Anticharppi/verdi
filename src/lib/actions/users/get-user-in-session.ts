"use server";

import { UsersRepository } from "@/lib/repositories";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function getUserInSession() {
  const kindeUser = await getKindeServerSession().getUser();
  const user = await UsersRepository.findById(kindeUser.id);
  return user;
}
