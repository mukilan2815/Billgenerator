"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import DailyHelper3 from "../../previews/DailyHelper/DailyHelper3";
import RentReceipt1 from "../../previews/RentReceipt/RentReceipt1";
import DailyHelper2 from "../../previews/DailyHelper/DailyHelper2";
import SignatureUpload from "../../forms/SignatureUpload";
import DateSelect from "../../forms/DateSelect";
import TimeSelect from "../../forms/TimeSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";
import TextAreaInput from "../../forms/TextAreaInput";
import AddItem from "../../forms/AddItem";
export default function RentBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    // template_id: data.template.id,
    // createdAt: new Date().toLocaleDateString("en-GB"),
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    invoice_number: 1380,
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
          <h2 className=" my-3"> Employee Details</h2>
          <TextInput
            title="Employee Name"
            placeholder={"Employee Name"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"employee_name"}
            required={true}
          />
          <TextAreaInput
            title="Rent House Address"
            placeholder={"Enter address..."}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"rent_address"}
            required={true}
          />
          <h2 className=" my-3"> Landlord Details</h2>
          <TextInput
            title="Landlord Name
"
            placeholder={"Enter Landlord Name"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"landlord_name"}
            required={true}
          />{" "}
          <div className=" grid grid-cols-2 gap-x-10">
            {" "}
            <DateSelect
              title="Choose Date"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"rent_date"}
            />
            <ListSelect
              title={"Select Month"}
              data={data.select_months}
              name={"bill_month"}
              finalData={finalData}
              setFinalData={setFinalData}
            />
          </div>
          <div className=" grid grid-cols-2 gap-x-10">
            {" "}
            <TextInput
              title="Rent Amount"
              placeholder={"Rent Amount"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"rent_amount"}
              required={true}
            />
            <ListSelect
              title={"Payment Method"}
              data={data.select_paymentType}
              name={"payment_mode"}
              finalData={finalData}
              setFinalData={setFinalData}
            />
          </div>
          <SignatureUpload
            title={"Signature Image"}
            placeholder={"Upload signature image"}
            name={"signature"}
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
          {finalData.template_data.id == 11 ? (
            <RentReceipt1 data={finalData} />
          ) : (
            ""
          )}
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
