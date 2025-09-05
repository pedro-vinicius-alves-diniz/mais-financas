import { signIn } from "@/lib/auth";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import logo from "@/assets/logo.svg"
import FormSignIn from "./formSignIn";

export default function SignIn() {
  async function signInWithGoogle() {
    "use server";

    await signIn("google", { redirect: true, redirectTo: "/dashboard" });
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col items-center justify-center">
          <CardTitle>
            <Image src={logo} width={200} alt="100" className="select-none"/>
          </CardTitle>
          <CardDescription>
            Acesse a sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FormSignIn signInGoogle={signInWithGoogle}/>
        </CardContent>
      </Card>
    </div>
  );
}
