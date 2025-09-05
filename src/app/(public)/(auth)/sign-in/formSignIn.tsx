"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import LoginAction from "./signInAction";
import { redirect } from "next/navigation";

export default function FormSignIn({ signInGoogle }: any) {
  const [state, formAction, isPedding] = useActionState(LoginAction, null);

  useEffect(() => {
      if(state?.success === false){
          toast.error(state?.message)        
      }else if(state?.success === true){
        redirect("dashboard")
      }
    }, [state?.success])


  return (
    <>
      {state?.success === false && (
              <Toaster position="top-center"/>
             )}
      <form className="space-y-6" action={formAction}>
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
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
            <Input id="password" type="password" name="password" required />
          </div>
        </div>

        <div className="space-y-2">
          <Button type="submit" className="w-full cursor-pointer">
            Entrar
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full cursor-pointer"
            onClick={signInGoogle}
          >
            Entrar com Google
          </Button>
          <Button variant="link" className="w-full" asChild>
            <Link href="/sign-up">Criar uma conta</Link>
          </Button>
        </div>
      </form>
    </>
  );
}
