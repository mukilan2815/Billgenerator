import React from "react";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";

const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });

export default function StationaryPreview({ data }) {
  function formatDate(dateString) {
    if (!dateString) return "";

    try {
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
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

  const calculateTotals = () => {
    const subtotal = data.items.reduce(
      (acc, item) => acc + (item.total || 0),
      0
    );
    const cgst = (subtotal * (data.tax_percentage / 2)) / 100;
    const sgst = (subtotal * (data.tax_percentage / 2)) / 100;
    const total = subtotal + cgst + sgst;
    return { subtotal, cgst, sgst, total };
  };

  const { subtotal, cgst, sgst, total } = calculateTotals();

  return (
    <div
      id="doc"
      className="w-full max-w-[800px] bg-white mx-auto p-6 border rounded-lg shadow-lg"
    >
      <div className={`${nunito_sans.className}`}>
        <div className="mb-6">
          <p>Reciept no: {data.invoice_number}</p>
          <p>Date: {formatDate(data.bill_date)}</p>
        </div>

        {data.logo_url && (
          <div className="w-32 h-16 relative mx-auto mb-6">
            <Image
              src={data.logo_url || "/placeholder.svg"}
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}

        <div className="mb-6">
          <h2 className="font-bold text-lg">{data.stationary_name}</h2>
          <p>{data.stationary_address}</p>
        </div>

        <div className="mb-6">
          <h2 className="font-bold text-lg">Customer Details:</h2>
          <p>{data.customer_name}</p>
          <p>{data.customer_address}</p>
        </div>

        <table className="w-full mb-6">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Item</th>
              <th className="text-right py-2">Rate</th>
              <th className="text-right py-2">Quantity</th>
              <th className="text-right py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{item.description}</td>
                <td className="text-right py-2">{item.price}</td>
                <td className="text-right py-2">{item.quantity}</td>
                <td className="text-right py-2">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {data.remark && (
          <div className="mb-6">
            <h3 className="font-bold mb-2">Remarks/Instructions:</h3>
            <p>{data.remark}</p>
          </div>
        )}

        <div className="space-y-2 mb-6">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>CGST: {data.tax_percentage / 2} %</span>
            <span>₹ {cgst.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>SGST: {data.tax_percentage / 2} %</span>
            <span>₹ {sgst.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹ {total.toFixed(2)}</span>
          </div>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>SAVE PAPER SAVE NATURE !! THANKS FOR SHOPPING WITH US.</p>
        </div>
      </div>
    </div>
  );
}
