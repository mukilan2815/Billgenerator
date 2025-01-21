import React from "react";
// import "@/public/css/template.css";
import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });
export default function DriverSalary1({ data }) {
  return (
    <div id="doc" className="  w-[516px]   ">
      <div className={`${nunito_sans}  mt-5 container p-[50px] `}>
        <div className=" flex flex-wrap">
          <div className=" w-full  text-center mb-2">
            <h6>
              <span className=" font-bold">Driver Salary Receipt</span>
            </h6>
          </div>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full  text-justify">
            <p className=" mb-4">
              {" "}
              This is to certify that I have paid ₹<b>
                {data.salary_amount}
              </b>{" "}
              to driver, Mr. <b>{data.driver_name}</b> for the month of <b></b>{" "}
              (Acknowledged receipt enclosed). I also declare that the driver is
              exclusively utilized for official purpose only. Please reimburse
              the above amount. I further declare that what is stated above is
              correct and true.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <p className=" mb-4">
              <span className="font-semibold"> Employee Name:</span>{" "}
              {data.employee_name}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <p className=" mb-4">
              <span className="font-semibold"> Date:</span> {data.salary_date}
            </p>
          </div>
        </div>
        <div className=" border-b-2 border-black mb-5"></div>
        <div>
          <h6 className=" text-center  font-bold mb-2">
            Receipt Acknowledgement
          </h6>
        </div>
        <div className="flex flex-wrap displayBlock">
          <div className="w-full">
            <p className=" mb-4">
              <span className="font-semibold"> Date of Receipt:</span>{" "}
              {data.salary_date}
            </p>
            <p className=" mb-4">
              <span className="font-semibold">For the Month of:</span>{" "}
              {data.bill_month}
            </p>
            <p className=" mb-4">
              <span className="font-semibold">Name of Driver:</span>{" "}
              {data.driver_name}
            </p>
            <p className=" mb-4">
              <span className="font-semibold"> Vehicle No:</span>{" "}
              {data.vehical_number}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full">
            <p className=" content text-justify   mb-4">
              {" "}
              Received a sum of ₹ <b>{data.salary_amount}</b> only for the{" "}
              <b>{data.bill_month}</b> month from Mr / Mrs{" "}
              <b>{data.employee_name}</b> .{" "}
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
