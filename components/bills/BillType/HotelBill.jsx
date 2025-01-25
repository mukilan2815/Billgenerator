"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import HotelBillPreview from "../../previews/HotelBill/hotelbill1.jsx"; // Path for the invoice preview
import DateSelect from "../../forms/DateSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";

export default function HotelBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    invoice_number: 5001, // Default invoice number
    check_in_date: "",
    check_out_date: "",
    guest_name: "",
    guest_email: session?.user?.email || "",
    phone_number: "",
    room_type: "",
    additional_services: [],
    room_cost: 0,
    service_cost: 0,
    tax: 0,
    total_amount: 0,
    logo_url: "",
  });

  useEffect(() => {
    // Calculate total amount dynamically
    const total =
      parseFloat(finalData.room_cost) +
      parseFloat(finalData.service_cost) +
      (parseFloat(finalData.tax) / 100) *
        (parseFloat(finalData.room_cost) + parseFloat(finalData.service_cost));
    setFinalData((prev) => ({ ...prev, total_amount: total }));
  }, [finalData.room_cost, finalData.service_cost, finalData.tax]);

  const handleServiceChange = (selectedServices) => {
    setFinalData((prev) => ({
      ...prev,
      additional_services: selectedServices,
    }));
  };

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
          <h3>Booking Details</h3>
          <div className="grid grid-cols-2 gap-x-10">
            <DateSelect
              title="Check-in Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="check_in_date"
            />
            <DateSelect
              title="Check-out Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="check_out_date"
            />
          </div>
          <h3>Guest Details</h3>
          <TextInput
            title="Guest Name"
            placeholder="Enter guest name..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="guest_name"
            required={true}
          />
          <TextInput
            title="Phone Number"
            placeholder="Enter phone number..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="phone_number"
            required={true}
          />
          <TextInput
            title="Email Address"
            placeholder="Enter email..."
            value={finalData.guest_email}
            finalData={finalData}
            setFinalData={setFinalData}
            name="guest_email"
            required={true}
          />
          <h3>Room Details</h3>
          <ListSelect
            title="Room Type"
            data={data.select_roomType}
            name="room_type"
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <TextInput
            title="Room Cost (Per Night)"
            placeholder="Enter room cost..."
            type="number"
            finalData={finalData}
            setFinalData={setFinalData}
            name="room_cost"
            required={true}
          />
          <h3>Additional Services</h3>
          <ListSelect
            title="Select Additional Services"
            data={data.select_services}
            name="additional_services"
            finalData={finalData}
            setFinalData={(selectedServices) =>
              handleServiceChange(selectedServices)
            }
            isMulti={true} // Enables multiple selections
          />
          <TextInput
            title="Services Cost"
            placeholder="Enter cost for additional services..."
            type="number"
            finalData={finalData}
            setFinalData={setFinalData}
            name="service_cost"
          />
          <h3>Payment Details</h3>
          <div className="grid grid-cols-2 gap-x-10">
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
            title="Hotel Logo URL"
            placeholder="Enter valid logo image URL..."
            name="logo_url"
            finalData={finalData}
            setFinalData={setFinalData}
          />
        </BillEditContainer>
        <BillViewContainer>
          <HotelBillPreview data={finalData} />
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
