"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureImage from "../../forms/SignatureImage";
import EcommerceInvoicePreview from "../../previews/EcommerceInvoice/ecommerceinvoice1.jsx"; // Path for the invoice preview
import DateSelect from "../../forms/DateSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";

export default function EcommerceInvoice({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    invoice_number: 4001, // Default invoice number
    order_date: "",
    delivery_date: "",
    customer_name: "",
    customer_email: session?.user?.email || "",
    phone_number: "",
    shipping_address: "",
    billing_address: "",
    product_details: [{ name: "", quantity: 1, price: 0 }], // Default product details
    total_amount: 0,
    tax: 0,
    shipping_cost: 0,
    logo_url: "",
  });

  useEffect(() => {
    // Recalculate total amount whenever product details change
    const total = finalData.product_details.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setFinalData((prev) => ({ ...prev, total_amount: total }));
  }, [finalData.product_details]);

  const updateProductDetails = (index, key, value) => {
    const updatedDetails = [...finalData.product_details];
    updatedDetails[index][key] = value;
    setFinalData({ ...finalData, product_details: updatedDetails });
  };

  const addProduct = () => {
    setFinalData((prev) => ({
      ...prev,
      product_details: [
        ...prev.product_details,
        { name: "", quantity: 1, price: 0 },
      ],
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
          <h3>Order Details</h3>
          <div className="grid grid-cols-2 gap-x-10">
            <DateSelect
              title="Order Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="order_date"
            />
            <DateSelect
              title="Delivery Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="delivery_date"
            />
          </div>
          <h3>Customer Details</h3>
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
            name="phone_number"
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
          <TextInput
            title="Shipping Address"
            placeholder="Enter shipping address..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="shipping_address"
            required={true}
          />
          <TextInput
            title="Billing Address"
            placeholder="Enter billing address..."
            finalData={finalData}
            setFinalData={setFinalData}
            name="billing_address"
            required={true}
          />
          <h3>Product Details</h3>
          {finalData.product_details.map((product, index) => (
            <div key={index} className="grid grid-cols-3 gap-x-5">
              <TextInput
                title={`Product Name ${index + 1}`}
                placeholder="Enter product name..."
                finalData={finalData}
                onChange={(event) =>
                  updateProductDetails(index, "name", event.target.value)
                }
                name={`product_name_${index}`}
                value={product.name}
              />
              <TextInput
                title="Quantity"
                type="number"
                placeholder="Enter quantity..."
                finalData={finalData}
                setFinalData={(data) =>
                  updateProductDetails(
                    index,
                    "quantity",
                    parseInt(data.target.value, 10)
                  )
                }
                name={`product_quantity_${index}`}
                value={product.quantity}
              />
              <TextInput
                title="Price"
                type="number"
                placeholder="Enter price..."
                finalData={finalData}
                onChange={(event) =>
                  updateProductDetails(
                    index,
                    "price",
                    parseFloat(event.target.value)
                  )
                }
                name={`product_price_${index}`}
                value={product.price}
              />
            </div>
          ))}
          <button
            type="button"
            className="mt-2 text-blue-600"
            onClick={addProduct}
          >
            Add Product
          </button>
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
            <TextInput
              title="Shipping Cost"
              placeholder="Enter shipping cost..."
              type="number"
              finalData={finalData}
              setFinalData={setFinalData}
              name="shipping_cost"
            />
          </div>
          <SignatureImage
            title="Company Logo URL"
            placeholder="Enter valid logo image URL..."
            name="logo_url"
            finalData={finalData}
            setFinalData={setFinalData}
          />
        </BillEditContainer>
        <BillViewContainer>
          <EcommerceInvoicePreview data={finalData} />
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
