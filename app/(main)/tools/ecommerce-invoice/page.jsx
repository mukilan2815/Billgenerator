import React from "react";
import EcommerceInvoice from "@/components/bills/BillType/EcommerceInvoice";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { description, title } from "@/lib/page-meta";
import { authOptions } from "@/lib/authOptions";

export const metadata = {
  title: title.ecommerce_invoice,
  description: description.ecommerce_invoice,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/ecommerce-invoice",
  },
};

export default async function DailyHelper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <EcommerceInvoice data={data} session={session} />{" "}
    </>
  );
}

const data = {
  title: "E-commerce Invoice",
  templates: {
    heading: "Select Template",
    data: templates.ecommerce_invoice_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: [
      "Credit Card",
      "Debit Card",
      "Cash on Delivery",
      "UPI",
      "Net Banking",
    ],
  },
  select_shippingMethod: {
    heading: "Shipping Method",
    data: ["Standard", "Express", "Overnight"],
  },
};
