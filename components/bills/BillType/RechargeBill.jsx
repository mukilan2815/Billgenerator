"use client";
import { useState } from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import DateSelect from "../../forms/DateSelect";
import TimeSelect from "../../forms/TimeSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import RechargeReceipt from "../../previews/MobileReceipt/mobilereceipt1";

const PROVIDER_LOGOS = {
  Airtel:
    "https://upload.wikimedia.org/wikipedia/commons/f/fb/Bharti_Airtel_Logo.svg",
  Jio: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Reliance_Jio_Logo.svg/1200px-Reliance_Jio_Logo.svg.png",
  VI: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Vodafone_Idea_logo.svg/1200px-Vodafone_Idea_logo.svg.png",
  BSNL: "https://upload.wikimedia.org/wikipedia/en/thumb/1/10/BSNL_%28Logo%29.png/220px-BSNL_%28Logo%29.png",
};

const PROVIDER_COLORS = {
  Airtel: "red",
  Jio: "darkblue",
  VI: "red",
  BSNL: "yellow",
};

export default function MobileRecharge({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: "Template 1",
    template_data: {
      creditRequired: 1,
    },
    provider_logo: "",
    provider_name: "",
    provider_address: "",
    billing_from_date: "27-01-2025",
    bill_period_from: "27-01-2025",
    bill_period_to: "27-02-2025",
    time: "05:09:00",
    service: "Prepaid",
    payment_in: "Advance",
    billing_cycle: "Monthly",
    mobile_no: "",
    alternative_no: "",
    customer_name: "",
    customer_address: "",
    landmark: "",
    customer_id: "539",
    invoice_no: "959",
    previous_balance: "0",
    adjustment_amount: "0",
    payment_method: "Select One",
    amount: "0",
    tax: "0",
    email: "",
    terms_accepted: false,
    monthly_charges: "0",
    amount_after_due_date: "50",
  });

  return (
    <BillContainer>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6 max-h-[calc(100vh-2rem)] overflow-y-auto pr-4">
          <BillEditContainer finalData={finalData} session={session}>
            <h1
              className={`text-2xl font-bold mb-6 ${
                finalData.provider_logo &&
                `text-${PROVIDER_COLORS[finalData.provider_logo]}-600`
              }`}
            >
              Recharge Receipt
            </h1>

            <RadioSelect
              title="Select Template"
              data={{
                heading: "Select Template",
                data: ["Template 1"],
              }}
              name="template"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <div
              className={`space-y-4 border p-4 rounded-lg ${
                finalData.provider_logo &&
                `border-${PROVIDER_COLORS[finalData.provider_logo]}-600`
              }`}
            >
              <h2 className="text-xl font-semibold">Service Details</h2>
              <ListSelect
                title="Select Logo"
                data={{
                  heading: "Select Provider",
                  data: ["Airtel", "Jio", "VI", "BSNL"],
                }}
                name="provider_logo"
                finalData={finalData}
                setFinalData={setFinalData}
              />
            </div>

            <div className="space-y-4 border p-4 rounded-lg">
              <h3 className="font-semibold">Provider Details</h3>
              <TextInput
                title="Provider Name"
                placeholder="Provider Name"
                finalData={finalData}
                setFinalData={setFinalData}
                name="provider_name"
              />
              <TextInput
                title="Provider Address"
                placeholder="Provider Address..."
                finalData={finalData}
                setFinalData={setFinalData}
                name="provider_address"
              />
              <DateSelect
                title="Billing From Date"
                finalData={finalData}
                setFinalData={setFinalData}
                name="billing_from_date"
              />
            </div>

            <div className="space-y-4 border p-4 rounded-lg">
              <h3 className="font-semibold">Other Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <DateSelect
                  title="Bill Period From Date"
                  finalData={finalData}
                  setFinalData={setFinalData}
                  name="bill_period_from"
                />
                <DateSelect
                  title="Bill Period To Date"
                  finalData={finalData}
                  setFinalData={setFinalData}
                  name="bill_period_to"
                />
              </div>
              <TimeSelect
                title="Time"
                finalData={finalData}
                setFinalData={setFinalData}
                name="time"
              />
              <ListSelect
                title="Service"
                data={{
                  heading: "Select Service",
                  data: ["Prepaid", "Postpaid"],
                }}
                name="service"
                finalData={finalData}
                setFinalData={setFinalData}
              />
              <ListSelect
                title="Payment In"
                data={{
                  heading: "Select Payment Type",
                  data: ["Advance", "Arrears"],
                }}
                name="payment_in"
                finalData={finalData}
                setFinalData={setFinalData}
              />
              <ListSelect
                title="Billing Cycle"
                data={{
                  heading: "Select Billing Cycle",
                  data: ["Monthly", "Quarterly", "Yearly"],
                }}
                name="billing_cycle"
                finalData={finalData}
                setFinalData={setFinalData}
              />
              <TextInput
                title="Mobile No"
                placeholder="Enter Customer Mobile Number"
                finalData={finalData}
                setFinalData={setFinalData}
                name="mobile_no"
              />
              <TextInput
                title="Alternative No"
                placeholder="Enter Alternative Number"
                finalData={finalData}
                setFinalData={setFinalData}
                name="alternative_no"
              />
            </div>

            <div className="space-y-4 border p-4 rounded-lg">
              <h3 className="font-semibold">Customer Details</h3>
              <TextInput
                title="Customer Name"
                placeholder="Customer Name"
                finalData={finalData}
                setFinalData={setFinalData}
                name="customer_name"
              />
              <TextInput
                title="Customer Address"
                placeholder="Customer address"
                finalData={finalData}
                setFinalData={setFinalData}
                name="customer_address"
              />
              <TextInput
                title="Landmark"
                placeholder="Landmark..."
                finalData={finalData}
                setFinalData={setFinalData}
                name="landmark"
              />
              <TextInput
                title="Customer Id"
                value={finalData.customer_id}
                finalData={finalData}
                setFinalData={setFinalData}
                name="customer_id"
              />
              <TextInput
                title="Invoice No"
                value={finalData.invoice_no}
                finalData={finalData}
                setFinalData={setFinalData}
                name="invoice_no"
              />
              <TextInput
                title="Previous Balance"
                value={finalData.previous_balance}
                finalData={finalData}
                setFinalData={setFinalData}
                name="previous_balance"
                type="number"
              />
              <TextInput
                title="Adjustment Amount"
                value={finalData.adjustment_amount}
                finalData={finalData}
                setFinalData={setFinalData}
                name="adjustment_amount"
                type="number"
              />
              <TextInput
                title="Monthly Charges"
                value={finalData.monthly_charges}
                finalData={finalData}
                setFinalData={setFinalData}
                name="monthly_charges"
                type="number"
              />
              <ListSelect
                title="Payment Method"
                data={{
                  heading: "Select Payment Method",
                  data: ["Cash", "Card", "UPI", "Net Banking"],
                }}
                name="payment_method"
                finalData={finalData}
                setFinalData={setFinalData}
              />
              <TextInput
                title="Amount"
                placeholder="0"
                type="number"
                finalData={finalData}
                setFinalData={setFinalData}
                name="amount"
              />
              <TextInput
                title="Tax %"
                placeholder="Tax Amount"
                type="number"
                finalData={finalData}
                setFinalData={setFinalData}
                name="tax"
              />
              <TextInput
                title="Email Address"
                placeholder="Enter mail"
                finalData={finalData}
                setFinalData={setFinalData}
                name="email"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={finalData.terms_accepted}
                onChange={(e) =>
                  setFinalData({
                    ...finalData,
                    terms_accepted: e.target.checked,
                  })
                }
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I have read the terms and conditions.
              </label>
            </div>
          </BillEditContainer>
        </div>

        <div className="sticky top-4">
          <RechargeReceipt
            data={finalData}
            providerLogos={PROVIDER_LOGOS}
            providerColors={PROVIDER_COLORS}
          />
        </div>
      </div>
    </BillContainer>
  );
}
