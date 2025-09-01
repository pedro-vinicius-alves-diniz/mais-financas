import { signOut } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default function Home() {
  async function sair(){
    'use server'

    await signOut({redirect: true, redirectTo: "/sign-in"})
  }

  return (
    <main>
      <div>Hello world!</div>

      <Button onClick={sair}>Sair</Button>
    </main>
  );
}
