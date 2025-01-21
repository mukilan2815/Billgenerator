"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import LTAReceipt1 from "../../previews/LTAReceipt/ltareceipt1";
import DateSelect from "../../forms/DateSelect";
import TimeSelect from "../../forms/TimeSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";
import TextAreaInput from "../../forms/TextAreaInput";
export default function LtaBill({ data, session }) {
  function generateRandomPNR(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let pnr = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      pnr += characters[randomIndex];
    }
    return pnr;
  }
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
    invoice_number: 1380,
    ticket_number: "",
    pnr_number: "",
    passenger_number: 3,
    boarding_point_number: "",
    customer_care_number: "",
    total_seat: 3,
  });

  useEffect(() => {
    const rand_pnr = generateRandomPNR(20);
    const rand_ticket = generateRandomPNR(16);
    const bp_number = "080" + generateRandomNumber(6);
    const cc_number = "080" + generateRandomNumber(6);
    setFinalData((prevData) => ({
      ...prevData,
      pnr_number: rand_pnr,
      ticket_number: rand_ticket,
      boarding_point_number: bp_number,
      customer_care_number: cc_number,
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
          <h2 className=" my-3"> LTA Details </h2>
          <h3>Boarding Point Details</h3>
          <div className=" grid grid-cols-2 gap-x-10">
            <TextAreaInput
              title="Location"
              placeholder={"Enter location..."}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"boarding_location"}
              required={true}
            />
            <TextAreaInput
              title="Landmark"
              placeholder={"Enter landmark..."}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"boarding_landmark"}
              required={true}
            />
          </div>
          <div className=" grid grid-cols-2 gap-x-10">
            {" "}
            <DateSelect
              title="Reporting Date"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"reporting_date"}
            />
            <TimeSelect
              title="Departure Time"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"departure_time"}
            />
          </div>
          <h3 className=" mt-0">Drop Point Details</h3>
          <div className=" grid grid-cols-2 gap-x-10">
            {" "}
            <DateSelect
              title="Dropping Point Date"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"dropping_date"}
            />
            <TimeSelect
              title="Dropping Point Time"
              size={"1/2"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"dropping_time"}
            />
          </div>
          <TextAreaInput
            title="Dropping Address"
            placeholder={"Enter dropping address..."}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"dropping_address"}
            required={true}
          />
          <h3 className=" mt-0">Passenger Details</h3>
          <TextInput
            title="Passenger Name, Age, Gender"
            placeholder={"Tanmay,30,Male Priya,26,Female"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"passenger_names"}
            required={true}
          />
          <div className=" grid grid-cols-2 gap-x-10">
            <TextInput
              title="No of Person"
              type={"number"}
              value={finalData.passenger_number}
              placeholder={"Enter no of passenger"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"passenger_number"}
              required={true}
            />
            <TextInput
              title="Total Seat"
              type={"number"}
              value={finalData.total_seat}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"total_seat"}
              required={true}
            />
          </div>
          <h3 className=" mt-0">Travel Details</h3>
          <div className=" grid grid-cols-2 gap-x-10">
            <ListSelect
              title={"Travel Type"}
              data={data.select_months}
              name={"travel_type"}
              finalData={finalData}
              setFinalData={setFinalData}
            />
            <TextInput
              title="Travel Name"
              placeholder={"Travel Name"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"travel_name"}
              required={true}
            />
          </div>
          <SignatureImage
            title={"Logo url"}
            placeholder={"Enter Valid Signature Image Url"}
            name={"signature"}
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <div className=" grid grid-cols-2 gap-x-10">
            <TextAreaInput
              title="Traveler Address"
              placeholder={"Enter address..."}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"traveler_address"}
              required={true}
            />
            <TextInput
              title="Ticket No"
              placeholder={"Enter icket No"}
              value={finalData.ticket_number}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"ticket_number"}
              required={true}
            />

            <TextInput
              title="Boarding Point No"
              placeholder={"Boarding Point No"}
              value={finalData.boarding_point_number}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"boarding_point_number"}
              required={true}
            />
            <TextInput
              title="Customer Care No"
              placeholder={"Customer Care No"}
              value={finalData.customer_care_number}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"customer_care_number"}
              required={true}
            />
          </div>
          <div className=" grid grid-cols-3 gap-x-10">
            {" "}
            <ListSelect
              title={"Select Month"}
              data={data.select_months}
              name={"bill_month"}
              finalData={finalData}
              setFinalData={setFinalData}
            />
            <TextInput
              title="Amount"
              placeholder={"Amount"}
              type={"number"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"amount"}
              required={true}
            />
            <TextInput
              title="Tax %"
              placeholder={"Tax amount"}
              type={"number"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"tax"}
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
          {finalData.template_data.id == 15 ? (
            <LTAReceipt1 data={finalData} />
          ) : (
            ""
          )}
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
