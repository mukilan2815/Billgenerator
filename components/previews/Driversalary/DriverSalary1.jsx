import React from "react";
// import "@/public/css/template.css";
import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });
export default function DriverSalary1({ data }) {
  return (
    <div id="doc" className="  w-[516px]   ">
      <div className={`${nunito_sans}  mt-5 container p-[50px] `}>
        <div className="flex flex-wrap">
          <div className="w-full  text-right">
            <h6 className=" mb-2  font-medium">Date: {data.salary_date}</h6>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full text-center">
            <h6 className=" mb-2">
              <span className="font-bold ">Driver Salary Receipt</span>
            </h6>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full  text-justify">
            <p className=" mb-4">
              {" "}
              This is to certify that Mr./Ms. <b>{data.employee_name}</b> have
              paid ₹ <b>{data.salary_amount}</b> to driver Mr/Ms{" "}
              <b> {data.driver_name}</b> towards salary of the month of{" "}
              <b>{data.bill_month}</b> (Acknowledged receipt enclosed). I also
              declare that the driver is exclusively utilized for official
              purpose only.{" "}
            </p>
            <p className=" mb-4">
              {" "}
              Please reimburse the above amount. I further declare that what is
              stated above is correct and true.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full  relative">
            <p className=" mb-4">
              <span className="font-semibold"> Vehicle Number:</span>{" "}
              {data.vehical_number}
            </p>
          </div>
          <div className="w-full  relative text-right">
            <p className=" mb-4">
              <span className="font-semibold"> Date:</span> {data.salary_date}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full  relative">
            <p className=" mb-4">
              <span className="font-semibold"> Driver Name:</span>{" "}
              {data.driver_name}
            </p>
          </div>
          <div className="w-full  relative text-right">
            <p className=" mb-4">
              <span className="font-semibold">Employee Name:</span>{" "}
              {data.employee_name}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="">
            <h6 className=" font-semibold mb-2"> Revenue Stamp</h6>
            <img
              src="/images/revenu-stamp.jpeg"
              alt="Revenue Logo"
              className=" w-[60px]"
            />
          </div>
          {data.signature && (
            <div className="">
              <h6 className=" font-semibold mb-2"> Signature</h6>
              <img
                src={data.signature}
                alt="Signature"
                className=" w-[120px]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
