"use client";
import { useState } from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import DateSelect from "../../forms/DateSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import { Plus, Trash2 } from "lucide-react";
import StationaryPreview from "../../previews/StationaryInvoice/StationaryInvoice1";

export default function StationaryBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: "Template 1",
    template_data: {
      title: "Template 1",
      creditRequired: 1,
    },
    stationary_name: "",
    stationary_address: "",
    invoice_number: "6639",
    bill_date: "27-01-2025",
    customer_name: "",
    customer_address: "",
    logo_url: "",
    currency: "Indian Rupee - ₹",
    items: [],
    payment_method: "Select One",
    tax_percentage: 0,
    gst_no: "",
    remark: "",
    terms_accepted: false,
  });

  const addItem = () => {
    setFinalData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          description: "",
          price: 0,
          quantity: 0,
          total: 0,
        },
      ],
    }));
  };

  const removeItem = (index) => {
    setFinalData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const updateItem = (index, field, value) => {
    setFinalData((prev) => {
      const newItems = [...prev.items];
      const item = { ...newItems[index] };
      item[field] = value;

      // Calculate total
      if (field === "price" || field === "quantity") {
        const price = Number(field === "price" ? value : item.price);
        const quantity = Number(field === "quantity" ? value : item.quantity);
        item.total = price * quantity;
      }

      newItems[index] = item;
      return { ...prev, items: newItems };
    });
  };

  return (
    <BillContainer>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6 max-h-[calc(100vh-2rem)] overflow-y-auto pr-4">
          <BillEditContainer finalData={finalData} session={session}>
            <h1 className="text-2xl font-bold mb-6">Stationary Details</h1>

            <TextInput
              title="Stationary Name"
              placeholder="Enter Stationary name"
              finalData={finalData}
              setFinalData={setFinalData}
              name="stationary_name"
            />

            <TextInput
              title="Stationary Address"
              placeholder="Enter Stationary Address"
              finalData={finalData}
              setFinalData={setFinalData}
              name="stationary_address"
            />

            <TextInput
              title="Invoice Number"
              placeholder="6639"
              finalData={finalData}
              setFinalData={setFinalData}
              name="invoice_number"
            />

            <DateSelect
              title="Stationary Bill Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="bill_date"
            />

            <h2 className="text-xl font-semibold mt-6 mb-4">
              Customer Details
            </h2>

            <TextInput
              title="Customer Name"
              placeholder="Enter Customer Name"
              finalData={finalData}
              setFinalData={setFinalData}
              name="customer_name"
            />

            <TextInput
              title="Customer Address"
              placeholder="Customer Address..."
              finalData={finalData}
              setFinalData={setFinalData}
              name="customer_address"
            />

            <SignatureImage
              title="Logo Url"
              placeholder="URL Upload"
              description="Upload on server and get Direct URL- PostImages, webdevtools"
              name="logo_url"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <ListSelect
              title="Currency"
              data={{
                heading: "Select Currency",
                data: ["Indian Rupee - ₹"],
              }}
              name="currency"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Items</h2>
                <button
                  onClick={addItem}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                  <Plus className="w-4 h-4" />
                  Add Item
                </button>
              </div>

              {finalData.items.length > 0 && (
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="grid grid-cols-12 gap-4 font-semibold">
                    <div className="col-span-4">Description</div>
                    <div className="col-span-2">Item Price</div>
                    <div className="col-span-2">Quantity</div>
                    <div className="col-span-2">Total</div>
                    <div className="col-span-2">Action</div>
                  </div>

                  {finalData.items.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-12 gap-4 items-center"
                    >
                      <div className="col-span-4">
                        <input
                          type="text"
                          value={item.description}
                          onChange={(e) =>
                            updateItem(index, "description", e.target.value)
                          }
                          placeholder="Enter description"
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={item.price}
                          onChange={(e) =>
                            updateItem(index, "price", e.target.value)
                          }
                          placeholder="Price"
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateItem(index, "quantity", e.target.value)
                          }
                          min="1"
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={item.total}
                          readOnly
                          className="w-full p-2 border rounded-md bg-gray-50"
                        />
                      </div>
                      <div className="col-span-2">
                        <button
                          onClick={() => removeItem(index)}
                          className="p-2 text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <ListSelect
              title="Payment Method"
              data={{
                heading: "Select Payment Method",
                data: ["Cash", "Card", "UPI", "Net Banking"],
              }}
              name="payment_method"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <TextInput
              title="Tax %"
              placeholder="Tax Amount"
              type="number"
              finalData={finalData}
              setFinalData={setFinalData}
              name="tax_percentage"
            />

            <TextInput
              title="None GST NO."
              placeholder=""
              finalData={finalData}
              setFinalData={setFinalData}
              name="gst_no"
            />

            <TextInput
              title="Remark"
              placeholder="Remark..."
              finalData={finalData}
              setFinalData={setFinalData}
              name="remark"
            />

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

        {/* Preview */}
        <div className="sticky top-4">
          <StationaryPreview data={finalData} />
        </div>
      </div>
    </BillContainer>
  );
}
