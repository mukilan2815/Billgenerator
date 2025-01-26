"use client";
import { useEffect, useState } from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import GymReceipt1 from "../../previews/GymReceipt/gymreceipt1.jsx"; // Update path as required
import DateSelect from "../../forms/DateSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";
import TextAreaInput from "../../forms/TextAreaInput";

export default function GymBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    invoice_number: 9504,
    gym_name: "",
    gym_address: "",
    invoice_date: "26-01-2025",
    bill_from_date: "26-01-2025",
    bill_to_date: "26-01-2025",
    gym_email: "",
    gym_phone: "7350034180",
    customer_name: "",
    customer_address: "",
    customer_phone: "7800848798",
    payment_method: "Select One",
    tax: 0,
    currency: "Indian Rupee - ₹",
    signature_url: "https://billgenerator.org/assets/img/logo/signature.png",
    logo_url: "https://billgenerator.org/assets/img/logo/file.png",
    item_details: [],
    remark: "",
  });

  useEffect(() => {
    // Optional: Add logic to fetch or modify data on component mount
  }, []);

  return (
    <BillContainer>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Form */}
        <div className="space-y-6">
          <BillEditContainer finalData={finalData} session={session}>
            <h1 className="text-2xl font-semibold">{data.title}</h1>
            <RadioSelect
              title="Select Template"
              data={data.templates}
              name="template"
              finalData={finalData}
              setFinalData={setFinalData}
            />
            <h2 className="my-3 text-xl">Gym Bill Details</h2>
            <TextInput
              title="Gym Name"
              placeholder="Enter Gym Name"
              finalData={finalData}
              setFinalData={setFinalData}
              name="gym_name"
            />
            <TextInput
              title="Gym Address"
              placeholder="Enter Gym Address"
              finalData={finalData}
              setFinalData={setFinalData}
              name="gym_address"
            />
            <TextInput
              title="Invoice Number"
              value={finalData.invoice_number}
              finalData={finalData}
              setFinalData={setFinalData}
              name="invoice_number"
              disabled
            />
            <TextInput
              title="Gym Email"
              placeholder="Enter Email"
              finalData={finalData}
              setFinalData={setFinalData}
              name="gym_email"
            />
            <TextInput
              title="Gym No"
              placeholder="Enter Gym Phone"
              finalData={finalData}
              setFinalData={setFinalData}
              name="gym_phone"
            />
            <TextInput
              title="Customer Name"
              placeholder="Enter Customer Name"
              finalData={finalData}
              setFinalData={setFinalData}
              name="customer_name"
            />
            <TextInput
              title="Customer Address"
              placeholder="Enter Customer Address"
              finalData={finalData}
              setFinalData={setFinalData}
              name="customer_address"
            />
            <TextInput
              title="Customer No"
              placeholder="Enter Customer Phone"
              finalData={finalData}
              setFinalData={setFinalData}
              name="customer_phone"
            />
            <TextInput
              title="Logo URL"
              placeholder="Enter Gym Logo URL"
              finalData={finalData}
              setFinalData={setFinalData}
              name="logo_url"
            />
            <TextInput
              title="Signature URL"
              placeholder="Enter Gym Signature URL"
              finalData={finalData}
              setFinalData={setFinalData}
              name="signature_url"
            />
            <TextAreaInput
              title="Remark"
              placeholder="Enter Remark"
              finalData={finalData}
              setFinalData={setFinalData}
              name="remark"
            />
            <ListSelect
              title="Payment Method"
              data={{
                heading: "Select Payment Method",
                data: ["Cash", "Card", "Online", "Other"],
              }}
              name="payment_method"
              finalData={finalData}
              setFinalData={setFinalData}
            />
            <TextInput
              title="Tax %"
              type="number"
              finalData={finalData}
              setFinalData={setFinalData}
              name="tax"
            />
          </BillEditContainer>
        </div>

        {/* Right Side - Live Preview */}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-[600px]">
            <GymReceipt1 data={finalData} />
          </div>
        </div>
      </div>
    </BillContainer>
  );
}
