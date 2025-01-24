import React from "react";
import GymBill from "@/components/bills/BillType/GymBill";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { description, title } from "@/lib/page-meta";
import { authOptions } from "@/lib/authOptions";

export const metadata = {
  title: title.gym_bill,
  description: description.gym_bill,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/gym-receipt",
  },
};

export default async function DailyHelper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <GymBill data={data} session={session} />{" "}
    </>
  );
}

const data = {
  title: "Gym Receipt",
  templates: {
    heading: "Select Template",
    data: templates.gym_bill_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Cash", "Online", "Card"],
  },
};
