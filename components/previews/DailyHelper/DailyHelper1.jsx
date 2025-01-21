import React from "react";
// import "@/public/css/template.css";
import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });
export default function DriverHelper1({ data }) {
  return (
    <div id="doc" className="  w-[516px]  relative  ">
      <div className={`${nunito_sans}  mt-5 container p-[50px] `}>
        <div data-v-7f947410="" className="flex flex-wrap">
          <div data-v-7f947410="" className="w-full  text-right">
            <h6 data-v-7f947410="" className=" mb-2  font-medium">
              Date: {data.salary_date}
            </h6>
          </div>
        </div>
        <div className=" flex flex-wrap">
          <div className=" w-full  text-center mb-2">
            <h6>
              <span className=" font-bold">Daily Helper Receipt</span>
            </h6>
          </div>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full  text-justify">
            <p className=" mb-4">
              {" "}
              This is to certify that Mr./Ms. <b>{data.employee_name}</b> have
              paid ₹ <b>{data.salary_amount}</b> to his/her Helper Mr/Ms{" "}
              <b> {data.helper_name}</b> who is Working as{" "}
              {data.helper_profession}. As got salary of the month of{" "}
              <b>{data.bill_month}</b> (Acknowledged receipt enclosed). I also
              declare that the Mr/Ms <b>{data.helper_name} </b> is exclusively
              utilized for official purpose only.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full  text-justify">
            <p className=" mb-4">
              Please reimburse the above amount. I further declare that what is
              stated above is correct and true.
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
        <div className="flex  justify-between">
          <div className="">
            <p>
              <span className="font-semibold w-full block"> Helper Name:</span>{" "}
              {data.helper_name}
            </p>
          </div>
          <div className=" text-right ">
            <p>
              <span className=" font-semibold w-full block">
                Employee Name:
              </span>{" "}
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
                alt="Revenue Logo"
                className=" w-[120px]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
