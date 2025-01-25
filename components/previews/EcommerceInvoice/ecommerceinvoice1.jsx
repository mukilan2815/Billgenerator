import React from "react";
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });

export default function EcommerceInvoice1({ data }) {
  function formatDate(dateString) {
    if (dateString) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const parts = dateString.split("/");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      const date = new Date(year, month, day);
      return `${day} ${monthNames[month]} ${year}`;
    }
    return "";
  }

  const calculateTotal = () => {
    const productTotal = data.product_details.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    const taxAmount = (productTotal * data.tax) / 100;
    const total = productTotal + taxAmount + data.shipping_cost;
    return { productTotal, taxAmount, total };
  };

  const { productTotal, taxAmount, total } = calculateTotal();

  return (
    <div id="doc" className="w-[600px]">
      <div className={`${nunito_sans.className} container mt-5 p-2.5`}>
        <h1 className="text-center text-2xl font-bold mb-5">
          {data.company_name}
        </h1>
        <p className="text-center mb-5">E-commerce Invoice</p>
        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Customer Name:</h6>
            <p>{data.customer_name}</p>
            <h6 className="font-bold text-lg">Phone Number:</h6>
            <p>{data.phone_number}</p>
            <h6 className="font-bold text-lg">Shipping Address:</h6>
            <p>{data.shipping_address}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Invoice Number:</h6>
            <p>{data.invoice_number}</p>
            <h6 className="font-bold text-lg">Order Date:</h6>
            <p>{formatDate(data.order_date)}</p>
            <h6 className="font-bold text-lg">Delivery Date:</h6>
            <p>{formatDate(data.delivery_date)}</p>
          </div>
        </div>

        <div className="border-b-2 border-gray-400 mb-5">
          <h3 className="font-bold text-lg px-4 mb-2">Product Details:</h3>
          <div className="px-4">
            {data.product_details.map((product, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 mb-2">
                <p>{product.name}</p>
                <p>Qty: {product.quantity}</p>
                <p>Price: ₹{product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Product Total:</h6>
            <p>₹ {productTotal.toFixed(2)}</p>
            <h6 className="font-bold text-lg">Tax:</h6>
            <p>₹ {taxAmount.toFixed(2)}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Shipping Cost:</h6>
            <p>₹ {data.shipping_cost.toFixed(2)}</p>
            <h6 className="font-bold text-lg">Total Amount:</h6>
            <p>₹ {total.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-4">
          <h6 className="text-lg font-bold mb-2">Terms & Conditions</h6>
          <p className="text-sm">
            1. Orders are subject to availability and confirmation. <br />
            2. Returns and refunds are applicable as per our return policy.{" "}
            <br />
            3. Prices and availability of items are subject to change without
            notice. <br />
            4. For any queries, contact: {data.email || "support@ecommerce.com"}
            .
          </p>
        </div>
        <div className="mt-5 text-center">
          <p className="font-bold">
            Thank you for shopping with {data.company_name}!
          </p>
        </div>
      </div>
    </div>
  );
}
