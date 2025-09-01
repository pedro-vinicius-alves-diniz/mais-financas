import { signIn } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import logo from "@/assets/logo.svg"

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
          <form className="space-y-6">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Esqueceu a sua senha?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>

            <div className="space-y-2">
              <Button type="submit" className="w-full cursor-pointer">
                Entrar
              </Button>
              <Button type="button" variant="outline" className="w-full cursor-pointer" onClick={signInWithGoogle}>
                Entrar com Google
              </Button>
              <Button variant="link" className="w-full" asChild>
                
                <Link href="/sign-up">Criar uma conta</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
