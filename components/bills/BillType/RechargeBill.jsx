"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureUpload from "../../forms/SignatureUpload";
import RechargeInvoice1 from "../../previews/RechargeInvoice/RechargeInvoice1.jsx"; // Path for Recharge Invoice preview
import DateSelect from "../../forms/DateSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";

export default function RechargeBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    invoice_number: 5001, // Default invoice number
    mobile_number: "",
    recharge_amount: 0,
    recharge_plan: "",
    payment_method: "",
    customer_name: "",
    customer_email: session?.user?.email || "",
    customer_phone: "",
    total_amount: 0,
    tax: 0,
  });

  useEffect(() => {
    // Recalculate total amount whenever recharge details change
    const total =
      finalData.recharge_amount +
      (finalData.recharge_amount * finalData.tax) / 100;
    setFinalData((prev) => ({ ...prev, total_amount: total }));
  }, [finalData.recharge_amount, finalData.tax]);

  return (
    <BillContainer>
      <div className="grid lg:grid-cols-2 gap-y-5">
        <BillEditContainer finalData={finalData} session={session}>
          <h1>{data.title}</h1>
          <RadioSelect
            title="Select Template"
            data={data.templates}
            name="template"
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <h2 className="my-3">Customer Details</h2>
          <TextInput
            title="Customer Name"
            placeholder="Enter customer name..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="customer_name"
            required={true}
          />
          <TextInput
            title="Phone Number"
            placeholder="Enter phone number..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="customer_phone"
            required={true}
          />
          <TextInput
            title="Email Address"
            placeholder="Enter email..."
            value={finalData.customer_email}
            finalData={finalData}
            setFinalData={setFinalData}
            name="customer_email"
            required={true}
          />

          <h3>Recharge Details</h3>
          <TextInput
            title="Mobile Number"
            placeholder="Enter mobile number..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="mobile_number"
            required={true}
          />
          <TextInput
            title="Recharge Amount"
            type="number"
            placeholder="Enter recharge amount..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="recharge_amount"
            required={true}
          />
          <ListSelect
            title="Recharge Plan"
            data={data.select_plans}
            name="recharge_plan"
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <ListSelect
            title="Payment Method"
            data={data.select_paymentType}
            name="payment_method"
            finalData={finalData}
            setFinalData={setFinalData}
          />

          <h3>Payment Details</h3>
          <TextInput
            title="Tax %"
            placeholder="Enter tax percentage..."
            type="number"
            finalData={finalData}
            setFinalData={setFinalData}
            name="tax"
          />
          <SignatureUpload
            title="Company Logo URL"
            placeholder="Enter valid logo image URL..."
            name="logo_url"
            finalData={finalData}
            setFinalData={setFinalData}
          />
        </BillEditContainer>

        <BillViewContainer>
          <RechargeInvoice1 data={finalData} />
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
