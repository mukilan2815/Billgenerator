import React from "react";
import FlightBill from "@/components/bills/BillType/FlightBill";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { description, title } from "@/lib/page-meta";
import { authOptions } from "@/lib/authOptions";

export const metadata = {
  title: title.flight_bill,
  description: description.flight_bill,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/flight-receipt",
  },
};

export default async function DailyHelper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <FlightBill data={data} session={session} />{" "}
    </>
  );
}

const data = {
  title: "Flight Receipt",
  templates: {
    heading: "Select Template",
    data: templates.flight_bill_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Cash", "Online", "Card"],
  },
};
