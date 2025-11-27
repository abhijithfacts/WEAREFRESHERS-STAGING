import { AuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import sql from "mssql";
import bcrypt from "bcryptjs";
import createHttpRequest from "../services/http/request";



const users = [
  {
    id: "1",
    email: "user@example.com",
    passwordHash: bcrypt.hashSync("password123", 10),
    name: "Demo User1",
  },
];

const getWebUsers = async(email) => {
  const reqBody = {
  containerId: ["GetWebUser"],
  userId: null,
};
const response = await createHttpRequest("/api/checkpost", "open", reqBody);
console.log(response, "response");
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = users.find((u) => u.email === credentials.email);

        if (
          user &&
          bcrypt.compareSync(credentials.password, user.passwordHash)
        ) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.remember = user.remember;
        token.lastRefresh = Date.now();
      }

      // Rolling extension
      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000;

      if (token.remember && now - token.lastRefresh > oneDay) {
        token.lastRefresh = now;
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
});
