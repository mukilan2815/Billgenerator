"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureUpload from "../../forms/SignatureUpload";
import DailyHelper3 from "../../previews/DailyHelper/DailyHelper3";
import DriverHelper1 from "../../previews/DailyHelper/DailyHelper1";
import DailyHelper2 from "../../previews/DailyHelper/DailyHelper2";

import DateSelect from "../../forms/DateSelect";
import TimeSelect from "../../forms/TimeSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";
import TextAreaInput from "../../forms/TextAreaInput";
import AddItem from "../../forms/AddItem";
export default function DailyHelperBill({ data, session }) {
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
          <h2 className=" my-3"> Helper Details</h2>
          <TextInput
            title="Helper Name"
            placeholder={"Helper name"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"helper_name"}
            required={true}
          />
          <TextInput
            title="Working As"
            placeholder={"Helper profession"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"helper_profession"}
            required={true}
          />
          <h2 className=" my-3"> Employee Details</h2>
          <TextInput
            title="Employee Name"
            placeholder={"Enter Employee Name"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"employee_name"}
            required={true}
          />{" "}
          <TextInput
            title="Salary Amount"
            placeholder={"Salary Amount"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"salary_amount"}
            required={true}
          />
          <div className=" grid grid-cols-2 gap-x-10">
            {" "}
            <DateSelect
              title="Salary Date"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"salary_date"}
            />
            <ListSelect
              title={"Select Month"}
              data={data.select_months}
              name={"bill_month"}
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
        <BillViewContainer session={session}>
          {finalData.template_data.id == 8 ? (
            <DriverHelper1 data={finalData} />
          ) : finalData.template_data.id == 9 ? (
            <DailyHelper2 data={finalData} />
          ) : finalData.template_data.id == 10 ? (
            <DailyHelper3 data={finalData} />
          ) : (
            ""
          )}
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
