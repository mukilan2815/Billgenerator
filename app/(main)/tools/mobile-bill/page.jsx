import React from "react";
import MobileBill from "@/components/bills/BillType/MobileBill";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { description, title } from "@/lib/page-meta";
import { authOptions } from "@/lib/authOptions";

export const metadata = {
  title: title.mobile_bill,
  description: description.mobile_bill,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/mobile-receipt",
  },
};

export default async function DailyHelper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <MobileBill data={data} session={session} />{" "}
    </>
  );
}

const data = {
  title: "Mobile Receipt",
  templates: {
    heading: "Select Template",
    data: templates.mobile_bill_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Cash", "Online", "Card"],
  },
};
