"use client";
import { useState } from "react";
import BillContainer from "../BillContainer";
import RadioSelect from "../../forms/RadioSelect";
import TextInput from "../../forms/TextInput";
import DateSelect from "../../forms/DateSelect";
import ListSelect from "../../forms/ListSelect";
import BillEditContainer from "../BillEditContainer";
import BookReceiptPreview from "../../previews/BookInvoice/BookInvoice1";

export default function BookInvoice({ data, session }) {
  const [finalData, setFinalData] = useState({
    template: "Template 1",
    template_data: {
      title: "Template 1",
      creditRequired: 1,
    },
    // Template 1 fields
    book_name: "",
    publisher: "",
    description: "",
    quantity: "",
    book_price: "",
    customer_name: "",
    payment_method: "Select One",
    date: "27-01-2025",
    receipt_no: "R48625",
    // Additional Template 2 fields
    book_author: "",
    book_store_name: "",
    store_address: "",
    terms_accepted: false,
  });

  return (
    <BillContainer>
      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-6 max-h-[calc(100vh-2rem)] overflow-y-auto pr-4">
          <BillEditContainer finalData={finalData} session={session}>
            <h1 className="text-2xl font-bold mb-6">Book Invoice</h1>

            <RadioSelect
              title="Select Template"
              data={{
                heading: "Select Template",
                data: [
                  { title: "Template 1", creditRequired: 1 },
                  { title: "Template 2", creditRequired: 1 },
                ],
              }}
              name="template"
              finalData={finalData}
              setFinalData={setFinalData}
            />

            <h2 className="text-xl font-semibold mb-4">Book Receipt Details</h2>

            {finalData.template === "Template 2" && (
              <>
                <TextInput
                  title="Book Author"
                  placeholder="Enter Author Name"
                  required={true}
                  finalData={finalData}
                  setFinalData={setFinalData}
                  name="book_author"
                />
                <TextInput
                  title="Book Store Name"
                  placeholder="Enter Book Store Name"
                  required={true}
                  finalData={finalData}
                  setFinalData={setFinalData}
                  name="book_store_name"
                />
                <TextInput
                  title="Store Address"
                  placeholder="Store Address"
                  required={true}
                  finalData={finalData}
                  setFinalData={setFinalData}
                  name="store_address"
                />
              </>
            )}

            <TextInput
              title="Name Of Book"
              placeholder="Enter the Book name"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="book_name"
            />

            <TextInput
              title="Publisher"
              placeholder="Publisher"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="publisher"
            />

            <TextInput
              title="Description"
              placeholder="Enter something about Book..."
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="description"
            />

            <TextInput
              title="Quantity"
              placeholder="Number of Books"
              required={true}
              type="number"
              finalData={finalData}
              setFinalData={setFinalData}
              name="quantity"
            />

            <TextInput
              title="Book Price"
              placeholder="Price of Book"
              required={true}
              type="number"
              finalData={finalData}
              setFinalData={setFinalData}
              name="book_price"
            />

            <TextInput
              title="Customer Name"
              placeholder="Enter Customer Name"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="customer_name"
            />

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

            <DateSelect
              title="Choose Date"
              finalData={finalData}
              setFinalData={setFinalData}
              name="date"
            />

            <TextInput
              title="Receipt No"
              placeholder="R48625"
              required={true}
              finalData={finalData}
              setFinalData={setFinalData}
              name="receipt_no"
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
          <BookReceiptPreview data={finalData} />
        </div>
      </div>
    </BillContainer>
  );
}
