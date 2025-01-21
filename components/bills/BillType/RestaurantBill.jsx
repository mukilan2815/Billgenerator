"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import Restaurant1 from "../../previews/RestaurantBill/Restaurant1";
import Restaurant2 from "../../previews/RestaurantBill/Restaurant2";

import DateSelect from "../../forms/DateSelect";
import TimeSelect from "../../forms/TimeSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";
import TextAreaInput from "../../forms/TextAreaInput";
import AddItem from "../../forms/AddItem";
import RadioSelectWithInput from "@/components/forms/SelectWithInput";
export default function RestaurantBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    // template_id: data.template.id,
    // createdAt: new Date().toLocaleDateString("en-GB"),
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    invoice_number: 1380,
    items: [],
  });
  const gstOptions = ["None", "CST No", "GST No", "TXN No"];

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
          <h2 className=" my-3"> Restaurant Details</h2>
          <TextInput
            title="Restaurant Name"
            placeholder={"Restaurant Name"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"restaurant_name"}
            required={true}
          />
          <TextAreaInput
            title="Restaurant Address"
            placeholder={"Enter address..."}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"restaurant_address"}
            required={true}
          />
          <div className=" grid grid-cols-2 gap-x-10">
            <TextInput
              title="Table No"
              placeholder={"Table No"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"table_number"}
            />
            <TextInput
              title="Invoice No"
              placeholder={"Invoice No"}
              finalData={finalData}
              value={finalData.invoice_number}
              setFinalData={setFinalData}
              name={"invoice_number"}
              required={true}
            />
          </div>
          <div className=" grid grid-cols-2 gap-x-10">
            <DateSelect
              title="Bill Date"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"bill_date"}
            />
            <TimeSelect
              title="Bill Time"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"bill_time"}
            />
          </div>
          <TextInput
            title="Customer Name"
            placeholder={"Enter customer name"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"customer_name"}
          />
          <div className=" grid grid-cols-2 gap-x-10">
            <ListSelect
              title={"Payment Method"}
              data={data.select_paymentType}
              name={"payment_mode"}
              finalData={finalData}
              setFinalData={setFinalData}
            />{" "}
            <TextInput
              title="Tax %"
              type={"number"}
              placeholder={"Enter tax rate"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"bill_tax"}
            />
          </div>
          <AddItem finalData={finalData} setFinalData={setFinalData} />

          <RadioSelectWithInput
            name="taxIdentifier"
            title="Tax Identifier"
            gstOptions={gstOptions}
            finalData={finalData}
            setFinalData={setFinalData}
          />
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
          {finalData.template_data.id == 13 ? (
            <Restaurant1 data={finalData} />
          ) : finalData.template_data.id == 14 ? (
            <Restaurant2 data={finalData} />
          ) : (
            ""
          )}
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
