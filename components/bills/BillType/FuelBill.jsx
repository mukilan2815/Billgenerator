"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import Fuel1 from "../../previews/fuelbill/Fuel1";
import Fuel2 from "../../previews/fuelbill/Fuel3";
import Fuel3 from "../../previews/fuelbill/Fuel2";
import Fuel4 from "../../previews/fuelbill/Fuel4";
import DateSelect from "../../forms/DateSelect";
import TimeSelect from "../../forms/TimeSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";
import TextAreaInput from "../../forms/TextAreaInput";
import SelectWithInput from "@/components/forms/SelectWithInput";

export default function FuelBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    // template_id: data.template.id,
    // createdAt: new Date().toLocaleDateString("en-GB"),
    template: data.templates.data[0].title,
    logo: data.logos.data[0].title,
    template_data: data.templates.data[0],
    logo_data: data.logos.data[0],
    invoice_number: 1380,
    tel_no: "084572",
    fcc_id: "5914",
    fip_no: "05",
    nozzle_no: "2",
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
          <RadioSelect
            title="Select Logo"
            data={data.logos}
            name={"logo"}
            finalData={finalData}
            setFinalData={setFinalData}
          />
          <TextInput
            title="Fuel Station Name"
            placeholder={"Fuel station name"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"fuel_station"}
            required={true}
          />
          <TextAreaInput
            title="Fuel Station Address"
            placeholder={"Fuel station address"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"fuel_station_address"}
            required={true}
          />
          <div className=" grid grid-cols-2 gap-x-10">
            <TextInput
              title="Fuel Rate"
              type={"number"}
              placeholder={"Fuel Rate"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"fuel_rate"}
              required={true}
            />
            <TextInput
              title="Total Amount"
              type={"number"}
              placeholder={"Total Amount"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"total_amount"}
              required={true}
            />
          </div>

          <div className=" grid grid-cols-2 gap-x-10">
            {" "}
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
            placeholder={"Enter Customer Name"}
            finalData={finalData}
            setFinalData={setFinalData}
            name={"customer_name"}
            required={true}
          />

          <div className=" grid grid-cols-2 gap-x-10">
            <TextInput
              title="Vehical Number"
              placeholder={"Vehical Number"}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"vehicle_number"}
            />
            <ListSelect
              title={"Vehicle Type"}
              data={data.select_vehicleType}
              name={"vehicle_type"}
              finalData={finalData}
              setFinalData={setFinalData}
            />
            <ListSelect
              title={"Payment Method"}
              data={data.select_paymentType}
              name={"payment_type"}
              finalData={finalData}
              setFinalData={setFinalData}
            />
            <TextInput
              title="Invoice Number"
              type={"number"}
              placeholder={finalData.invoice_number}
              finalData={finalData}
              setFinalData={setFinalData}
              name={"invoice_number"}
              value={finalData.invoice_number}
              required={true}
            />
          </div>

          {finalData.template_data.id == 4 && (
            <div className=" grid grid-cols-4 gap-x-10">
              <TextInput
                title="Tel no"
                type={"text"}
                placeholder={"Tel no"}
                value={finalData.tel_no}
                finalData={finalData}
                setFinalData={setFinalData}
                name={"tel_no"}
                // required={true}
              />
              <TextInput
                title="FCC Id"
                type={"text"}
                placeholder={"FCC Id"}
                value={finalData.fcc_id}
                finalData={finalData}
                setFinalData={setFinalData}
                name={"fcc_id"}
                // required={true}
              />{" "}
              <TextInput
                title="FIP No"
                type={"text"}
                placeholder={"FIP No"}
                value={finalData.fip_no}
                finalData={finalData}
                setFinalData={setFinalData}
                name={"fip_id"}
                // required={true}
              />{" "}
              <TextInput
                title="Nozzle No"
                type={"text"}
                placeholder={"Nozzle No"}
                value={finalData.nozzle_no}
                finalData={finalData}
                setFinalData={setFinalData}
                name={"nozzle_no"}
                // required={true}
              />
            </div>
          )}

          <SelectWithInput
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
          {finalData.template_data.id == 1 ? (
            <Fuel2 data={finalData} />
          ) : finalData.template_data.id == 2 ? (
            <Fuel1 data={finalData} />
          ) : finalData.template_data.id == 3 ? (
            <Fuel3 data={finalData} />
          ) : finalData.template_data.id == 4 ? (
            <Fuel4 data={finalData} />
          ) : (
            ""
          )}
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
