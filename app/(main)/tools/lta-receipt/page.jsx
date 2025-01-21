import React from "react";
import LtaBill from "@/components/bills/BillType/LTAbill";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { description, title } from "@/lib/page-meta";
import { authOptions } from "@/lib/authOptions";

export const metadata = {
  title: title.lta_bill,
  description: description.lta_bill,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/lta-receipt",
  },
};
export default async function DailyHelper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <LtaBill data={data} session={session} />{" "}
    </>
  );
}

const data = {
  title: "LTA Receipt",
  templates: {
    heading: "Select Template",
    data: templates.lta_bill_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Cash", "Online", "Card"],
  },
};
