"use server";

import { UsersRepository } from "@/lib/repositories";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function createAdminAction() {
  const kindeUser = await getKindeServerSession().getUser();
  const user = await UsersRepository.findById(kindeUser.id);
  if (user) {
    return {
      success: false,
    };
  }
  await UsersRepository.create({
    id: kindeUser.id,
    email: kindeUser.email,
    firstName: kindeUser.given_name,
    lastName: kindeUser.family_name,
  });
  return {
    success: true,
  };
}
