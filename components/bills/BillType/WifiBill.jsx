"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";
import TextInput from "../../forms/TextInput";
import TextAreaInput from "../../forms/TextAreaInput";
import DateSelect from "../../forms/DateSelect";
import ListSelect from "../../forms/ListSelect";
import WifiBill1 from "../../previews/WifiBill/WifiBill1";
import WifiBill2 from "../../previews/WifiBill/WifiBill2";
import SignatureUpload from "../../forms/SignatureUpload";
import RadioSelect from "../../forms/RadioSelect";
export default function InternetServiceProviderBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    provider_name: "",
    provider_address: "",
    description: "",
    bill_account_number: "",
    billing_date: new Date().toLocaleDateString("en-GB"),
    customer_name: "",
    customer_address: "",
    tariff_plan_speed: "",
    tariff_plan_package: "",
    tariff_plan: "",
    payment_method: "",
    total_plan_amount: "",
    invoice_number: data.invoice_number, // Use the pre-generated invoice number
    email: session?.user?.email || "",
  });

  return (
    <BillContainer>
      <div className="grid lg:grid-cols-2 gap-y-5">
        <BillEditContainer finalData={finalData} session={session}>
          <h1>{data.title}</h1>
          <RadioSelect
            title="Select Template"
            data={data.templates}
            name={"template"}
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <h2 className=" my-3">Internet Provider Details</h2>
          <div className="grid grid-cols-2 gap-x-10">
            <TextInput
              title="Provider Name"
              placeholder="Provider Name"
              finalData={finalData}
              setFinalData={setFinalData}
              name="provider_name"
            />
            <TextInput
              title="Provider Address"
              placeholder="Internet Provider Address"
              finalData={finalData}
              setFinalData={setFinalData}
              name="provider_address"
            />
          </div>
          <TextAreaInput
            title="Description"
            placeholder="Internet Description"
            finalData={finalData}
            setFinalData={setFinalData}
            name="description"
          />
          <div className="grid grid-cols-2 gap-x-10">
            <TextInput
              title="Bill Account Number"
              placeholder="Bill Account Number"
              finalData={finalData}
              setFinalData={setFinalData}
              name="bill_account_number"
            />
            <DateSelect
              title="Billing Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="billing_date"
              value={finalData.billing_date}
            />
          </div>
          <h2 className=" my-3">Customer Details</h2>
          <div className="grid grid-cols-2 gap-x-10">
            <TextInput
              title="Customer Name"
              placeholder="Enter Customer Name"
              finalData={finalData}
              setFinalData={setFinalData}
              name="customer_name"
            />
            <TextInput
              title="Customer Address"
              placeholder="Customer Address"
              finalData={finalData}
              setFinalData={setFinalData}
              name="customer_address"
            />
          </div>
          <h2 className=" my-3">Plan Details</h2>
          <div className="grid grid-cols-2 gap-x-10">
            <ListSelect
              title={data.plan_speeds.heading}
              data={data.plan_speeds}
              finalData={finalData}
              setFinalData={setFinalData}
              name="tariff_plan_speed"
            />
            <ListSelect
              title={data.plan_packages.heading}
              data={data.plan_packages}
              finalData={finalData}
              setFinalData={setFinalData}
              name="tariff_plan_package"
            />
            <ListSelect
              title={data.tariff_plans.heading}
              data={data.tariff_plans}
              finalData={finalData}
              setFinalData={setFinalData}
              name="tariff_plan"
            />
            <ListSelect
              title={data.select_paymentType.heading}
              data={data.select_paymentType}
              name="payment_method"
              finalData={finalData}
              setFinalData={setFinalData}
            />
            <TextInput
              title="Total Plan Amount"
              placeholder="Plan Amount"
              finalData={finalData}
              setFinalData={setFinalData}
              name="total_plan_amount"
            />
            <TextInput
              title="Invoice No"
              value={finalData.invoice_number}
              finalData={finalData}
              setFinalData={setFinalData}
              name="invoice_number"
            />
          </div>
          <SignatureUpload
            title="Service Provider Logo"
            placeholder="Upload logo image"
            name="invoice_logo"
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <TextInput
            title="Email Address"
            placeholder="Enter email"
            value={finalData.email}
            finalData={finalData}
            setFinalData={setFinalData}
            name="email"
            description="Please enter the correct email. Bill PDF will be sent to this email address."
            required
          />
        </BillEditContainer>
        <BillViewContainer>
          {finalData.template_data.id === 19 ? (
            <WifiBill1 data={finalData} />
          ) : finalData.template_data.id === 20 ? (
            <WifiBill2 data={finalData} />
          ) : (
            ""
          )}
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
