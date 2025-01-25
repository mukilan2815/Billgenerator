import React from "react";
import BookBill from "@/components/bills/BillType/BookBill";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { description, title } from "@/lib/page-meta";
import { authOptions } from "@/lib/authOptions";

export const metadata = {
  title: title.book_bill,
  description: description.book_bill,
  alternates: {
    canonical: "https://billgenerator.co.in/tools/book-bill",
  },
};

export default async function DailyHelper() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <BookBill data={data} session={session} />{" "}
    </>
  );
}

const data = {
  title: "Book Bill",
  templates: {
    heading: "Select Template",
    data: templates.book_bill_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Credit Card", "Debit Card", "Cash", "UPI", "Net Banking"],
  },
  select_categories: {
    heading: "Book Category",
    data: [
      "Fiction",
      "Non-Fiction",
      "Textbook",
      "Biography",
      "Comics",
      "Others",
    ],
  },
};
