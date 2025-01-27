import React from "react";
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });

export default function BookReceiptPreview({ data }) {
  function formatDate(dateString) {
    if (dateString) {
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const parts = dateString.split("-");
      const day = Number.parseInt(parts[0], 10);
      const month = Number.parseInt(parts[1], 10) - 1;
      const year = Number.parseInt(parts[2], 10);
      if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
        return `${day} ${monthNames[month]} ${year}`;
      }
    }
    return dateString || "";
  }

  const calculateTotal = () => {
    return (
      (Number.parseFloat(data.quantity) || 0) *
      (Number.parseFloat(data.book_price) || 0)
    );
  };

  const Template1 = () => (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">Book Receipt</h1>

      <div className="mb-6">
        <h2 className="font-bold mb-2">Bill To,</h2>
        <p>Customer Name: {data.customer_name}</p>
        <p>Book Name: {data.book_name}</p>
        <p>Book Publisher: {data.publisher}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2">Receipt Details</h2>
        <p>Receipt No: {data.receipt_no}</p>
        <p>Receipt Date: {formatDate(data.date)}</p>
        <p>Payment Method: {data.payment_method}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2">Receipt Summary</h2>
        <table className="w-full mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Item</th>
              <th className="text-left py-2">Description</th>
              <th className="text-right py-2">Qty</th>
              <th className="text-right py-2">Price</th>
              <th className="text-right py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">{data.book_name}</td>
              <td className="py-2">{data.description}</td>
              <td className="text-right py-2">{data.quantity}</td>
              <td className="text-right py-2">₹{data.book_price}</td>
              <td className="text-right py-2">₹{calculateTotal()}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t font-bold">
              <td colSpan="4" className="text-right py-2">
                Total:
              </td>
              <td className="text-right py-2">₹{calculateTotal()}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="text-center space-y-4">
        <p className="font-bold">Thank You! Visit Again</p>
        <p className="text-sm italic">
          "A room without books is like a body without a soul"
        </p>
        <p className="text-sm italic">
          "Take a good book to bed with you books do not snore"
        </p>
      </div>
    </>
  );

  const Template2 = () => (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">Book Receipt</h1>

      <div className="mb-6">
        <p>Receipt No: {data.receipt_no}</p>
        <p>Receipt Date: {formatDate(data.date)}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2">Bill To,</h2>
        <p>Customer Name: {data.customer_name}</p>
        <p>Book Name: {data.book_name}</p>
        <p>Author: {data.book_author}</p>
        <p>Book Publisher: {data.publisher}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2">Sold By,</h2>
        <p>Store Name: {data.book_store_name}</p>
        <p>Store Address: {data.store_address}</p>
        <p>Payment Method: {data.payment_method}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-bold mb-2">Receipt Summary</h2>
        <table className="w-full mb-4">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Item</th>
              <th className="text-left py-2">Description</th>
              <th className="text-right py-2">Qty</th>
              <th className="text-right py-2">Price</th>
              <th className="text-right py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">{data.book_name}</td>
              <td className="py-2">{data.description}</td>
              <td className="text-right py-2">{data.quantity}</td>
              <td className="text-right py-2">₹{data.book_price}</td>
              <td className="text-right py-2">₹{calculateTotal()}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="border-t font-bold">
              <td colSpan="4" className="text-right py-2">
                Total:
              </td>
              <td className="text-right py-2">₹{calculateTotal()}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="text-center space-y-4">
        <p className="font-bold">Thank You! Visit Again</p>
        <p className="text-sm italic">
          "Books are the quietest and most constant of friends; they are the
          most accessible and wisest of counselors, and the most patient of
          teachers"
        </p>
        <p className="text-sm italic">
          "Books are good company, in sad times and happy times, for books are
          people – people who have managed to stay alive by hiding between the
          covers of a book."
        </p>
      </div>
    </>
  );

  return (
    <div
      id="doc"
      className="w-full max-w-[800px] bg-white mx-auto p-6 border rounded-lg shadow-lg"
    >
      <div className={`${nunito_sans.className}`}>
        {data.template === "Template 1" ? <Template1 /> : <Template2 />}
      </div>
    </div>
  );
}
