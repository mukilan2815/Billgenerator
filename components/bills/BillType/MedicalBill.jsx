"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import MedicalBill1 from "../../previews/MedicalBill/MedicalBill1";

import SignatureUpload from "../../forms/SignatureUpload";
import DateSelect from "../../forms/DateSelect";
import TimeSelect from "../../forms/TimeSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";
import TextAreaInput from "../../forms/TextAreaInput";
import AddItem from "../../forms/AddItem";

export default function MedicalBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    // template_id: data.template.id,
    // createdAt: new Date().toLocaleDateString("en-GB"),
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    invoice_number: 1380,
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
          <TextInput
            title="Hospital Name"
            placeholder={"Enter Hospital Name"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"hospital_name"}
            required={true}
          />
          <div className=" grid grid-cols-2 gap-x-10">
            <TextAreaInput
              title="Hospital Address"
              placeholder={"Enter address..."}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"hospital_address"}
              required={true}
            />
            <TextAreaInput
              title="Hospital Details"
              placeholder={"Enter details..."}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"hospital_details"}
              required={true}
            />
          </div>
          <div className=" grid grid-cols-2 gap-x-10">
            <TextInput
              title="Doctor Name"
              placeholder={"Enter doctor name"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"doctor_name"}
              required={true}
            />
            <TextInput
              title="Designation"
              placeholder={"Enter designation"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"doctor_designation"}
              required={true}
            />
          </div>
          <div className=" grid grid-cols-3 gap-x-10">
            <TextInput
              title="Contact No"
              placeholder={"Enter contact"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"hospital_contact_no"}
              required={true}
            />{" "}
            <TextInput
              title="Invoice Number"
              placeholder={"Invoice number"}
              value={finalData.invoice_number}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"invoice_number"}
              required={true}
            />{" "}
            <TimeSelect
              title="Bill Time"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"bill_time"}
            />
          </div>
          <div className=" grid grid-cols-2 gap-x-10">
            <DateSelect
              title="Admit Date"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"admit_date"}
            />
            <DateSelect
              title="Discharge Date"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"discharge_date"}
            />
          </div>
          <SignatureUpload
            title={"Hospital Logo"}
            placeholder={"Upload hospital logo"}
            name={"hospital_logo"}
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <h2 className=" my-3">Patient Details</h2>
          <div className=" grid grid-cols-2 gap-x-10">
            <TextInput
              title="Patient Name"
              placeholder={"Patient Name"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"patient_name"}
              required={true}
            />
            <TextInput
              title="Patient Age"
              placeholder={"Patient Age"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"patient_age"}
              required={true}
            />
            <TextAreaInput
              title="Patient Issue"
              placeholder={"Patient Issue"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"patient_issue"}
              // required={true}
            />
            <TextAreaInput
              title="Patient Address"
              placeholder={"Patient Address"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"patient_address"}
              // required={true}
            />
          </div>
          <div className=" grid grid-cols-2 gap-x-10">
            <TextInput
              title="Guardian Name"
              placeholder={"Guardian Name"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"guardian_name"}
              // required={true}
            />
            <TextInput
              title="Mobile No"
              placeholder={"Mobile No"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"mobile_no"}
              // required={true}
            />
          </div>
          <div className=" grid grid-cols-2 gap-x-10">
            <ListSelect
              title={"Room"}
              data={data.select_roomType}
              name={"room_type"}
              finalData={finalData}
              setFinalData={setFinalData}
            />
            <ListSelect
              title={"Insurance"}
              data={data.select_insurance}
              name={"insurance"}
              finalData={finalData}
              setFinalData={setFinalData}
            />
          </div>
          <AddItem
            hideQty={true}
            // istax={true}
            itemdesc={true}
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <div className=" grid grid-cols-2 gap-x-10">
            <ListSelect
              title={"Payment Method"}
              data={data.select_paymentType}
              name={"payment_mode"}
              finalData={finalData}
              setFinalData={setFinalData}
            />
            <TextInput
              title="Tax %"
              placeholder={"Tax"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"bill_tax"}
              // required={true}
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
          {finalData.template_data.id == 17 ? (
            <MedicalBill1 data={finalData} />
          ) : (
            ""
          )}
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
