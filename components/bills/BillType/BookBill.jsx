"use client";
import { useEffect, useState } from "react";
import React from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import SignatureUpload from "../../forms/SignatureUpload";
import BookInvoice1 from "../../previews/BookInvoice/BookInvoice1.jsx"; // Corrected file extension
import DateSelect from "../../forms/DateSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BillViewContainer from "../BillViewContainer";
import AddItem from "../../forms/AddItem";

export default function BookBill({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: data.templates.data[0].title,
    template_data: data.templates.data[0],
    invoice_number: 1001, // Default invoice number
    book_details: [{ title: "", author: "", quantity: 1, price: 0 }],
    customer_name: "",
    customer_email: session?.user?.email || "",
    customer_phone: "",
    total_amount: 0,
    tax: 0,
  });

  useEffect(() => {
    // Recalculate total amount whenever book details change
    const total = finalData.book_details.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setFinalData((prev) => ({ ...prev, total_amount: total }));
  }, [finalData.book_details]);

  const updateBookDetails = (index, key, value) => {
    const updatedDetails = [...finalData.book_details];
    updatedDetails[index][key] = value;
    setFinalData({ ...finalData, book_details: updatedDetails });
  };

  const addBook = () => {
    setFinalData((prev) => ({
      ...prev,
      book_details: [
        ...prev.book_details,
        { title: "", author: "", quantity: 1, price: 0 },
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
          <h2 className="my-3">Customer Details</h2>
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
          <h3>Book Details</h3>
          {finalData.book_details.map((book, index) => (
            <div key={index} className="grid grid-cols-3 gap-x-5">
              <TextInput
                title={`Book Title ${index + 1}`}
                placeholder="Enter book title..."
                finalData={finalData}
                onChange={(event) =>
                  updateBookDetails(index, "title", event.target.value)
                }
                name={`book_title_${index}`}
                value={book.title}
              />
              <TextInput
                title="Author"
                placeholder="Enter author name..."
                finalData={finalData}
                onChange={(event) =>
                  updateBookDetails(index, "author", event.target.value)
                }
                name={`book_author_${index}`}
                value={book.author}
              />
              <TextInput
                title="Quantity"
                type="number"
                placeholder="Enter quantity..."
                finalData={finalData}
                onChange={(event) =>
                  updateBookDetails(
                    index,
                    "quantity",
                    parseInt(event.target.value, 10)
                  )
                }
                name={`book_quantity_${index}`}
                value={book.quantity}
              />
              <TextInput
                title="Price"
                type="number"
                placeholder="Enter price..."
                finalData={finalData}
                onChange={(event) =>
                  updateBookDetails(
                    index,
                    "price",
                    parseFloat(event.target.value)
                  )
                }
                name={`book_price_${index}`}
                value={book.price}
              />
            </div>
          ))}
          <button
            type="button"
            className="mt-2 text-blue-600"
            onClick={addBook}
          >
            Add Book
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
          </div>
          <SignatureUpload
            title="Company Logo URL"
            placeholder="Enter valid logo image URL..."
            name="logo_url"
            finalData={finalData}
            setFinalData={setFinalData}
          />
        </BillEditContainer>
        <BillViewContainer>
          <BookInvoice1 data={finalData} />
        </BillViewContainer>
      </div>
    </BillContainer>
  );
}
