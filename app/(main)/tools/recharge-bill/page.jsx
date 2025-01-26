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

export default async function RechargeHelper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <RechargeBill data={data} session={session} />
    </>
  );
}

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
  carriers: [
    {
      name: "Carrier A",
      logo: "https://mobiletelco.in/wp-content/uploads/2024/10/BSNL-New-Logo-2024.webp",
    },
    {
      name: "Carrier B",
      logo: "https://logohistory.net/wp-content/uploads/2023/07/Airtel-Logo.png",
    },
    {
      name: "Carrier C",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Reliance_Jio_Logo_%28October_2015%29.svg/1200px-Reliance_Jio_Logo_%28October_2015%29.svg.png",
    },
    {
      name: "Carrier D",
      logo: "https://cdn.worldvectorlogo.com/logos/vi-vodafone-idea.svg",
    },
  ],
};
