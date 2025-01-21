import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });
export default function GeneralBill1({ data }) {
  const renderTextWithNewLines = (text) => {
    if (text) {
      return text.split("\n").map((str, index) => (
        <React.Fragment key={index}>
          {str}
          <br />
        </React.Fragment>
      ));
    }
  };
  function calculateTotalPrice(data) {
    let totalPrice = 0;
    if (data.length > 0) {
      data.forEach((obj) => {
        if (obj?.hasOwnProperty("price")) {
          totalPrice += obj.price * obj.qty;
        }
      });
    }
    return totalPrice;
  }
  return (
    <div id="doc" className="   w-[600px]">
      <div className="flex flex-col w-[210mm]  mx-auto my-0 p-10  scale-child">
        <div className="flex justify-between mb-6">
          <div className="flex flex-col">
            {data.invoice_logo ? (
              <img src={data.invoice_logo} alt="Logo" className=" w-40 mb-4" />
            ) : (
              <img
                src="/images/logo-placeholder.png"
                alt="Logo"
                className=" w-40 mb-4"
              />
            )}
            {data.invoice_from_name ? (
              <div>
                <p className="font-bold">{data.invoice_from_name}</p>
                <p className="">
                  {renderTextWithNewLines(data.invoice_from_address)}
                </p>{" "}
                <p className="">
                  {data.biller_gst && `GST No: ${data.biller_gst}`}
                </p>
              </div>
            ) : (
              <div className=" space-y-2">
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            )}
          </div>
          <div className="text-right">
            <h1 className="text-3xl font-bold">INVOICE</h1>

            <p className="mt-0 mb-1 text-zinc-500 font-medium">
              # {data.invoice_number}
            </p>
            <p className="mt-4 mb-1">Date: {data.invoice_date}</p>
            <p className="mb-1">
              {data.invoice_due_date && `Due Date: ${data.invoice_due_date}`}
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          {data.bill_to_name ? (
            <div>
              <h3 className=" text-zinc-500 font-medium">Billed To:</h3>
              <p className="font-bold">{data.bill_to_name}</p>
              <p className="">
                {renderTextWithNewLines(data.bill_to_address)}
              </p>{" "}
              <p className="">
                {data.customer_gst && `GST No: ${data.customer_gst} `}
              </p>
            </div>
          ) : (
            <div className=" space-y-2">
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[150px]" />
            </div>
          )}
          <div></div>
          <div className="flex items-center justify-center bg-gray-200 px-6 py-4">
            <div className="text-center">
              <h4 className="font-bold">Balance Due:</h4>
              <p className="text-lg">
                ₹
                {(
                  calculateTotalPrice(data.items) +
                  (calculateTotalPrice(data.items) * data.invoice_tax) / 100 -
                  data.paid_amount
                ).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Item</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead className=" text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.items.map((item, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.qty}</TableCell>
                    <TableCell>₹{item.price}</TableCell>
                    <TableCell className=" text-right">
                      ₹{item.price * item.qty}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-end space-x-4 mb-6">
          <div className="text-right">
            <p className="mb-1">
              Subtotal: ₹ {calculateTotalPrice(data.items).toFixed(2)}
            </p>
            <p className="mb-1">
              Tax ({data.invoice_tax}%): ₹
              {(calculateTotalPrice(data.items).toFixed(2) * data.invoice_tax) /
                100}
            </p>
            <p className="mb-1 font-bold">
              Total: ₹
              {calculateTotalPrice(data.items) +
                (calculateTotalPrice(data.items) * data.invoice_tax) / 100}
            </p>
            <p>Amount Paid: ₹{data.paid_amount}</p>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div>
            {data.invoice_notes && (
              <>
                <h4 className="font-bold">Notes:</h4>
                <p>{data.invoice_notes}</p>
              </>
            )}
          </div>
          <div>
            {data.invoice_terms && (
              <>
                <h4 className="font-bold">Terms:</h4>
                <p>{data.invoice_terms}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
