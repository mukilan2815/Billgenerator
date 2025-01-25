import React from "react";
import HotelBill from "@/components/bills/BillType/HotelBill";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { description, title } from "@/lib/page-meta";
import { authOptions } from "@/lib/authOptions";

export const metadata = {
  title: title.hotel_bill,
  description: description.hotel_bill,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/hotel-bill",
  },
};

export default async function DailyHelper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <HotelBill data={data} session={session} />{" "}
    </>
  );
}

const data = {
  title: "Hotel Bill",
  templates: {
    heading: "Select Template",
    data: templates.hotel_bill_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Credit Card", "Debit Card", "Cash", "UPI", "Net Banking"],
  },
  select_roomType: {
    heading: "Room Type",
    data: ["Single", "Double", "Suite", "Deluxe", "Executive"],
  },
  select_services: {
    heading: "Additional Services",
    data: ["Breakfast", "Lunch", "Dinner", "Spa", "Laundry", "WiFi", "Parking"],
  },
};
