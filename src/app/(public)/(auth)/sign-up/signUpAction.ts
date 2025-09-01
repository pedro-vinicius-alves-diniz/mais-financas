"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { hashSync } from "bcrypt-ts";

export default async function SignUpAction(
  _prevState: any,
  formData: FormData
) {
  const entries = Array.from(formData.entries());

  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };

  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (user) {
    return {
      message: "Usuário já existente.",
      success: false,
    };
  } else {
      await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: hashSync(data.password),
        },
      });
      redirect("/dashboard");
  }

}
