"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureUpload from "../../forms/SignatureUpload";
import GeneralBill1 from "../../previews/GeneralBill/GeneralBill1";

import DateSelect from "../../forms/DateSelect";
import TimeSelect from "../../forms/TimeSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";
import TextAreaInput from "../../forms/TextAreaInput";
import AddItem from "../../forms/AddItem";
export default function GeneralBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    // template_id: data.template.id,
    // createdAt: new Date().toLocaleDateString("en-GB"),
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    invoice_number: 165098,
    order_number: 1203,
    items: [],
  });

  return (
    <BillContainer>
      <div className=" grid lg:grid-cols-2  gap-y-5">
        <BillEditContainer finalData={finalData} session={session}>
          <h1>{data.title}</h1>
          <RadioSelect
            title="Select Template"
            data={data.templates}
            name={"template"}
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <div className=" grid grid-cols-2 gap-x-10">
            <TextInput
              title="Customer Name"
              placeholder={"Customer Name"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"customer_name"}
              required={true}
            />
            <TextInput
              title="Customer Location"
              placeholder={"Customer Location"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"customer_location"}
              required={true}
            />
            <TextAreaInput
              title="Customer Shipping Address"
              placeholder={"Enter address..."}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"customer_address"}
              required={true}
            />
            <TextAreaInput
              title="Seller Details"
              placeholder={"Enter details..."}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"seller_details"}
              required={true}
            />
          </div>
          <TextInput
            title="Shop Name"
            placeholder={"Enter Shop Name"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"shop_name"}
            required={true}
          />
          <SignatureUpload
            title={"Shop logo"}
            placeholder={"Upload logo image"}
            name={"shop_logo"}
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <AddItem
            istax={true}
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <div className=" grid grid-cols-2 gap-x-10">
            <DateSelect
              title="Choose Date"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"invoice_date"}
            />
            <TextInput
              title="Order Numner"
              placeholder={"Order Number"}
              value={finalData.order_number}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"order_number"}
              required={true}
            />
          </div>
          <div className=" grid grid-cols-2 gap-x-10">
            {" "}
            <ListSelect
              title={"Payment Method"}
              data={data.select_paymentType}
              name={"payment_mode"}
              finalData={finalData}
              setFinalData={setFinalData}
            />
            <TextInput
              title="Invoice Number"
              placeholder={"Invoice Number"}
              value={finalData.invoice_number}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"invoice_number"}
              required={true}
            />
          </div>
          <TextInput
            title="Email Address"
            placeholder={"Enter email"}
            value={finalData.email || session?.user?.email}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"email"}
            description={
              "Please enter correct email. Bill PDF will be sent to this email address."
            }
            required={true}
          />
        </BillEditContainer>
        <BillViewContainer>
          {finalData.template_data.id == 16 ? (
            <GeneralBill1 data={finalData} />
          ) : (
            ""
          )}
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
