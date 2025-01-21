import React from "react";
import AddCredit from "@/components/Payment/AddCredit";
import AddCreditRazorpay from "@/components/Payment/AddCreditRazorpay";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions"; // Adjust the path to your authOptions file

export const metadata = {
  title: "Add Credits | Online Bill Generator",
  description: "Add Credits to your Bill Generator account",
  alternates: {
    canonical: "https://billgenerator.co.in/payment",
  },
};

export default async function PaymentPage() {
  const session = await getServerSession(authOptions);
  return <AddCreditRazorpay user={session?.user} />;
}
