import React from "react";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";

const nunito_sans = Nunito_Sans({ weight: ["400"], subsets: ["latin"] });

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
      const parts = dateString.split("-");
      const day = Number.parseInt(parts[0], 10);
      const month = Number.parseInt(parts[1], 10) - 1;
      const year = Number.parseInt(parts[2], 10);
      const date = new Date(year, month, day);
      return `${day} ${monthNames[month]} ${year}`;
    }
    return "";
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
      <div className={`${nunito_sans.className} container`}>
        {/* Header with Logo */}
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
            <h1 className="text-2xl font-bold">{data.gym_name}</h1>
            <p className="text-gray-600">{data.gym_address}</p>
            <p className="text-gray-600">Phone: {data.gym_phone}</p>
            <p className="text-gray-600">Email: {data.gym_email}</p>
          </div>
        </div>

        <h2 className="text-center text-xl font-bold mb-6">Gym Invoice</h2>

        {/* Invoice Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
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

        {/* Customer Details */}
        <div className="border-t border-b border-gray-200 py-4 mb-6">
          <h3 className="font-bold mb-2">Customer Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>Name: {data.customer_name}</p>
              <p>Address: {data.customer_address}</p>
              <p>Phone: {data.customer_phone}</p>
            </div>
            <div className="text-right">
              <p>From: {formatDate(data.bill_from_date)}</p>
              <p>To: {formatDate(data.bill_to_date)}</p>
              <p>Payment Method: {data.payment_method}</p>
            </div>
          </div>
        </div>

        {/* Item Details Table */}
        {data.item_details.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold mb-2">Item Details</h3>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left">Description</th>
                    <th className="px-4 py-2 text-right">Price</th>
                    <th className="px-4 py-2 text-right">Qty</th>
                    <th className="px-4 py-2 text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {data.item_details.map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="px-4 py-2">{item.description}</td>
                      <td className="px-4 py-2 text-right">
                        {data.currency.split(" - ")[1]} {item.price}
                      </td>
                      <td className="px-4 py-2 text-right">{item.quantity}</td>
                      <td className="px-4 py-2 text-right">
                        {data.currency.split(" - ")[1]} {item.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Amount Details */}
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold">Sub Total:</p>
              <p>Tax ({data.tax}%):</p>
              <p className="font-bold mt-2">Total Amount:</p>
            </div>
            <div className="text-right">
              <p className="font-bold">
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

        {/* Remarks */}
        {data.remark && (
          <div className="mb-6">
            <h3 className="font-bold mb-2">Remarks</h3>
            <p className="text-gray-600">{data.remark}</p>
          </div>
        )}

        {/* Signature */}
        <div className="mt-8 flex justify-end">
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
              <p className="text-sm">Authorized Signature</p>
            </div>
          )}
        </div>

        {/* Terms and Conditions */}
        <div className="mt-8 text-sm text-gray-600">
          <h3 className="font-bold mb-2">Terms & Conditions</h3>
          <ul className="list-disc list-inside space-y-1">
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
