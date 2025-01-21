import React from "react";
import RestaurantBill from "@/components/bills/BillType/RestaurantBill";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { authOptions } from "@/lib/authOptions";
import { description, title } from "@/lib/page-meta";

export const metadata = {
  title: title.restaurant_bill,
  description: description.restaurant_bill,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/restaurant-bill",
  },
};
export default async function Restaurant() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <RestaurantBill data={data} session={session} />{" "}
    </>
  );
}

const data = {
  title: "Restaurant Receipt",
  templates: {
    heading: "Select Template",
    data: templates.restaurant_bill_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Cash", "Online", "Card"],
  },
};
