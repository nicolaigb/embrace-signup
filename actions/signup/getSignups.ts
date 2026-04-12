"use server";

import prisma from "@/lib/prisma";

export async function getSignups() {
  const signups = await prisma.signup.findMany();
  return signups;
}
