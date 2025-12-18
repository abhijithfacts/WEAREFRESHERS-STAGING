import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import crypto from "crypto";
import createHttpRequest from "../services/http/request";

const hashPassword = (password, salt) => {
  return crypto
    .createHash("sha256")
    .update(password + salt)
    .digest("hex");
};

/* ----------------------------------------
   Fetch user from DB
---------------------------------------- */
const getWebUser = async (UID) => {
  const reqBody = {
    containerId: ["GetWebUser"],
    UID,
  };

  const response = await createHttpRequest("/api/checkpost", "open", reqBody);

  return response?.[0] ?? null;
};

/* ----------------------------------------
   NextAuth configuration
---------------------------------------- */
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "User ID", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        // if (!credentials?.UID || !credentials?.password) {
        //   return null;
        // }

        const user = await getWebUser(credentials.username);

        console.log(user, "kkkkkkkkkkkkkkkkkkkkkkkkkk");

        if (!user) return null;

        // const inputHash = hashPassword(
        //   credentials.password,
        //   user.PARTYMST_DOCNO
        // );
        const inputHash = credentials.password;

        if (inputHash !== user.PARTYMST_LOGIN_PWD) {
          return null;
        }

        return {
          id: user.PARTYMST_DOCNO,
          email: user.PARTYMST_EMAIL_ID1,
          name: user.PARTYMST_DESC,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.lastRefresh = Date.now();
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
      }
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
