"use server";

import { UsersRepository } from "@/lib/repositories";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function createAdminAction() {
  const kindeUser = await getKindeServerSession().getUser();
  if (!kindeUser) {
    return {
      code: "USER_NOT_FOUND",
    };
  }
  const user = await UsersRepository.findById(kindeUser.id);
  if (user) {
    return {
      code: "USER_ALREADY_EXISTS",
    };
  }
  await UsersRepository.create({
    id: kindeUser.id,
    email: kindeUser.email,
    firstName: kindeUser.given_name,
    lastName: kindeUser.family_name,
    image: kindeUser.picture,
  });
  return {
    code: "USER_CREATED",
  };
}
