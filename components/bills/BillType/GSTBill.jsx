"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureUpload from "../../forms/SignatureUpload";
import GSTBill1 from "../../previews/GSTbill/GSTbill1";
import DateSelect from "../../forms/DateSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";
import TextAreaInput from "../../forms/TextAreaInput";
import AddItem from "../../forms/AddItem";
export default function GeneralBill({ data, session }) {
  function generateRandomNumber(digits) {
    const max = Math.pow(10, digits);
    const randomNumber = Math.floor(Math.random() * max);
    return String(randomNumber).padStart(digits, "0");
  }
  const [finalData, setFinalData] = useState({
    // template_id: data.template.id,
    // createdAt: new Date().toLocaleDateString("en-GB"),
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    invoice_number: 165098,
    order_number: 1203,
    items: [],
  });

  useEffect(() => {
    const rand_invoice_number = generateRandomNumber(3);

    setFinalData((prevData) => ({
      ...prevData,
      invoice_number: "0" + rand_invoice_number,
    }));
  }, []);

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

          <SignatureUpload
            title={"Logo"}
            placeholder={"Upload logo image"}
            name={"invoice_logo"}
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <div className=" grid grid-cols-2 gap-x-10">
            <div className=" -space-y-5">
              <TextInput
                title="Invoice from"
                placeholder={"Name"}
                finalData={finalData}
                setFinalData={setFinalData}
                name={"invoice_from_name"}
                required={true}
              />
              <TextAreaInput
                placeholder={"Enter address"}
                finalData={finalData}
                setFinalData={setFinalData}
                name={"invoice_from_address"}
                required={true}
              />
            </div>

            <div className=" -space-y-5">
              <TextInput
                title="Bill to"
                placeholder={"Name"}
                finalData={finalData}
                setFinalData={setFinalData}
                name={"bill_to_name"}
                required={true}
              />
              <TextAreaInput
                placeholder={"Enter address"}
                finalData={finalData}
                setFinalData={setFinalData}
                name={"bill_to_address"}
                required={true}
              />
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-x-10">
            <TextInput
              title="Biller GST No"
              placeholder={"Enter GST No"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"biller_gst"}
              //   required={true}
            />
            <TextInput
              title="Customer GST No"
              placeholder={"Enter GST No"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"customer_gst"}
              //   required={true}
            />
          </div>

          <div className=" grid grid-cols-2 gap-x-10">
            <DateSelect
              title="Date"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"invoice_date"}
            />
            <DateSelect
              title="Due Date"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"invoice_due_date"}
            />
          </div>
          <AddItem
            // istax={true}
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <div className=" grid grid-cols-3 gap-x-10">
            <TextInput
              title="Tax %"
              type={"number"}
              placeholder={"Tax"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"invoice_tax"}
              required={true}
            />
            <TextInput
              title="Amount Paid"
              placeholder={"Enter paid amount"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"paid_amount"}
              required={true}
            />
            <TextInput
              title="Invoice No"
              placeholder={"Enter paid amount"}
              value={finalData.invoice_number}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"invoice_number"}
              required={true}
            />
          </div>

          <TextAreaInput
            title="Notes"
            placeholder={"Notes - any relevant information not already covered"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"invoice_notes"}
          />
          <TextAreaInput
            title="Terms"
            placeholder={
              "Terms and conditions - late fees, payment methods, delivery schedule"
            }
            finalData={finalData}
            setFinalData={setFinalData}
            name={"invoice_terms"}
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
          {finalData.template_data.id == 18 ? (
            <GSTBill1 data={finalData} />
          ) : (
            ""
          )}
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
