"use client";

import SignUpAction from "./signUpAction";
import Link from "next/link";
import { useActionState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

export default function FormSignUp() {
  const [state, formAction, isPedding] = useActionState(SignUpAction, null);
  

  useEffect(() => {
    if(state?.success === false){
        toast.error(state?.message)        
    }
  }, [state?.success])

  return (
    <>
       {state?.success === false && (
        <Toaster position="top-center"/>
       )}
      <form action={formAction} className="space-y-6">
        <div className="flex flex-col gap-6">
          <div className="grid gap-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Insira seu nome completo"
              required
            />
          </div>
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
            <Label htmlFor="password">Senha</Label>
            <Input id="password" name="password" type="password" required />
          </div>
        </div>

        <div className="space-y-2">
          <Button type="submit" className="w-full cursor-pointer">
            Cadastrar
          </Button>
          <Button variant="link" className="w-full" asChild>
            <Link href="/sign-in">Eu tenho uma conta</Link>
          </Button>
        </div>
      </form>
    </>
  );
}
