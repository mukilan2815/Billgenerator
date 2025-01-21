import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });
export default function MadicalBill1({ data }) {
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
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold">{data.hospital_name}</h1>
            <p className="text-lg">Invoice No: {data.invoice_number}</p>
          </div>
          {/* <HospitalIcon className="h-16 w-16 text-red-500" /> */}
        </div>
        <div className="border-t border-gray-300 my-4" />
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="font-bold">Hospital details:</h2>
            <p>{data.hospital_details}</p>
            <p>Contact Details: {data.hospital_contact_no}</p>
            <p>Registration No: {data.hospital_reg_no}</p>
            <p>Discharge Date: {data.discharge_date}</p>
          </div>
          <div className="text-right">
            <h2 className="font-bold">{data.hospital_name}</h2>
            <p>{data.hospital_address}</p>
          </div>
        </div>
        <h2 className="text-xl font-bold mt-6 mb-4">Patient Information</h2>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <p>
              <strong>Patient Name:</strong>
              <br /> {data.patient_name}
            </p>
            <p>
              <strong>Guardian Name:</strong>
              <br /> {data.guardian_name}
            </p>
            <p>
              <strong>Insurance Avl:</strong>
              <br /> {data.insurance}
            </p>
            <p>
              <strong>Consultant:</strong> <br />
              {data.doctor_name} {data.doctor_designation}
            </p>
          </div>
          <div>
            <p>
              <strong>Patient Issue:</strong>
              <br /> {data.patient_issue}
            </p>
            <p>
              <strong>Admit Date:</strong>
              <br /> {data.admit_date}
            </p>
            <p>
              <strong>Mobile:</strong> <br />
              {data.mobile_no}
            </p>
            <p>
              <strong>Room Category:</strong>
              <br /> {data.room_type}
            </p>
          </div>
          <div>
            <p>
              <strong>Address:</strong>
              <br /> {data.patient_address}
            </p>
            <p>
              <strong>Age:</strong>
              <br /> {data.patient_age}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Details</TableHead>
                {/* <TableHead>Quantity</TableHead> */}
                <TableHead>Price</TableHead>
                <TableHead className=" text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.items.map((item, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      {item.name} <br /> {item.description}
                    </TableCell>
                    {/* <TableCell>{item.qty}</TableCell> */}
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
        <div className="grid grid-cols-2 gap-8 mt-6">
          <div>
            <p>
              <strong>Pay By</strong>
            </p>
            <p>{data.payment_mode}</p>
            <p>
              <strong>Amount:</strong> ₹ ₹{" "}
              {calculateTotalPrice(data.items).toFixed(2)}
            </p>
          </div>
          <div className="text-right">
            <p>
              <strong>Tax:</strong> {data.bill_tax} %
            </p>
            <p>
              CGST: {data.bill_tax / 2} % = ₹{" "}
              {(
                (calculateTotalPrice(data.items) * data.bill_tax) /
                2 /
                100
              ).toFixed(2)}
            </p>
            <p>
              SGST: {data.bill_tax / 2} % = ₹{" "}
              {(
                (calculateTotalPrice(data.items) * data.bill_tax) /
                2 /
                100
              ).toFixed(2)}
            </p>
            <p>
              <strong>Taxable Amount:</strong> ₹{" "}
              {(
                (calculateTotalPrice(data.items) * data.bill_tax) /
                100
              ).toFixed(2)}
            </p>
            <p>
              <strong>Total Amount:</strong> ₹ {calculateTotalPrice(data.items)}
            </p>
          </div>
        </div>
        <p className="mt-6">
          <strong>Remark:</strong>
        </p>
        <p>
          IN CASE OF EMERGENCY CONSULT IMMEDIATELY IF YOU GET PAIN, PAINFUL
          MOVEMENTS, REDNESS, PUS OR BLEEDING. FOLLOW UP AFTER 5 DAYS. MEET
          DDDNNNN, hhdetails
        </p>
        <div className="text-right mt-6">
          <p>* This is computer generated invoice signature not required</p>
          <p>
            created at {data.discharge_date} at {data.bill_time}
          </p>
        </div>
      </div>
    </div>
  );
}
