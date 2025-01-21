import React from "react";
import GSTBill from "@/components/bills/BillType/GSTBill";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { authOptions } from "@/lib/authOptions";
import { description, title } from "@/lib/page-meta";

export const metadata = {
  title: title.gst_bill,
  description: description.gst_bill,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/gst-invoice",
  },
};
export default async function GST() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <GSTBill data={data} session={session} />{" "}
    </>
  );
}

const data = {
  title: "GST Invoice Generator",
  templates: {
    heading: "Select Template",
    data: templates.gst_bill_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Cash", "Online", "Card"],
  },
};
