import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import logo from "@/assets/logo.svg";
import FormSignUp from "./formSignUp";

export default function SignUp() {

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-col items-center justify-center">
          <CardTitle>
            <Image src={logo} width={200} alt="100" className="select-none"/>
          </CardTitle>
          <CardDescription>Crie uma nova conta</CardDescription>
        </CardHeader>
        <CardContent>
          <FormSignUp/>
        </CardContent>
      </Card>
    </div>
  );
}
