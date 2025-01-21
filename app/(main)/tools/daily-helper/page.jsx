import React from "react";
import DailyHelperBill from "@/components/bills/BillType/DailyHelper";
import { getServerSession } from "next-auth";
import { templates, months } from "@/lib/templates";
import { authOptions } from "@/lib/authOptions";

export default async function DailyHelper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <DailyHelperBill data={data} session={session} />{" "}
    </>
  );
}

const data = {
  title: "Daily Helper Bill",
  templates: {
    heading: "Select Template",
    data: templates.daily_helper_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Cash", "Online", "Card"],
  },
};
