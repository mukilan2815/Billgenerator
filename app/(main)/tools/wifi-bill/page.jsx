import React from "react";
import WifiBill from "@/components/bills/BillType/WifiBill";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { authOptions } from "@/lib/authOptions";
import { description, title } from "@/lib/page-meta";

export const metadata = {
  title: title.wifi_bill,
  description: description.wifi_bill,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/wifi-bill",
  },
};
export default async function Wifi() {
  const session = await getServerSession(authOptions);

  function generateRandomInvoiceNumber(length) {
    const characters = "0123456789";
    let invoiceNumber = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      invoiceNumber += characters[randomIndex];
    }
    return invoiceNumber;
  }

  const data = {
    title: "Internet Invoice",
    templates: {
      heading: "Select Template",
      data: templates.wifi_bill_templates,
    },
    select_months: { heading: "Select Month", data: months },
    select_paymentType: {
      heading: "Payment Method",
      data: ["Cash", "Online", "Card"],
    },
    plan_speeds: {
      heading: "Tariff Plan Speed",
      data: [
        "Select One",
        "10Mbps",
        "20Mbps",
        "40Mbps",
        "50Mbps",
        "100Mbps",
        "150Mbps",
        "200Mbps",
        "500Mbps",
        "1Gbps",
      ],
    },
    plan_packages: {
      heading: "Tariff Plan Package",
      data: ["Select One", "Limited", "Unlimited", "FUP"],
    },
    tariff_plans: {
      heading: "Tariff Plan",
      data: ["Select One", "Monthly", "Quarterly", "Half Year", "Annual"],
    },
    invoice_number: generateRandomInvoiceNumber(4), // Generate the invoice number here
  };

  return (
    <>
      <WifiBill data={data} session={session} />
    </>
  );
}
