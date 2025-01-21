import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function WifiBill1({ data }) {
  const taxableAmount = (data?.total_plan_amount / 1.18).toFixed(2);
  const cgstAmount = (taxableAmount * 0.09).toFixed(2);
  const sgstAmount = (taxableAmount * 0.09).toFixed(2);

  return (
    <div id="doc" className="w-[600px]">
      <div className="flex flex-col w-[210mm] mx-auto my-0 p-10 scale-child">
        <div className="flex justify-between items-center mb-6">
          {data?.invoice_logo ? (
            <img src={data?.invoice_logo} alt="Logo" className="w-40 mb-4" />
          ) : (
            <img
              src="/images/logo-placeholder.png"
              alt="Logo"
              className="w-40 mb-4"
            />
          )}
          <div className="text-right">
            <div className="font-bold text-lg">Receipt for the Recipient</div>
          </div>
        </div>
        <div className="flex justify-between items-start mb-6">
          <div className="text-sm">
            <div className="font-bold">{data?.provider_name}</div>
            <div>{data?.provider_address}</div>
          </div>
          <div className="text-sm">
            <div>
              <span className="font-bold">Name:</span> {data?.customer_name}
            </div>
            <div>{data?.customer_address}</div>
            <div>
              <span className="font-bold">Account No:</span>{" "}
              {data?.bill_account_number}
            </div>
          </div>
          <div className="text-sm">
            <div>
              <span className="font-bold">Invoice No:</span>{" "}
              {data?.invoice_number}
            </div>
            <div>
              <span className="font-bold">Bill Date:</span> {data?.billing_date}
            </div>
          </div>
        </div>
        <div className="mb-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-sm bg-gray-200">
                  Taxable Amount ₹
                </TableHead>
                <TableHead className="text-sm bg-gray-200">
                  CGST Rate%
                </TableHead>
                <TableHead className="text-sm bg-gray-200">
                  CGST Amount ₹
                </TableHead>
                <TableHead className="text-sm bg-gray-200">
                  SGST Rate%
                </TableHead>
                <TableHead className="text-sm bg-gray-200">
                  SGST Amount ₹
                </TableHead>
                <TableHead className="text-sm bg-gray-200">
                  Payments Received ₹
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{taxableAmount}</TableCell>
                <TableCell>9%</TableCell>
                <TableCell>{cgstAmount}</TableCell>
                <TableCell>9%</TableCell>
                <TableCell>{sgstAmount}</TableCell>
                <TableCell>{data?.total_plan_amount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="bg-orange-500 text-white text-sm p-2">
            <div className="font-bold">Service Plan Summary</div>
            <div>
              Account No: {data?.bill_account_number} User Name:{" "}
              {data?.customer_name}
            </div>
          </div>
          <div className="bg-orange-500 text-white text-sm p-2">
            <div className="font-bold">Receipt Details</div>
            <div>
              Account No: {data?.bill_account_number} User Name:{" "}
              {data?.customer_name}
            </div>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm">Plan Speed</TableHead>
              <TableHead className="text-sm">Plan Package</TableHead>
              <TableHead className="text-sm">Plan Validity</TableHead>
              <TableHead className="text-sm">Discount</TableHead>
              <TableHead className="text-sm">Plan Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{data?.tariff_plan_speed}</TableCell>
              <TableCell>{data?.tariff_plan_package}</TableCell>
              <TableCell>{data?.tariff_plan}</TableCell>
              <TableCell>0</TableCell>
              <TableCell>₹ {data?.total_plan_amount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm">Invoice No.</TableHead>
              <TableHead className="text-sm">
                Internet Service Description
              </TableHead>
              <TableHead className="text-sm">Amount Incl. Tax</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{data?.invoice_number}</TableCell>
              <TableCell>{data?.description}</TableCell>
              <TableCell>₹ {data?.total_plan_amount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="mb-6 text-sm">
          <div className="font-bold">
            Registered office address: {data?.provider_address}.
          </div>
        </div>
        <div className="mb-6 bg-orange-500 text-white p-4">
          <div className="font-bold text-lg mb-2">Terms and Conditions</div>
          <ul className="list-disc pl-5">
            <li>Cheques to be in favour of "{data?.provider_name}".</li>
            <li>
              In case of cheque bounce, ₹ 100/- penalty will be applicable.
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
              This Invoice is system generated hence signature and stamp are not
              required.
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 bg-orange-500 text-white p-4 text-sm">
          <div className="font-bold mb-2">Acknowledgement Slip</div>
          <div>
            <div>Account No: {data?.bill_account_number}</div>
            <div>Subscriber Name: {data?.customer_name}</div>
            <div>Payment Method: {data?.payment_method}</div>
            <div>Invoice No: {data?.invoice_number}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
