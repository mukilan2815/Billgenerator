"use client";
import { useEffect, useState } from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import GymReceipt1 from "../../previews/GymReceipt/gymreceipt1";
import DateSelect from "../../forms/DateSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";
import TextAreaInput from "../../forms/TextAreaInput";
import { Plus, Trash2 } from "lucide-react";

export default function GymBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: data?.templates?.data[0]?.title || "",
    template_data: data?.templates?.data[0] || {},
    invoice_number: "6713",
    user_no: "3gJI0J",
    gym_name: "",
    gym_address: "",
    invoice_date: "27-01-2025",
    bill_from_date: "27-01-2025",
    bill_to_date: "27-01-2025",
    billing_cycle: "Monthly",
    gym_email: "",
    gym_phone: "6512616885",
    customer_phone: "3108744168",
    customer_name: "",
    customer_address: "",
    payment_method: "Select One",
    tax: 0,
    currency: "Indian Rupee - ₹",
    signature_url: "",
    logo_url: "",
    item_details: [],
    remark: "",
    gst_no: "",
    terms_accepted: false,
  });

  const addItem = () => {
    setFinalData((prev) => ({
      ...prev,
      item_details: [
        ...prev.item_details,
        { description: "", price: 0, quantity: 1, total: 0 },
      ],
    }));
  };

  const removeItem = (index) => {
    setFinalData((prev) => ({
      ...prev,
      item_details: prev.item_details.filter((_, i) => i !== index),
    }));
  };

  const updateItem = (index, field, value) => {
    setFinalData((prev) => {
      const newItems = [...prev.item_details];
      newItems[index] = {
        ...newItems[index],
        [field]: value,
        total:
          field === "price" || field === "quantity"
            ? (field === "price" ? Number(value) : newItems[index].price) *
              (field === "quantity" ? Number(value) : newItems[index].quantity)
            : newItems[index].total,
      };
      return { ...prev, item_details: newItems };
    });
  };

  return (
    <BillContainer>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Side - Form */}
        <div className="space-y-6">
          <BillEditContainer finalData={finalData} session={session}>
            <h1 className="text-2xl font-semibold">{data?.title}</h1>
            <RadioSelect
              title="Select Template"
              data={data?.templates}
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
            />
            <TextInput
              title="User No"
              value={finalData.user_no}
              finalData={finalData}
              setFinalData={setFinalData}
              name="user_no"
            />
            <DateSelect
              title="Invoice Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="invoice_date"
            />
            <DateSelect
              title="Bill From Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="bill_from_date"
            />
            <ListSelect
              title="Billing Cycle"
              data={{
                heading: "Select Billing Cycle",
                data: ["Monthly", "Quarterly", "Half Yearly", "Yearly"],
              }}
              name="billing_cycle"
              finalData={finalData}
              setFinalData={setFinalData}
            />
            <DateSelect
              title="Bill To Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="bill_to_date"
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
              value={finalData.gym_phone}
              finalData={finalData}
              setFinalData={setFinalData}
              name="gym_phone"
            />
            <TextInput
              title="Customer No"
              placeholder="Enter Customer Phone"
              value={finalData.customer_phone}
              finalData={finalData}
              setFinalData={setFinalData}
              name="customer_phone"
            />

            <h2 className="my-3 text-xl">Customer Details</h2>
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
              title="Logo URL"
              placeholder="Upload on server and get Direct URL"
              finalData={finalData}
              setFinalData={setFinalData}
              name="logo_url"
            />

            <ListSelect
              title="Currency"
              data={{
                heading: "Select Currency",
                data: [
                  "Indian Rupee - ₹",
                  "US Dollar - $",
                  "Euro - €",
                  "Pound - £",
                ],
              }}
              name="currency"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            {/* Add Item Details Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Item Details</h2>
                <button
                  onClick={addItem}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                >
                  <Plus className="w-4 h-4" />
                  Add Item
                </button>
              </div>

              {finalData.item_details.length > 0 && (
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="grid grid-cols-12 gap-4 font-semibold">
                    <div className="col-span-4">Name & Description</div>
                    <div className="col-span-2">Price</div>
                    <div className="col-span-2">Quantity</div>
                    <div className="col-span-2">Total</div>
                    <div className="col-span-2">Action</div>
                  </div>

                  {finalData.item_details.map((item, index) => (
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
                          placeholder="Enter item description"
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
                data: ["Cash", "Card", "Online", "UPI", "Other"],
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

            <TextInput
              title="GST No"
              placeholder="None GST No"
              finalData={finalData}
              setFinalData={setFinalData}
              name="gst_no"
            />

            <TextAreaInput
              title="Remark"
              placeholder="Remark..."
              finalData={finalData}
              setFinalData={setFinalData}
              name="remark"
            />

            <TextInput
              title="Signature URL"
              placeholder="Upload on server and get Direct URL"
              finalData={finalData}
              setFinalData={setFinalData}
              name="signature_url"
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
