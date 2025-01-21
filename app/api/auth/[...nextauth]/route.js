import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions"; // Adjust the path to your authOptions file

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
