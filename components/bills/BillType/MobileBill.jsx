"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import MobileReceipt1 from "../../previews/MobileReceipt/mobilereceipt1.jsx"; // Update path for MobileReceipt preview
import DateSelect from "../../forms/DateSelect";
import TimeSelect from "../../forms/TimeSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";

export default function MobileBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    invoice_number: 3001, // Default invoice number
    mobile_provider: "",
    plan_name: "",
    start_date: "",
    end_date: "",
    customer_name: "",
    phone_number: "",
    amount: 0,
    tax: 0,
    email: session?.user?.email || "",
  });
  console.log(session);
  console.log(finalData);
  useEffect(() => {
    // Initialize additional data if needed
  }, []);

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
          <h2 className="my-3">Mobile Provider Details</h2>
          <TextInput
            title="Mobile Provider"
            placeholder="Enter mobile provider name..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="mobile_provider"
            required={true}
          />
          <TextInput
            title="Plan Name"
            placeholder="Enter plan name..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="plan_name"
          />
          <h3>Billing Period</h3>
          <div className="grid grid-cols-2 gap-x-10">
            <DateSelect
              title="Start Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="start_date"
            />
            <DateSelect
              title="End Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="end_date"
            />
          </div>
          <h3>Customer Details</h3>
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
            name="phone_number"
            required={true}
          />
          <TextInput
            title="Email Address"
            placeholder="Enter email..."
            value={finalData.email}
            finalData={finalData}
            setFinalData={setFinalData}
            name="email"
            description="Bill PDF will be sent to this email address."
            required={true}
          />
          <h3>Payment Details</h3>
          <div className="grid grid-cols-2 gap-x-10">
            <TextInput
              title="Amount"
              placeholder="Enter amount..."
              type="number"
              finalData={finalData}
              setFinalData={setFinalData}
              name="amount"
              required={true}
            />
            <TextInput
              title="Tax %"
              placeholder="Enter tax percentage..."
              type="number"
              finalData={finalData}
              setFinalData={setFinalData}
              name="tax"
            />
          </div>
          <SignatureImage
            title="Provider Logo URL"
            placeholder="Enter valid logo image URL..."
            name="signature"
            finalData={finalData}
            setFinalData={setFinalData}
          />
        </BillEditContainer>
        <BillViewContainer>
          <MobileReceipt1 data={finalData} />
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
