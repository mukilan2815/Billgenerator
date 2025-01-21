import React from "react";
import MedicalBill from "@/components/bills/BillType/MedicalBill";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { authOptions } from "@/lib/authOptions";
import { description, title } from "@/lib/page-meta";

export const metadata = {
  title: title.medical_bill,
  description: description.medical_bill,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/medical-bill",
  },
};
export default async function DailyHelper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {/* <div> Coming soon..</div> */}
      <MedicalBill data={data} session={session} />{" "}
    </>
  );
}

const data = {
  title: "Medical Bill Receipt",
  templates: {
    heading: "Select Template",
    data: templates.medical_bill_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Cash", "Online", "Card"],
  },
  select_roomType: {
    heading: "Room Type",
    data: ["Single", "Semi-Private", "Private", "Genaral", "ICU"],
  },
  select_insurance: { heading: "Insurance", data: ["Yes", "No"] },
};
