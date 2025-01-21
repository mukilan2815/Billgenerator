import React from "react";
// import "@/public/css/template.css";
import { Press_Start_2P } from "next/font/google";
const press_start_2p = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export default function Fuel1({ data }) {
  return (
    <>
      <div
        id="doc"
        className="  border-slate-200 h-fit shadow-2xl shadow-zinc-200 w-fit "
      >
        <div
          className={`${press_start_2p.className} bg-[#f5f7f7] text-[#212529] text-[9.5px]  -tracking-[0.7px]    leading-[1.2]  w-[260px] h-full p-[5px] relative`}
        >
          <img
            src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/side-logo.png"
            alt="Bank Logo"
            className=" rotate-[270deg] w-[60%] -right-[70px] top-[100px] absolute  opacity-35  flex grayscale "
          />
          <img
            src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/side-logo.png"
            alt="Bank Logo"
            className=" rotate-[270deg] w-[60%] -right-[70px] top-[400px] absolute  opacity-35  flex grayscale "
          />{" "}
          <div className=" text-center py-4 grayscale">
            {data.logo_data.logo && (
              <img src={data.logo_data.logo} className=" w-20" />
            )}
          </div>
          <p className=" m-b-[5px] text-center leading-[1.35]">WELCOME!!!</p>
          <p className=" m-1">
            {" "}
            {data.fuel_station} {data.fuel_station_address}
          </p>
          <div className=" flex justify-between  -mb-[5px]  px-[5px] mt-0">
            <p className=" m-1">Tel. No.: {data.tel_no} </p>
          </div>
          <div className=" mb-[30px]">
            <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
              <p className=" m-1">Receipt No.: {data.invoice_number}</p>
            </div>
            <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
              <p className=" m-1">FCC ID: {data.fcc_id} </p>
            </div>
            <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
              <p className=" m-1">FIP No.: {data.fip_no}</p>
            </div>
            <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
              <p className=" m-1">Nozzle No.: {data.nozzle_no} </p>
            </div>
          </div>
          <div className=" mb-5">
            <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
              <p className=" m-1">PRODUCT: {data.vehicle_type}</p>
            </div>
            <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
              <p className=" m-1">RATE/LTR: ₹ {data.fuel_rate}</p>
            </div>
            <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
              <p className=" m-1">AMOUNT: ₹ {data.total_amount}</p>
            </div>
            <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
              <p className=" m-1">
                VOLUME(LTR.): {(data.total_amount / data.fuel_rate).toFixed(2)}{" "}
                lt
              </p>
            </div>
          </div>
          <div className="  mb-[30px]">
            <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
              <p className=" m-1">VEH TYPE: {data.vehicle_type}</p>
            </div>
            <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
              <p className=" m-1">VEH NO: {data.vehicle_number}</p>
            </div>
            <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
              <p className=" m-1">CUSTOMER NAME: {data.customer_name}</p>
            </div>
          </div>
          <div className="flex justify-between gap-5  -mb-[5px]  px-[5px] mt-0">
            <p className=" m-1">Date: {data?.bill_date}</p>
            <p> Time: {data.bill_time}</p>
          </div>
          <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
            <p className=" m-1">MODE: {data.payment_type}</p>
          </div>
          {data.taxIdentifier !== "" ? (
            <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
              {data.taxIdentifier + ": " + data.taxIdentifier_value}
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
            <p className=" m-1">LST No.: </p>
          </div>
          <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
            <p className=" m-1">VAT No.: </p>
          </div>
          <div className="flex justify-between  -mb-[5px]  px-[5px] mt-0">
            <p className=" m-1">ATTENDENT ID: Not Available</p>
          </div>
          <p className=" mt-[60px] text-center leading-[1.5] mb-4">
            SAVE FUEL YAANI SAVE MONEY !! THANKS FOR FUELLING WITH US. YOU CAN
            NOW CALL US ON {data.tel_no} (TOLL-FREE) FOR QUERIES/COMPLAINTS.
          </p>
        </div>
      </div>
    </>
  );
}
