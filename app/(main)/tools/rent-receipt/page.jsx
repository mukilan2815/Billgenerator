import React from "react";
import RentBill from "@/components/bills/BillType/RentBill";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { authOptions } from "@/lib/authOptions";
import { description, title } from "@/lib/page-meta";

export const metadata = {
  title: title.rent_bill,
  description: description.rent_bill,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/rent-receipt",
  },
};

export default async function DailyHelper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <RentBill data={data} session={session} />{" "}
    </>
  );
}

const data = {
  title: "Rent Receipt",
  templates: {
    heading: "Select Template",
    data: templates.rent_bill_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Cash", "Online", "Card"],
  },
};
