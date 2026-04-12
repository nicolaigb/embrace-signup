"use server";

import { SignupCreateInput } from "@/lib/generated/prisma/models";
import prisma from "@/lib/prisma";

export default async function createSignup(signup: SignupCreateInput) {
  await prisma.signup.create({
    data: signup,
  });
}
