import { compareSync } from "bcrypt-ts";
import { prisma } from "./prisma";

type CredentialsProps = {
  email?: string | null;
  password?: string | null;
  name?: string | null;
};

export async function findUserByCredentials(
  email: string,
  password: string
): Promise<CredentialsProps | null> {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) return null;

  if (!password || !user.password) {
    return null;
  }

  const passwordMatch = compareSync(password, user.password);

  if (!passwordMatch) {
    return null;
  }

  return { email: user.email, name: user.name };
}
