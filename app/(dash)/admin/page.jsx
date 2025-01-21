import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions"; // Adjust the path to your authOptions file
import AdminDash from "./admin-component";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Admin - BillGenerator",
  description: "Admin - BillGenerator",
  alternates: {
    canonical: "https://billgenerator.in/admin",
  },
  robots: "noindex",
};
export const dynamic = "force-dynamic";

export default async function Admin() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <>
      {session?.user?.role === "ADMIN" ? (
        <AdminDash />
      ) : (
        <div className=" h-screen max-w-7xl m-auto flex items-center justify-center">
          <div>
            <h1 className=" font-semibold text-4xl"> You are not authorized</h1>
          </div>
        </div>
      )}
    </>
  );
}
