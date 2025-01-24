"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import FlightReceipt1 from "../../previews/FlightReceipt/flightreceipt1.jsx"; // Update path for FlightReceipt preview
import DateSelect from "../../forms/DateSelect";
import TimeSelect from "../../forms/TimeSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";

export default function FlightBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    invoice_number: 2001, // Default invoice number
    flight_name: "",
    flight_number: "",
    departure_date: "",
    departure_time: "",
    arrival_date: "",
    arrival_time: "",
    passenger_name: "",
    ticket_number: "",
    seat_number: "",
    amount: 0,
    tax: 0,
    email: session?.user?.email || "",
  });

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
          <h2 className="my-3">Flight Details</h2>
          <TextInput
            title="Flight Name"
            placeholder="Enter flight name..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="flight_name"
            required={true}
          />
          <TextInput
            title="Flight Number"
            placeholder="Enter flight number..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="flight_number"
            required={true}
          />
          <h3>Travel Schedule</h3>
          <div className="grid grid-cols-2 gap-x-10">
            <DateSelect
              title="Departure Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="departure_date"
            />
            <TimeSelect
              title="Departure Time"
              finalData={finalData}
              setFinalData={setFinalData}
              name="departure_time"
            />
            <DateSelect
              title="Arrival Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="arrival_date"
            />
            <TimeSelect
              title="Arrival Time"
              finalData={finalData}
              setFinalData={setFinalData}
              name="arrival_time"
            />
          </div>
          <h3>Passenger Details</h3>
          <TextInput
            title="Passenger Name"
            placeholder="Enter passenger name..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="passenger_name"
            required={true}
          />
          <TextInput
            title="Ticket Number"
            placeholder="Enter ticket number..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="ticket_number"
            required={true}
          />
          <TextInput
            title="Seat Number"
            placeholder="Enter seat number..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="seat_number"
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
            title="Airline Logo URL"
            placeholder="Enter valid logo image URL..."
            name="signature"
            finalData={finalData}
            setFinalData={setFinalData}
          />
        </BillEditContainer>
        <BillViewContainer>
          {finalData.template_data.id === 1 ? (
            <FlightReceipt1 data={finalData} />
          ) : (
            ""
          )}
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
