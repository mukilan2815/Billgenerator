import React from "react";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";

const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });

export default function EcommercePreview({ data, logos, colors }) {
  function formatDate(dateString) {
    if (dateString) {
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
      const day = Number.parseInt(parts[0], 10);
      const month = Number.parseInt(parts[1], 10) - 1;
      const year = Number.parseInt(parts[2], 10);
      return `${day} ${monthNames[month]} ${year}`;
    }
    return "";
  }

  const calculateTotals = () => {
    return data.item_details.reduce(
      (acc, item) => {
        const subtotal = item.price * item.quantity;
        const taxAmount = (subtotal * item.tax) / 100;
        const discountAmount = (subtotal * item.discount) / 100;
        const total = subtotal + taxAmount - discountAmount;

        acc.subtotal += subtotal;
        acc.taxTotal += taxAmount;
        acc.discountTotal += discountAmount;
        acc.total += total;

        return acc;
      },
      { subtotal: 0, taxTotal: 0, discountTotal: 0, total: 0 }
    );
  };

  const totals = calculateTotals();

  const templateColor = colors[data.template] || "gray";

  return (
    <div
      id="doc"
      className={`w-full sticky max-w-[1000px] bg-white mx-auto p-6 border-2 border-${templateColor}-600 rounded-lg shadow-lg`}
    >
      <div className={`${nunito_sans.className}`}>
        <div className="flex justify-between items-start mb-6">
          {logos[data.template] &&
            data.template !== "Template 1" &&
            data.template !== "Template 2" && (
              <div className="w-32 h-16 relative">
                <Image
                  src={logos[data.template] || "/placeholder.svg"}
                  alt={`${data.template} Logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            )}
          <div className="text-right">
            <h1 className={`text-xl font-bold text-${templateColor}-600`}>
              Tax Invoice/Bill of Supply/Cash Memo
            </h1>
            <p className="text-sm">(Original for Recipient)</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <h2 className="font-bold mb-2">Sold By:</h2>
            <p>{data.sold_by}</p>
            <p>{data.sold_by_details}</p>
            <p>IN</p>
            {data.gstin && <p>GSTIN: {data.gstin}</p>}
            {data.pan_no && <p>PAN: {data.pan_no}</p>}
          </div>
          <div>
            <h2 className="font-bold mb-2">Billing Address:</h2>
            <p>{data.customer_name}</p>
            <p>{data.shipping_address}</p>
            <p>IN</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <p>
              <span className="font-bold">Place of Supply:</span>{" "}
              {data.place_of_supply}
            </p>
            <p>
              <span className="font-bold">Place of Delivery:</span>{" "}
              {data.place_of_delivery}
            </p>
          </div>
          <div>
            <p>
              <span className="font-bold">Order Number:</span>{" "}
              {data.order_number}
            </p>
            <p>
              <span className="font-bold">Order Date:</span>{" "}
              {formatDate(data.order_date)}
            </p>
            <p>
              <span className="font-bold">Invoice Number:</span>{" "}
              {data.invoice_number}
            </p>
            <p>
              <span className="font-bold">Invoice Date:</span>{" "}
              {formatDate(data.invoice_date)}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-bold mb-4">Invoice Details:</h2>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">Sl. No</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-right">Unit Price</th>
                <th className="px-4 py-2 text-right">Discount</th>
                <th className="px-4 py-2 text-right">Qty</th>
                <th className="px-4 py-2 text-right">Net Amount</th>
                <th className="px-4 py-2 text-right">Tax Rate</th>
                <th className="px-4 py-2 text-right">Tax Amount</th>
                <th className="px-4 py-2 text-right">Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.item_details.map((item, index) => {
                const subtotal = item.price * item.quantity;
                const taxAmount = (subtotal * item.tax) / 100;
                const discountAmount = (subtotal * item.discount) / 100;
                const total = subtotal + taxAmount - discountAmount;

                return (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{item.description}</td>
                    <td className="px-4 py-2 text-right">
                      ₹{Number(item.price).toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-right">{item.discount}%</td>
                    <td className="px-4 py-2 text-right">{item.quantity}</td>
                    <td className="px-4 py-2 text-right">
                      ₹{subtotal.toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-right">{item.tax}%</td>
                    <td className="px-4 py-2 text-right">
                      ₹{taxAmount.toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-right">
                      ₹{total.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="border-t font-bold">
              <tr>
                <td colSpan={5} className="px-4 py-2 text-right">
                  Total:
                </td>
                <td className="px-4 py-2 text-right">
                  ₹{totals.subtotal.toFixed(2)}
                </td>
                <td className="px-4 py-2"></td>
                <td className="px-4 py-2 text-right">
                  ₹{totals.taxTotal.toFixed(2)}
                </td>
                <td className="px-4 py-2 text-right">
                  ₹{totals.total.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mb-6">
          <p className="font-bold">Amount in words</p>
          <p>{numberToWords(totals.total)} Only</p>
        </div>

        {data.signature_url && (
          <div className="text-right mb-6">
            <div className="inline-block">
              <div className="w-32 h-16 relative mb-2">
                <Image
                  src={data.signature_url || "/placeholder.svg"}
                  alt="Authorized Signature"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p>Authorized Signatory</p>
            </div>
          </div>
        )}

        <div className="text-sm text-gray-600 space-y-2">
          <p>Whether tax is payable under reverse charge - No</p>
          <p>Payment Transaction ID: {generateTransactionId()}</p>
          <p>
            Date & Time: {formatDate(data.invoice_date)} {data.time || ""}
          </p>
          <p>Invoice Value: ₹{totals.total.toFixed(2)}</p>
          <p>Mode of Payment: {data.payment_method}</p>
        </div>

        <div className="mt-6 text-xs text-gray-500">
          <p>
            *ASSPL-Amazon Seller Services Pvt. Ltd., ARIPL-Amazon Retail India
            Pvt. Ltd. (only where Amazon Retail India Pvt. Ltd. fulfillment
            center is co-located)
          </p>
          <p>Please note that this invoice is not a demand for payment</p>
        </div>
      </div>
    </div>
  );
}

function generateTransactionId() {
  return "UCqrMtrlCQ7O7E3";
}

function numberToWords(num) {
  return `${num.toFixed(2)} Rupees`;
}
