import React from "react";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";

const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });

export default function RechargeReceipt({
  data,
  providerLogos,
  providerColors,
}) {
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
      return dateString || "";
    }
  }

  const calculateTotal = () => {
    const monthlyCharges = Number.parseFloat(data.monthly_charges) || 0;
    const tax = (monthlyCharges * (Number.parseFloat(data.tax) || 0)) / 100;
    const previousBalance = Number.parseFloat(data.previous_balance) || 0;
    const adjustmentAmount = Number.parseFloat(data.adjustment_amount) || 0;
    return (monthlyCharges + tax + previousBalance + adjustmentAmount).toFixed(
      2
    );
  };

  const borderColor = data.provider_logo
    ? providerColors[data.provider_logo]
    : "gray";

  return (
    <div
      id="doc"
      className={`w-full sticky max-w-[600px] bg-white mx-auto border-2 border-${borderColor}-600 rounded-lg`}
    >
      <div className={`${nunito_sans.className} p-6`}>
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold">
            Original Copy for Recipient - Tax Invoice
          </h1>
        </div>

        <div className="flex justify-between items-start mb-6">
          {data.provider_logo && (
            <div className="w-32 h-16 relative">
              <Image
                src={providerLogos[data.provider_logo] || "/placeholder.svg"}
                alt="Provider Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          <div className="text-right">
            <p className="font-bold">Invoice No: {data.invoice_no}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p>
              <span className="font-semibold">User Id:</span> {data.customer_id}
            </p>
            <p>
              <span className="font-semibold">Mobile No:</span> {data.mobile_no}
            </p>
            <p>
              <span className="font-semibold">Bill No:</span> {data.invoice_no}
            </p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Bill Date:</span>{" "}
              {formatDate(data.billing_from_date)}
            </p>
            <p>
              <span className="font-semibold">Bill Cycle:</span>{" "}
              {data.billing_cycle}
            </p>
            <p>
              <span className="font-semibold">Pay By Date:</span>{" "}
              {data.payment_in}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p>
            <span className="font-semibold">Bill Period:</span>{" "}
            {formatDate(data.bill_period_from)} to{" "}
            {formatDate(data.bill_period_to)}
          </p>
          <p>
            <span className="font-semibold">Alternative No:</span>{" "}
            {data.alternative_no || "N/A"}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {data.email}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            To get your monthly bill on email id sms STARTBILLFL(email_id)
            (std_code) on 198
          </p>
        </div>

        <div className="border-t border-b py-4 mb-6">
          <h2 className="font-bold text-lg mb-4">Your Account Summary</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>Previous Bill</p>
              <p>Adjustment Amount</p>
              <p>Service</p>
              <p>Amount After Due Date</p>
            </div>
            <div className="text-right">
              <p>₹ {data.previous_balance}</p>
              <p>₹ {data.adjustment_amount}</p>
              <p>{data.service}</p>
              <p>₹ {data.amount_after_due_date}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-bold text-lg mb-4">This Month Charge</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>Monthly Charges:</p>
              <p>Tax:</p>
              <p>Taxable Amount:</p>
              <p>Bill Cycle:</p>
              <p>Bill From:</p>
              <p className="font-bold">Total Amount:</p>
            </div>
            <div className="text-right">
              <p>₹ {data.monthly_charges}</p>
              <p>{data.tax}%</p>
              <p>
                ₹{" "}
                {(
                  (Number.parseFloat(data.monthly_charges) *
                    Number.parseFloat(data.tax || 0)) /
                  100
                ).toFixed(2)}
              </p>
              <p>{data.billing_cycle}</p>
              <p>{formatDate(data.billing_from_date)}</p>
              <p className="font-bold">₹ {calculateTotal()}</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="font-bold">Get 10 GB/Month Free</p>
          <p>Broadband Data with Every Prepaid and DTH Connection</p>
          <p className="text-sm mt-2">
            As per Government directive, effective service tax will be{" "}
            {data.tax}% GST
          </p>
        </div>

        <div className="border-t border-b py-4 mb-6 text-center">
          <p>Please detach this slip and return with payment slip</p>
        </div>

        <div className="mb-6">
          <h2 className="font-bold text-lg mb-4">Pay on the go</h2>
          <ul className="list-disc list-inside">
            <li>Pay using app</li>
            <li>Pay using Money app download from Play store / App Store</li>
            <li>Pay using official website</li>
          </ul>
        </div>

        <div className="border-t pt-4">
          <h2 className="font-bold text-lg mb-4">Acknowledgement Slip</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>
                <span className="font-semibold">Customer Id:</span>{" "}
                {data.customer_id}
              </p>
              <p>
                <span className="font-semibold">Customer Name:</span>{" "}
                {data.customer_name}
              </p>
              <p>
                <span className="font-semibold">Amount:</span> ₹{" "}
                {calculateTotal()}
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Invoice No:</span>{" "}
                {data.invoice_no}
              </p>
              <p>
                <span className="font-semibold">Service:</span> {data.service}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>* This is computer generated invoice signature not required</p>
          <p>
            created at {formatDate(data.billing_from_date)} at {data.time}
          </p>
          <p className="mt-4 text-gray-400">
            Watermark will be removed from actual PDF
          </p>
        </div>
      </div>
    </div>
  );
}
