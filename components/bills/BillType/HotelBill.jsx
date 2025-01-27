"use client";
import { useEffect, useState } from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import DateSelect from "../../forms/DateSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import TimeSelect from "../../forms/TimeSelect";
import { Plus, Trash2 } from "lucide-react";
import HotelBillPreview from "../../previews/HotelBill/hotelbill1";

export default function HotelBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: "Template 1",
    template_data: {
      title: "Template 1",
      creditRequired: 1,
    },
    hotel_name: "",
    hotel_address: "",
    hotel_phone: "",
    hotel_email: "",
    room_no: "",
    room_type: "Executive",
    customer_name: "",
    customer_address: "",
    logo_url: "",
    signature_url: "",
    items: [],
    inclusive: 0,
    issued_date: "27-01-2025",
    payment_method: "Select One",
    bill_no: "6002",
    nationality: "INDIAN",
    guest_registration_no: "6800",
    reservation_no: "6508",
    check_in_date: "27-01-2025",
    check_in_time: "05:50:00",
    check_out_date: "27-01-2025",
    check_out_time: "05:50:00",
    receipt_no: "4145",
    gst_no: "",
    number_of_persons: "",
    guest_signature_url: "",
    receptionist_signature_url: "",
    terms_accepted: false,
  });

  const addItem = () => {
    setFinalData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          description: "",
          price_per_night: 0,
          total_nights: 0,
          tax: 0,
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
      const price = Number(item.price_per_night);
      const nights = Number(item.total_nights);
      const tax = Number(item.tax);

      const subtotal = price * nights;
      const taxAmount = (subtotal * tax) / 100;
      item.total = subtotal + taxAmount;

      newItems[index] = item;
      return { ...prev, items: newItems };
    });
  };

  return (
    <BillContainer>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6 max-h-[calc(100vh-2rem)] overflow-y-auto pr-4">
          <BillEditContainer finalData={finalData} session={session}>
            <h1 className="text-2xl font-bold mb-6">Hotel-Room Bill</h1>

            <RadioSelect
              title="Select Template"
              data={{
                heading: "Select Template",
                data: [{ title: "Template 1", creditRequired: 1 }],
              }}
              name="template"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <TextInput
              title="Hotel Name"
              placeholder="Enter Hotel Name"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="hotel_name"
            />

            <TextInput
              title="Hotel Address"
              placeholder="Enter Hotel Address"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="hotel_address"
            />

            <TextInput
              title="Hotel Phone No"
              placeholder="Mobile No"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="hotel_phone"
            />

            <TextInput
              title="Hotel Email"
              placeholder="Enter Email"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="hotel_email"
            />

            <TextInput
              title="Room No"
              placeholder="Enter Room Number"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="room_no"
            />

            <ListSelect
              title="Room Type"
              data={{
                heading: "Room Type",
                data: ["Executive", "Deluxe", "Suite"],
              }}
              name="room_type"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <TextInput
              title="Customer Name"
              placeholder="Enter Customer Name"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="customer_name"
            />

            <TextInput
              title="Customer Address"
              placeholder="Enter Customer Address"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="customer_address"
            />

            <SignatureImage
              title="Logo Url"
              placeholder="URL Upload"
              name="logo_url"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <SignatureImage
              title="Enter Signature Url"
              placeholder="Upload on server and get Direct URL - Signwell, PostImages"
              name="signature_url"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Room Details</h2>
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
                    <div className="col-span-3">Description</div>
                    <div className="col-span-2">Price/Night</div>
                    <div className="col-span-2">Total Night</div>
                    <div className="col-span-2">Tax %</div>
                    <div className="col-span-2">Total</div>
                    <div className="col-span-1">Action</div>
                  </div>

                  {finalData.items.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-12 gap-4 items-center"
                    >
                      <div className="col-span-3">
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
                          value={item.price_per_night}
                          onChange={(e) =>
                            updateItem(index, "price_per_night", e.target.value)
                          }
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={item.total_nights}
                          onChange={(e) =>
                            updateItem(index, "total_nights", e.target.value)
                          }
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={item.tax}
                          onChange={(e) =>
                            updateItem(index, "tax", e.target.value)
                          }
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
                      <div className="col-span-1">
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

            <TextInput
              title="Inclusive"
              type="number"
              value="0"
              readOnly
              finalData={finalData}
              setFinalData={setFinalData}
              name="inclusive"
            />

            <DateSelect
              title="Issued On Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="issued_date"
            />

            <ListSelect
              title="Payment Method"
              data={{
                heading: "Payment Method",
                data: ["Cash", "Card", "UPI", "Net Banking"],
              }}
              name="payment_method"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <TextInput
              title="Bill No"
              placeholder="6002"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="bill_no"
            />

            <TextInput
              title="Nationality"
              placeholder="INDIAN"
              finalData={finalData}
              setFinalData={setFinalData}
              name="nationality"
            />

            <TextInput
              title="Guest Registration Card No"
              placeholder="6800"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="guest_registration_no"
            />

            <TextInput
              title="Reservation No"
              placeholder="6508"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="reservation_no"
            />

            <div className="grid grid-cols-2 gap-4">
              <DateSelect
                title="Check In Date"
                finalData={finalData}
                setFinalData={setFinalData}
                name="check_in_date"
              />
              <TimeSelect
                title="Check In Time"
                finalData={finalData}
                setFinalData={setFinalData}
                name="check_in_time"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <DateSelect
                title="Check Out Date"
                finalData={finalData}
                setFinalData={setFinalData}
                name="check_out_date"
              />
              <TimeSelect
                title="Check Out Time"
                finalData={finalData}
                setFinalData={setFinalData}
                name="check_out_time"
              />
            </div>

            <TextInput
              title="Receipt No"
              placeholder="4145"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="receipt_no"
            />

            <TextInput
              title="GST No"
              placeholder="Enter GST Number"
              finalData={finalData}
              setFinalData={setFinalData}
              name="gst_no"
            />

            <TextInput
              title="Number of Persons"
              placeholder="Enter Number of person"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="number_of_persons"
            />

            <SignatureImage
              title="Guest Signature"
              placeholder="URL Upload"
              description="Upload on server and get Direct URL- Signwell,PostImages"
              name="guest_signature_url"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <SignatureImage
              title="Receptionist Signature"
              placeholder="URL Upload"
              description="Upload on server and get Direct URL- Signwell,PostImages"
              name="receptionist_signature_url"
              finalData={finalData}
              setFinalData={setFinalData}
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
          <HotelBillPreview data={finalData} />
        </div>
      </div>
    </BillContainer>
  );
}
