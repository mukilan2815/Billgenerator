import React from "react";
// import "@/public/css/template.css";
import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });
export default function DailyHelper2({ data }) {
  return (
    <div id="doc" className="  w-[516px]   ">
      <div data-v-7f5c160c="" className={`${nunito_sans}  container p-[50px] `}>
        <div className="flex flex-wrap">
          <div className="w-full  text-right">
            <h6 className=" mb-2  font-medium">Date: {data.salary_date}</h6>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full text-center">
            <h6 className=" mb-2">
              <span className="font-bold ">Daily Helper Receipt</span>
            </h6>
          </div>
        </div>
        <div className=" block">
          <p className=" mb-4">
            <span className="font-semibold">Working As :</span>{" "}
            {data.helper_profession}
          </p>
          <p className=" mb-4">
            <span className="font-semibold">Salary of the Month:</span>{" "}
            {data.bill_month}
          </p>
          <p className=" mb-4">
            <span className="font-semibold"> Amount Paid: </span>₹{" "}
            {data.salary_amount}
          </p>
          <p className=" mb-4">
            <span className="font-semibold"> Date:</span> {data.salary_date}
          </p>
        </div>
        <div className="row">
          <p data-v-1cef72bc="" className=" mb-4">
            Received From Mr./Ms. <b data-v-1cef72bc="">{data.employee_name}</b>{" "}
            ₹{data.salary_amount} to his/her Mr./Ms.{" "}
            <b data-v-1cef72bc="">{data.helper_name}</b> towards salary of the
            month of {data.bill_month}
          </p>
        </div>
        <div className="row">
          <div className="w-full">
            <h6 className="text-right">
              <span className="font-semibold">Employee Name:</span>{" "}
              {data.employee_name}
            </h6>
          </div>
        </div>
        <div>
          <h6 className=" text-center mt-5 mb-2 font-bold">
            Receipt Acknowledgement
          </h6>
        </div>
        <div className="row displayBlock">
          <p className=" mb-4">
            <span className="font-semibold">Salary of the Month:</span>{" "}
            {data.bill_month}
          </p>
          <p className=" mb-4">
            <span className="font-semibold"> Amount Paid:</span> ₹{" "}
            {data.salary_amount}
          </p>
          <p className=" mb-4">
            <span className="font-semibold"> Date:</span> {data.salary_date}
          </p>
        </div>
        <div className="row">
          <p data-v-1cef72bc="" className=" mb-4">
            Received From Mr./Ms. <b data-v-1cef72bc="">{data.employee_name}</b>{" "}
            ₹{data.salary_amount} to his/her Mr./Ms.{" "}
            <b data-v-1cef72bc="">{data.helper_name}</b> towards salary of the
            month of {data.bill_month}
          </p>
        </div>
        <div className="row">
          <div className="w-full">
            <h6 className="text-right">
              <span className="font-semibold">Helper Name:</span>{" "}
              {data.helper_name}
            </h6>
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
