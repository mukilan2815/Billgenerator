"use client";
import { useState } from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import DateSelect from "../../forms/DateSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import EcommercePreview from "../../previews/EcommerceInvoice/ecommerceinvoice1";
import { Plus, Trash2 } from "lucide-react";

const ECOMMERCE_LOGOS = {
  "Template 1": "/placeholder.svg",
  "Template 2": "/placeholder.svg",
  Amazon:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
  Flipkart:
    "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Flipkart_logo.svg/300px-Flipkart_logo.svg.png",
  Myntra:
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Myntra_logo.png/330px-Myntra_logo.png",
};

const TEMPLATE_COLORS = {
  Amazon: "orange",
  Flipkart: "blue",
  Myntra: "pink",
  "Template 1": "gray",
  "Template 2": "gray",
};

export default function EcommerceInvoice({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: "Template 1",
    template_data: {
      title: "Template 1",
      creditRequired: 1,
    },
    customer_name: "",
    invoice_number: "",
    sold_by: "",
    order_number: "",
    shipping_address: "",
    sold_by_details: "",
    item_details: [],
    payment_method: "Select One",
    gstin: "",
    order_date: "27-01-2025",
    invoice_date: "27-01-2025",
    pan_no: "",
    place_of_supply: "",
    place_of_delivery: "",
    signature_url: "",
    company_logo: "",
    terms_accepted: false,
  });

  const addItem = () => {
    setFinalData((prev) => ({
      ...prev,
      item_details: [
        ...prev.item_details,
        {
          description: "",
          price: 0,
          quantity: 0,
          tax: 0,
          discount: 0,
          total: 0,
        },
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
      const item = { ...newItems[index] };
      item[field] = value;

      // Calculate total
      const price = Number(item.price);
      const quantity = Number(item.quantity);
      const tax = Number(item.tax);
      const discount = Number(item.discount);

      const subtotal = price * quantity;
      const taxAmount = (subtotal * tax) / 100;
      const discountAmount = (subtotal * discount) / 100;
      item.total = subtotal + taxAmount - discountAmount;

      newItems[index] = item;
      return { ...prev, item_details: newItems };
    });
  };

  return (
    <BillContainer>
      <div className="gap-8">
        {/* Left Side - Form */}
        <div className="space-y-6 max-h-[calc(100vh-2rem)] overflow-y-auto pr-4">
          <BillEditContainer finalData={finalData} session={session}>
            <h1
              className={`text-2xl font-bold mb-6 text-${
                TEMPLATE_COLORS[finalData.template]
              }-600`}
            >
              E-commerce Invoice
            </h1>

            <RadioSelect
              title="Select Template"
              data={{
                heading: "Select Template",
                data: [
                  { title: "Template 1", creditRequired: 1 },
                  { title: "Template 2", creditRequired: 1 },
                  { title: "Amazon", creditRequired: 1 },
                  { title: "Flipkart", creditRequired: 1 },
                  { title: "Myntra", creditRequired: 1 },
                ],
              }}
              name="template"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <div className="space-y-4 border p-4 rounded-lg">
              <TextInput
                title="Customer Name"
                placeholder="Enter Customer Name"
                finalData={finalData}
                setFinalData={setFinalData}
                name="customer_name"
              />
              <TextInput
                title="Invoice Number"
                placeholder="Enter Receipt Number"
                finalData={finalData}
                setFinalData={setFinalData}
                name="invoice_number"
              />
              <TextInput
                title="Sold By"
                placeholder="Enter Seller Name"
                finalData={finalData}
                setFinalData={setFinalData}
                name="sold_by"
              />
              <TextInput
                title="Order Number"
                placeholder="Enter Order Number"
                finalData={finalData}
                setFinalData={setFinalData}
                name="order_number"
              />
              <TextInput
                title="Customer Shipping Address"
                placeholder="Shipping Address..."
                finalData={finalData}
                setFinalData={setFinalData}
                name="shipping_address"
              />
              <TextInput
                title="Sold By Details"
                placeholder="Sold by RetailTech..."
                finalData={finalData}
                setFinalData={setFinalData}
                name="sold_by_details"
              />
            </div>

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
                    <div className="col-span-3">Description</div>
                    <div className="col-span-2">Price</div>
                    <div className="col-span-1">Qty</div>
                    <div className="col-span-2">Tax %</div>
                    <div className="col-span-2">Discount</div>
                    <div className="col-span-2">Action</div>
                  </div>

                  {finalData.item_details.map((item, index) => (
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
                          value={item.price}
                          onChange={(e) =>
                            updateItem(index, "price", e.target.value)
                          }
                          placeholder="Price"
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div className="col-span-1">
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
                          value={item.tax}
                          onChange={(e) =>
                            updateItem(index, "tax", e.target.value)
                          }
                          placeholder="Tax %"
                          className="w-full p-2 border rounded-md"
                        />
                      </div>
                      <div className="col-span-2">
                        <input
                          type="number"
                          value={item.discount}
                          onChange={(e) =>
                            updateItem(index, "discount", e.target.value)
                          }
                          placeholder="Discount"
                          className="w-full p-2 border rounded-md"
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
              title="GSTIN"
              placeholder="Enter GSTIN If any"
              finalData={finalData}
              setFinalData={setFinalData}
              name="gstin"
            />

            <div className="grid grid-cols-2 gap-4">
              <DateSelect
                title="Order Date"
                finalData={finalData}
                setFinalData={setFinalData}
                name="order_date"
              />
              <DateSelect
                title="Invoice Date"
                finalData={finalData}
                setFinalData={setFinalData}
                name="invoice_date"
              />
            </div>

            <TextInput
              title="PAN NO"
              placeholder="Enter PAN NO:"
              finalData={finalData}
              setFinalData={setFinalData}
              name="pan_no"
            />

            <ListSelect
              title="Place of Supply"
              data={{
                heading: "Select Place",
                data: ["Delhi", "Mumbai", "Bangalore", "Other"],
              }}
              name="place_of_supply"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <ListSelect
              title="Place of Delivery"
              data={{
                heading: "Select Place",
                data: ["Delhi", "Mumbai", "Bangalore", "Other"],
              }}
              name="place_of_delivery"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <SignatureImage
              title="Signature URL"
              placeholder="Enter Signature URL"
              description="Upload on server and get Direct URL - Signwell, PostImages"
              name="signature_url"
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

        {/* Right Side - Preview */}
        <div className="sticky top-4">
          <EcommercePreview
            data={finalData}
            logos={ECOMMERCE_LOGOS}
            colors={TEMPLATE_COLORS}
          />
        </div>
      </div>
    </BillContainer>
  );
}
