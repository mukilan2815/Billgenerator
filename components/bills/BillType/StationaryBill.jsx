"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureUpload from "../../forms/SignatureUpload";
import StationaryInvoicePreview from "../../previews/StationaryInvoice/StationaryInvoice1.jsx"; // Preview component
import DateSelect from "../../forms/DateSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";

export default function StationaryBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    invoice_number: 1001, // Default invoice number
    stationary_details: [{ name: "", quantity: 1, price: 0 }], // Default product details
    customer_name: "",
    customer_email: session?.user?.email || "",
    customer_phone: "",
    total_amount: 0,
    tax: 0,
  });

  useEffect(() => {
    // Recalculate total amount whenever stationary details change
    const total = finalData.stationary_details.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setFinalData((prev) => ({ ...prev, total_amount: total }));
  }, [finalData.stationary_details]);

  const updateStationaryDetails = (index, key, value) => {
    const updatedDetails = [...finalData.stationary_details];
    updatedDetails[index][key] = value;
    setFinalData({ ...finalData, stationary_details: updatedDetails });
  };

  const addStationaryItem = () => {
    setFinalData((prev) => ({
      ...prev,
      stationary_details: [
        ...prev.stationary_details,
        { name: "", quantity: 1, price: 0 },
      ],
    }));
  };

  return (
    <BillContainer>
      <div className="flex w-full flex-col lg:flex-row justify-between gap-5">
        {/* Form Section - Full width on mobile, left side on large screens */}
        <div className="w-full lg:w-3/4">
          <BillEditContainer finalData={finalData} session={session}>
            <h1 className="text-xl font-bold mb-4">{data.title}</h1>
            <RadioSelect
              title="Select Template"
              data={data.templates}
              name="template"
              finalData={finalData}
              setFinalData={setFinalData}
            />
            <h2 className="my-3 text-lg font-semibold">Customer Details</h2>
            <div className="space-y-4">
              <TextInput
                title="Customer Name"
                placeholder="Enter customer name..."
                finalData={finalData}
                setFinalData={setFinalData}
                name="customer_name"
                required={true}
              />
              <TextInput
                title="Phone Number"
                placeholder="Enter phone number..."
                finalData={finalData}
                setFinalData={setFinalData}
                name="customer_phone"
                required={true}
              />
              <TextInput
                title="Email Address"
                placeholder="Enter email..."
                value={finalData.customer_email}
                finalData={finalData}
                setFinalData={setFinalData}
                name="customer_email"
                required={true}
              />
            </div>

            <h3 className="text-lg font-semibold my-3">
              Stationary Item Details
            </h3>
            {finalData.stationary_details.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"
              >
                <TextInput
                  title={`Item Name ${index + 1}`}
                  placeholder="Enter item name..."
                  finalData={finalData}
                  onChange={(event) =>
                    updateStationaryDetails(index, "name", event.target.value)
                  }
                  name={`item_name_${index}`}
                  value={item.name}
                />
                <TextInput
                  title="Quantity"
                  type="number"
                  placeholder="Enter quantity..."
                  finalData={finalData}
                  onChange={(event) =>
                    updateStationaryDetails(
                      index,
                      "quantity",
                      parseInt(event.target.value, 10)
                    )
                  }
                  name={`item_quantity_${index}`}
                  value={item.quantity}
                />
                <TextInput
                  title="Price"
                  type="number"
                  placeholder="Enter price..."
                  finalData={finalData}
                  onChange={(event) =>
                    updateStationaryDetails(
                      index,
                      "price",
                      parseFloat(event.target.value)
                    )
                  }
                  name={`item_price_${index}`}
                  value={item.price}
                />
              </div>
            ))}
            <button
              type="button"
              className="mt-2 text-blue-600 hover:text-blue-800"
              onClick={addStationaryItem}
            >
              Add Item
            </button>

            <h3 className="text-lg font-semibold my-3">Payment Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <TextInput
                title="Tax %"
                placeholder="Enter tax percentage..."
                type="number"
                finalData={finalData}
                setFinalData={setFinalData}
                name="tax"
              />
            </div>

            <SignatureUpload
              title="Company Logo URL"
                placeholder="Enter valid logo image URL..."
              name="logo_url"
              finalData={finalData}
              setFinalData={setFinalData}
            />
          </BillEditContainer>``
        </div>

        {/* Preview Section - Positioned in right side corner on large screens */}
        <div className="w-full lg:w-1/4 lg:sticky lg:top-4">
          <BillViewContainer>
            <StationaryInvoicePreview data={finalData} />
          </BillViewContainer>
        </div>
      </div>
    </BillContainer>
  );
}
