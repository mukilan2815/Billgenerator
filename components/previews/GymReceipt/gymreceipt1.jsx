import React from "react";
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });

export default function GymReceipt1({ data }) {
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
        <h1 className="text-center text-2xl font-bold mb-5">{data.gym_name}</h1>
        <p className="text-center mb-5">Membership Receipt</p>
        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Customer Name:</h6>
            <p>{data.customer_name}</p>
            <h6 className="font-bold text-lg">Membership Type:</h6>
            <p>{data.membership_type}</p>
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
            <h6 className="font-bold text-lg">Start Date:</h6>
            <p>{formatDate(data.start_date)}</p>
            <h6 className="font-bold text-lg">End Date:</h6>
            <p>{formatDate(data.end_date)}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Trainer Name:</h6>
            <p>{data.trainer_name || "N/A"}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Total Amount:</h6>
            <p>₹ {data.amount}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Tax:</h6>
            <p>₹ {((data.amount * data.tax) / 100).toFixed(2)}</p>
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
            1. Membership fees are non-refundable and non-transferable. <br />
            2. Access to the gym is restricted to the membership period only.{" "}
            <br />
            3. Please adhere to the gym rules and regulations for safety and
            hygiene. <br />
            4. For any queries, contact: {data.email || "support@gym.com"}.
          </p>
        </div>
        <div className="mt-5 text-center">
          <p className="font-bold">Thank you for choosing {data.gym_name}!</p>
        </div>
      </div>
    </div>
  );
}
