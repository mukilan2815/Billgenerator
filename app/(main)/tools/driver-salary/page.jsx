import React from "react";
import DriverSalary from "@/components/bills/BillType/DriverSalary";
import { getServerSession } from "next-auth";
import { templates, months } from "../../../../lib/templates";
import { authOptions } from "@/lib/authOptions";

export default async function page() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <DriverSalary data={data} session={session} />{" "}
    </>
  );
}

const data = {
  title: "Driver Salary",
  templates: {
    heading: "Select Template",
    data: templates.driver_salary_templates,
  },
  select_months: { heading: "Select Month", data: months },
  select_paymentType: {
    heading: "Payment Method",
    data: ["Cash", "Online", "Card"],
  },
};
