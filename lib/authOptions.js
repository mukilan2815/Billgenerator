import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import db from "@/lib/Model/methods"; // Adjust the path to your db file
import dbConnect from "@/lib/dbConnect"; // Ensure this file handles the DB connection

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        const { name, email, image } = user;
        await dbConnect();

        try {
          const existingUser = await db.createUser({
            name,
            email,
            image,
            role: "USER",
          });

          if (existingUser) {
            user.id = existingUser._id.toString();
            user.credit = existingUser.credit;
            user.role = existingUser.role;
            return true;
          }
        } catch (error) {
          console.log("Error in signIn callback:", error);
          return false;
        }
      }

      return true;
    },
    async session({ session, token }) {
      await dbConnect();

      try {
        const user = await db.getUserById(token.id);
        if (user) {
          session.user = {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            image: user.image,
            credit: user.credit,
            role: user.role,
          };
        }
      } catch (error) {
        console.log("Error in session callback:", error);
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.credit = user.credit;
        token.id = user.id;
        token.role = user.role;
      } else if (!token.id) {
        const dbUser = await db.getUserById(token.email);
        if (dbUser) {
          token.id = dbUser._id.toString();
          token.credit = dbUser.credit;
          token.role = dbUser.role;
        }
      }
      return token;
    },
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // Set session expiration to 30 days (or your desired value)
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 30 * 24 * 60 * 60, // Set JWT expiration to 30 days (or your desired value)
  },
  pages: {
    signIn: "/sign-in", // Custom sign-in page path
  },
};

export default NextAuth(authOptions);
