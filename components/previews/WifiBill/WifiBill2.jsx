import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function CustomInvoice({ data }) {
  const taxableAmount = (data?.total_plan_amount / 1.18).toFixed(2);
  const cgstAmount = (taxableAmount * 0.09).toFixed(2);
  const sgstAmount = (taxableAmount * 0.09).toFixed(2);

  return (
    <div id="doc" className="w-[600px]">
      <div className="flex flex-col w-[210mm] mx-auto my-0 p-10 scale-child">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-xl font-semibold">
              Hello, {data?.customer_name},
            </h1>
            <p className="text-gray-700">{data?.customer_address}</p>
          </div>

          <div className="text-right mb-4">
            <p className="font-semibold">Invoice No: {data?.invoice_number}</p>
            <p>Date: {data?.billing_date}</p>
            <p>Billing Cycle: {data?.tariff_plan}</p>
          </div>
        </div>
        <div className="flex items-center mb-8">
          <div className="flex items-center mr-8 flex-shrink-0">
            {data?.invoice_logo ? (
              <img
                src={data?.invoice_logo}
                alt="Company Logo"
                className="w-20 h-auto"
              />
            ) : (
              <img
                src="/images/logo-placeholder.png"
                alt="Company Logo"
                className="w-20 h-auto"
              />
            )}
            <div className="ml-4">
              <p className="font-semibold text-lg">{data?.provider_name}</p>
              <p>{data?.provider_address}</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 p-4">
              <p className="font-semibold">Invoice Total:</p>
              <p className="text-xl font-bold">₹ {data?.total_plan_amount}</p>
            </div>
          </div>
          <div className="flex-1 ml-8">
            <p className="font-semibold">Payment Method:</p>
            <p>{data?.payment_method}</p>
            <p className="font-semibold mt-2">Bill Account Number:</p>
            <p>{data?.bill_account_number}</p>
          </div>
        </div>
        <div className="mb-8">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice Amount</TableHead>
                <TableHead>CGST Rate%</TableHead>
                <TableHead>CGST Amount</TableHead>
                <TableHead>SGST Rate%</TableHead>
                <TableHead>SGST Amount</TableHead>
                <TableHead>Payments Received</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">₹ {taxableAmount}</TableCell>
                <TableCell>9%</TableCell>
                <TableCell>₹ {cgstAmount}</TableCell>
                <TableCell>9%</TableCell>
                <TableCell>₹ {sgstAmount}</TableCell>
                <TableCell>₹ {data?.total_plan_amount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Service Plan Summary</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Plan Speed</TableHead>
                <TableHead>Plan Package</TableHead>
                <TableHead>Plan Validity</TableHead>
                <TableHead>Plan Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{data?.tariff_plan_speed}</TableCell>
                <TableCell>{data?.tariff_plan_package}</TableCell>
                <TableCell>{data?.tariff_plan}</TableCell>
                <TableCell>₹ {data?.total_plan_amount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p className="text-center mb-8">
          Our mailing address is: supplier.portal@company.com
        </p>
        <div className="bg-[#FDBA74] p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
          <ul className="list-disc pl-4">
            <li>Cheques to be in favour of "{data?.provider_name}".</li>
            <li>
              In case of cheque bounce, a ₹ 100/- penalty will be applicable.
            </li>
            <li>
              {data?.provider_name} shall levy late fee charge in case the bill
              is paid after the due date.
            </li>
            <li>
              In case of overdue, the right to deactivate your services is
              reserved.
            </li>
            <li>
              This invoice is system generated hence signature and stamp is not
              required.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
