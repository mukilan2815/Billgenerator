import React from "react";
import GeneralBill from "@/components/bills/BillType/GeneralBill";
import All from "@/components/bills/BillType/AllBillfield";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { authOptions } from "@/lib/authOptions";

export default async function GeneralBills() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <GeneralBill data={data} session={session} />
    </>
  );
}

const data = {
  title: "General Bill",
  templates: {
    heading: "Select Template",
    data: templates.general_bill_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Cash", "Online", "Card"],
  },
};
