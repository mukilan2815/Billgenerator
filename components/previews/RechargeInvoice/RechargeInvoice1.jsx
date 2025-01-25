import React from "react";
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });

export default function RechargeInvoice1({ data }) {
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

  const calculateTotal = () => {
    const rechargeTotal =
      data.recharge_amount + (data.recharge_amount * data.tax) / 100;
    return rechargeTotal;
  };

  const totalAmount = calculateTotal();

  return (
    <div id="doc" className="w-[600px]">
      <div className={`${nunito_sans.className} container mt-5 p-2.5`}>
        <h1 className="text-center text-2xl font-bold mb-5">
          {data.mobile_provider || "Recharge Provider"}
        </h1>
        <p className="text-center mb-5">Recharge Bill Receipt</p>

        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Customer Name:</h6>
            <p>{data.customer_name}</p>
            <h6 className="font-bold text-lg">Phone Number:</h6>
            <p>{data.phone_number}</p>
            <h6 className="font-bold text-lg">Recharge Category:</h6>
            <p>{data.recharge_category}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Invoice Number:</h6>
            <p>{data.invoice_number}</p>
            <h6 className="font-bold text-lg">Order Date:</h6>
            <p>{formatDate(data.order_date)}</p>
            <h6 className="font-bold text-lg">Delivery Date:</h6>
            <p>{formatDate(data.delivery_date)}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Recharge Amount:</h6>
            <p>₹ {data.recharge_amount}</p>
            <h6 className="font-bold text-lg">Tax:</h6>
            <p>₹ {((data.recharge_amount * data.tax) / 100).toFixed(2)}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Total Amount:</h6>
            <p>₹ {totalAmount.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-4">
          <h6 className="text-lg font-bold mb-2">Terms & Conditions</h6>
          <p className="text-sm">
            1. Recharge amount is non-refundable. <br />
            2. Recharge validity depends on the selected plan. <br />
            3. Taxes and other charges may apply. <br />
            4. For any queries, contact: {data.email || "support@recharge.com"}.
          </p>
        </div>

        <div className="mt-5 text-center">
          <p className="font-bold">
            Thank you for choosing{" "}
            {data.mobile_provider || "our recharge service"}!
          </p>
        </div>
      </div>
    </div>
  );
}
