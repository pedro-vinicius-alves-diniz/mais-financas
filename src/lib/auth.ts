import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import { findUserByCredentials } from "./user"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google, Credentials({
    credentials: {
      email: {},
      password: {}
    },
    authorize: async (credentials) => {

      const user = await findUserByCredentials(credentials.email as string, credentials.password as string)
      
      return user
    }
  })],
})