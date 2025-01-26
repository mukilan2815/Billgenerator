"use client";
import { useState } from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import FlightReceipt1 from "../../previews/FlightReceipt/flightreceipt1";
import DateSelect from "../../forms/DateSelect";
import TimeSelect from "../../forms/TimeSelect";
import BillEditContainer from "../BillEditContainer";
import ListSelect from "../../forms/ListSelect";

export default function FlightBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    logo: "Akasa Air",
    pnr: "RITJPF",
    reference_no: "IV6MV83X",
    issued_date: "27-01-2025",
    issued_time: "04:42:07",
    ticket_barcode: "",
    ticket_no: "RITJPFEFH1",
    passenger_name: "MOHAMMAD MUKEEM SHAH",
    passenger_type: "Adult",
    passenger_title: "Mr",
    flight_no: "SF-7441",
    class: "FIRST",
    refundable: "Refundable",
    depart_location: "Agartala (IXA)",
    depart_date: "27-01-2025",
    depart_time: "04:42",
    arrive_location: "Agartala (IXA)",
    arrive_date: "27-01-2025",
    arrive_time: "04:42",
    duration: "00:00",
    status: "Confirmed",
    passenger_mobile: "",
    passenger_email: "",
    base_fare: "",
    taxes_fees: "",
    hand_baggage: "7 Kg",
    checkin_baggage: "15 Kg",
    terms_accepted: false,
  });

  return (
    <BillContainer>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6 max-h-[calc(100vh-2rem)] overflow-y-auto pr-4">
          <BillEditContainer finalData={finalData} session={session}>
            <h1 className="text-2xl font-bold mb-6">{data.title}</h1>

            <RadioSelect
              title="Select Template"
              data={{
                heading: "Select Template",
                data: ["Template 1", "Template 2"],
              }}
              name="template"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <ListSelect
              title="Select Logo"
              data={{
                heading: "Select Logo",
                data: ["Akasa Air", "Indigo Air"],
              }}
              name="logo"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <TextInput
              title="PNR"
              value={finalData.pnr}
              finalData={finalData}
              setFinalData={setFinalData}
              name="pnr"
              required
            />

            <TextInput
              title="Reference No"
              value={finalData.reference_no}
              finalData={finalData}
              setFinalData={setFinalData}
              name="reference_no"
            />

            <div className="grid grid-cols-2 gap-x-4">
              <DateSelect
                title="Issued On Date"
                finalData={finalData}
                setFinalData={setFinalData}
                name="issued_date"
              />
              <TimeSelect
                title="Issued On Time"
                finalData={finalData}
                setFinalData={setFinalData}
                name="issued_time"
              />
            </div>

            <SignatureImage
              title="Ticket Barcode"
              placeholder="Enter Ticket Barcode"
              description="Upload on server and get Direct URL - Generate Ticket Url"
              name="ticket_barcode"
              finalData={finalData}
              setFinalData={setFinalData}
              required
            />

            <div className="space-y-4 border p-4 rounded-lg">
              <h3 className="font-semibold">Passenger Details</h3>
              <TextInput
                title="Ticket No."
                value={finalData.ticket_no}
                finalData={finalData}
                setFinalData={setFinalData}
                name="ticket_no"
              />
              <div className="grid grid-cols-2 gap-x-4">
                <ListSelect
                  title="Title"
                  data={{
                    heading: "Select Title",
                    data: ["Mr", "Mrs", "Ms"],
                  }}
                  name="passenger_title"
                  finalData={finalData}
                  setFinalData={setFinalData}
                />
                <TextInput
                  title="Name"
                  value={finalData.passenger_name}
                  finalData={finalData}
                  setFinalData={setFinalData}
                  name="passenger_name"
                />
              </div>
              <ListSelect
                title="Type"
                data={{
                  heading: "Select Type",
                  data: ["Adult", "Child"],
                }}
                name="passenger_type"
                finalData={finalData}
                setFinalData={setFinalData}
              />
              <div className="grid grid-cols-2 gap-x-4">
                <TextInput
                  title="Hand Baggage"
                  value={finalData.hand_baggage}
                  finalData={finalData}
                  setFinalData={setFinalData}
                  name="hand_baggage"
                />
                <TextInput
                  title="Check-in Baggage"
                  value={finalData.checkin_baggage}
                  finalData={finalData}
                  setFinalData={setFinalData}
                  name="checkin_baggage"
                />
              </div>
            </div>

            <TextInput
              title="Flight No"
              value={finalData.flight_no}
              finalData={finalData}
              setFinalData={setFinalData}
              name="flight_no"
            />

            <ListSelect
              title="Class"
              data={{
                heading: "Select Class",
                data: ["FIRST", "BUSINESS", "ECONOMY"],
              }}
              name="class"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <ListSelect
              title="Refundable/Non-Refundable"
              data={{
                heading: "Select Refund Type",
                data: ["Refundable", "Non-Refundable"],
              }}
              name="refundable"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <div className="space-y-4 border p-4 rounded-lg">
              <h3 className="font-semibold">Depart</h3>
              <TextInput
                title="Depart Location"
                value={finalData.depart_location}
                finalData={finalData}
                setFinalData={setFinalData}
                name="depart_location"
              />
              <div className="grid grid-cols-2 gap-x-4">
                <DateSelect
                  title="Depart Date"
                  finalData={finalData}
                  setFinalData={setFinalData}
                  name="depart_date"
                />
                <TimeSelect
                  title="Depart Time"
                  finalData={finalData}
                  setFinalData={setFinalData}
                  name="depart_time"
                />
              </div>
            </div>

            <div className="space-y-4 border p-4 rounded-lg">
              <h3 className="font-semibold">Arrive</h3>
              <TextInput
                title="Arrive Location"
                value={finalData.arrive_location}
                finalData={finalData}
                setFinalData={setFinalData}
                name="arrive_location"
              />
              <div className="grid grid-cols-2 gap-x-4">
                <DateSelect
                  title="Arrive Date"
                  finalData={finalData}
                  setFinalData={setFinalData}
                  name="arrive_date"
                />
                <TimeSelect
                  title="Arrive Time"
                  finalData={finalData}
                  setFinalData={setFinalData}
                  name="arrive_time"
                />
              </div>
            </div>

            <TextInput
              title="Duration"
              value={finalData.duration}
              finalData={finalData}
              setFinalData={setFinalData}
              name="duration"
            />

            <div className="space-y-4 border p-4 rounded-lg">
              <h3 className="font-semibold">Contact Details</h3>
              <TextInput
                title="Passenger Mobile No"
                placeholder="Passenger Mobile No"
                finalData={finalData}
                setFinalData={setFinalData}
                name="passenger_mobile"
              />
              <TextInput
                title="Passenger Email"
                placeholder="Enter Passenger Email"
                description="Please enter correct email. Bill PDF will be sent to this email address."
                finalData={finalData}
                setFinalData={setFinalData}
                name="passenger_email"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-x-4">
              <TextInput
                title="Base Fare"
                placeholder="Enter Base Fare"
                type="number"
                finalData={finalData}
                setFinalData={setFinalData}
                name="base_fare"
                required
              />
              <TextInput
                title="Taxes and Fees"
                placeholder="Enter Taxes and Fees"
                type="number"
                finalData={finalData}
                setFinalData={setFinalData}
                name="taxes_fees"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={finalData.terms_accepted}
                onChange={(e) =>
                  setFinalData({
                    ...finalData,
                    terms_accepted: e.target.checked,
                  })
                }
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I have read the terms and conditions.
              </label>
            </div>
          </BillEditContainer>
        </div>

        <div className="sticky top-4">
          <FlightReceipt1 data={finalData} />
        </div>
      </div>
    </BillContainer>
  );
}
