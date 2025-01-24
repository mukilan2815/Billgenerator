import React from "react";
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });

export default function MobileReceipt1({ data }) {
  function formatDate(dateString) {
    if (dateString) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const parts = dateString.split("/");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      const date = new Date(year, month, day);
      return `${day} ${monthNames[month]} ${year}`;
    }
    return "";
  }

  return (
    <div id="doc" className="w-[600px]">
      <div className={`${nunito_sans.className} container mt-5 p-2.5`}>
        <h1 className="text-center text-2xl font-bold mb-5">
          {data.mobile_provider}
        </h1>
        <p className="text-center mb-5">Mobile Bill Receipt</p>
        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Customer Name:</h6>
            <p>{data.customer_name}</p>
            <h6 className="font-bold text-lg">Plan Name:</h6>
            <p>{data.plan_name}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Invoice Number:</h6>
            <p>{data.invoice_number}</p>
            <h6 className="font-bold text-lg">Date:</h6>
            <p>{formatDate(data.start_date)}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Billing Start Date:</h6>
            <p>{formatDate(data.start_date)}</p>
            <h6 className="font-bold text-lg">Billing End Date:</h6>
            <p>{formatDate(data.end_date)}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Phone Number:</h6>
            <p>{data.phone_number}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Total Amount:</h6>
            <p>₹ {data.amount}</p>
            <h6 className="font-bold text-lg">Tax:</h6>
            <p>₹ {((data.amount * data.tax) / 100).toFixed(2)}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Net Amount:</h6>
            <p>
              ₹{" "}
              {parseInt(data.amount) + parseInt((data.amount * data.tax) / 100)}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h6 className="text-lg font-bold mb-2">Terms & Conditions</h6>
          <p className="text-sm">
            1. Bill payments are due on the due date mentioned. <br />
            2. Late payments may incur additional charges. <br />
            3. Mobile plan features and pricing are subject to change. <br />
            4. For any queries, contact:{" "}
            {data.email || "support@mobileprovider.com"}.
          </p>
        </div>
        <div className="mt-5 text-center">
          <p className="font-bold">
            Thank you for choosing {data.mobile_provider}!
          </p>
        </div>
      </div>
    </div>
  );
}
