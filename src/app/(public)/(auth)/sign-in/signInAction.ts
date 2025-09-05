"use server";

import { signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginAction(_prevState: any, formData: FormData) {
    console.log(formData)
  try {
    await signIn("credentials", {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        redirect: false
    });

    return { success: true };
  } catch (error) {
    return {
      message: "As credenciais estão incorretas.",
      success: false,
    };
  }
}
