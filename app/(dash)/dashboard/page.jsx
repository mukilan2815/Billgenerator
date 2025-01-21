import React from "react";
import Dashboard from "@/components/dashboard/dashboard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions"; // Adjust the path to your authOptions file

export const metadata = {
  title: "Dashboard",
  description: "User dashboard",
  alternates: {
    canonical: "https://billgenerator.co.in/dashboard",
  },
  robots: "noindex",
};

export default async function DashBoard() {
  const session = await getServerSession(authOptions);
  if (session && session.user) {
    // Convert session.user to a plain object
    session.user = JSON.parse(JSON.stringify(session.user));
  }

  return <Dashboard session={session} />;
}
