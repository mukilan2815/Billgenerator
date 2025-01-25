import React from "react";
import RechargeBill from "@/components/bills/BillType/RechargeBill";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { description, title } from "@/lib/page-meta";
import { authOptions } from "@/lib/authOptions";

export const metadata = {
  title: title.recharge_bill,
  description: description.recharge_bill,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/recharge-bill",
  },
};

const data = {
  title: "Recharge Bill",
  templates: {
    heading: "Select Template",
    data: templates.recharge_bill_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Credit Card", "Debit Card", "Cash", "UPI", "Net Banking"],
  },
  select_categories: {
    heading: "Recharge Category",
    data: ["Mobile", "DTH", "Internet", "Electricity", "Gas", "Others"],
  },
};

export default async function RechargeHelper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <RechargeBill data={data} session={session} />
    </>
  );
}
