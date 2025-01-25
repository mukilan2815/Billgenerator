import React from "react";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { description, title } from "@/lib/page-meta";
import { authOptions } from "@/lib/authOptions";
import StationaryBill from "@/components/bills/BillType/StationaryBill"; // Import the StationaryBill component

export const metadata = {
  title: title.stationary_bill,
  description: description.stationary_bill,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/stationary-bill",
  },
};

const data = {
  title: "Stationary Bill",
  templates: {
    heading: "Select Template",
    data: templates.stationary_bill_templates, // Assuming you have predefined templates
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Credit Card", "Debit Card", "Cash", "UPI", "Net Banking"],
  },
  select_categories: {
    heading: "Stationary Category",
    data: ["Pens", "Pencils", "Notebooks", "Markers", "Files", "Others"],
  },
};

export default async function StationaryHelper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <StationaryBill data={data} session={session} />
    </>
  );
}
