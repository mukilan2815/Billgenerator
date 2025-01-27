import React from "react";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";

const nunito_sans = Nunito_Sans({ weight: ["400"], subsets: ["latin"] });

export default function GymReceipt1({ data }) {
  function formatDate(dateString) {
    if (!dateString) return "";

    try {
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
      const parts = dateString.split("-");
      if (parts.length !== 3) return dateString;

      const day = Number.parseInt(parts[0], 10);
      const month = Number.parseInt(parts[1], 10) - 1;
      const year = Number.parseInt(parts[2], 10);

      if (isNaN(day) || isNaN(month) || isNaN(year)) return dateString;
      if (month < 0 || month > 11) return dateString;

      return `${day} ${monthNames[month]} ${year}`;
    } catch (error) {
      return dateString;
    }
  }

  const calculateSubTotal = () => {
    return data.item_details.reduce((sum, item) => sum + (item.total || 0), 0);
  };

  const calculateTax = (subTotal) => {
    return (subTotal * (data.tax || 0)) / 100;
  };

  const calculateTotal = (subTotal, tax) => {
    return subTotal + tax;
  };

  const subTotal = calculateSubTotal();
  const tax = calculateTax(subTotal);
  const total = calculateTotal(subTotal, tax);

  return (
    <div id="doc" className="w-full sticky max-w-[600px] bg-white mx-auto p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-6">
          {data.logo_url && (
            <div className="w-24 h-24 relative">
              <Image
                src={data.logo_url || "/placeholder.svg"}
                alt="Gym Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          <div className="text-right">
            <h1 className="text-2xl font-bold">
              {data.gym_name || "Gym Name"}
            </h1>
            <p className="text-gray-600">{data.gym_address}</p>
            <p className="text-gray-600">Phone: {data.gym_phone}</p>
            <p className="text-gray-600">Email: {data.gym_email}</p>
          </div>
        </div>
      </div>

      <div className={`${nunito_sans.className} p-8`}>
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold">Invoice Number: {data.invoice_number}</p>
              <p>User No: {data.user_no}</p>
              <p>Invoice Date: {formatDate(data.invoice_date)}</p>
            </div>
            <div className="text-right">
              <p>GST No: {data.gst_no || "N/A"}</p>
              <p>Billing Cycle: {data.billing_cycle}</p>
              <p>Currency: {data.currency}</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6 mb-6">
          <h3 className="font-bold mb-4">Customer Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mb-2">
                <span className="font-semibold">Name:</span>{" "}
                {data.customer_name}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Address:</span>{" "}
                {data.customer_address}
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                {data.customer_phone}
              </p>
            </div>
            <div className="text-right">
              <p className="mb-2">
                <span className="font-semibold">From:</span>{" "}
                {formatDate(data.bill_from_date)}
              </p>
              <p className="mb-2">
                <span className="font-semibold">To:</span>{" "}
                {formatDate(data.bill_to_date)}
              </p>
              <p>
                <span className="font-semibold">Payment:</span>{" "}
                {data.payment_method}
              </p>
            </div>
          </div>
        </div>

        {data.item_details.length > 0 && (
          <div className="border rounded-lg overflow-hidden mb-6">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left">Description</th>
                  <th className="px-4 py-3 text-right">Price</th>
                  <th className="px-4 py-3 text-right">Qty</th>
                  <th className="px-4 py-3 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {data.item_details.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-3">{item.description}</td>
                    <td className="px-4 py-3 text-right">
                      {data.currency.split(" - ")[1]} {item.price}
                    </td>
                    <td className="px-4 py-3 text-right">{item.quantity}</td>
                    <td className="px-4 py-3 text-right">
                      {data.currency.split(" - ")[1]} {item.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="border border-gray-200 rounded-lg p-6 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold">Amount Details</p>
              <p className="mt-2">Sub Total:</p>
              <p>Tax ({data.tax}%):</p>
              <p className="font-bold mt-2">Total Amount:</p>
            </div>
            <div className="text-right">
              <p className="invisible">Amount Details</p>
              <p className="mt-2">
                {data.currency.split(" - ")[1]} {subTotal.toFixed(2)}
              </p>
              <p>
                {data.currency.split(" - ")[1]} {tax.toFixed(2)}
              </p>
              <p className="font-bold mt-2">
                {data.currency.split(" - ")[1]} {total.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {data.remark && (
          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <h3 className="font-bold mb-2">Remarks</h3>
            <p className="text-gray-600">{data.remark}</p>
          </div>
        )}

        <div className="flex justify-end mt-8">
          {data.signature_url && (
            <div className="text-center">
              <div className="w-32 h-16 relative mb-2">
                <Image
                  src={data.signature_url || "/placeholder.svg"}
                  alt="Signature"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-sm text-gray-600">Authorized Signature</p>
            </div>
          )}
        </div>

        <div className="mt-8 border border-gray-200 rounded-lg p-4">
          <h3 className="font-bold mb-2">Terms & Conditions</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Membership fees are non-refundable and non-transferable.</li>
            <li>
              Access to the gym is restricted to the membership period only.
            </li>
            <li>Please adhere to the gym rules and regulations.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
