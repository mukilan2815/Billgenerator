import React from "react";
// import "@/public/css/template.css";
import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });
export default function Fuel1({ data }) {
  return (
    <div id="doc" className=" min-w-[310px]     ">
      <div
        className={`${nunito_sans} font-semibold ml-2 text-black text-[14px] tracking-[1.3px] leading-[1.2]`}
      >
        <div className=" w-[310px]  p-[5px] relative">
          <div className=" text-center py-4 ">
            {data.logo_data.logo && (
              <img src={data.logo_data.logo} className=" w-20" />
            )}
          </div>
          <p className=" text-center leading-4 mb-0.5">{data.fuel_station}</p>{" "}
          <p className="text-center leading-4 mb-0.5">
            {" "}
            {data.fuel_station_address}
          </p>
          <p className="text-center leading-4 mb-0.5"> </p>
          <p className=" text-center  mb-[5px] leading-4"> ORIGINAL</p>
          <div className="flex justify-between mt-0 -mb-[5px] px-[5px] h-8">
            <p className=" m-1">{data.bill_date}</p>
            <p> {data.bill_time}</p>
          </div>
          {data.taxIdentifier !== "" ? (
            <div className=" flex flex-wrap -mx[15px]">
              <div className=" flex-auto w-1/2">{data.taxIdentifier + ":"}</div>
              <div className="flex-auto w-1/2">{data.taxIdentifier_value}</div>
            </div>
          ) : (
            ""
          )}
          <div className=" flex flex-wrap -mx[15px]">
            <div className=" flex-auto w-1/2">INVOICE NO:</div>
            <div className="flex-auto w-1/2">{data.invoice_number}</div>
          </div>
          <div className="flex flex-wrap -mx[15px]">
            <div className="flex-auto w-1/2">VEHICLE NO:</div>
            <div className="flex-auto w-1/2"> {data.vehicle_number}</div>
          </div>
          <div className="flex flex-wrap -mx[15px]">
            <div className="flex-auto w-1/2">NOZZLE NO:</div>
            <div className="flex-auto w-1/2">2</div>
          </div>
          <div className="flex flex-wrap -mx[15px]">
            <div className="flex-auto w-1/2">PRODUCT:</div>
            <div className="flex-auto w-1/2">{data.vehicle_type}</div>
          </div>
          <div className="flex flex-wrap -mx[15px]">
            <div className="flex-auto w-1/2">DENSITY:</div>
            <div className="flex-auto  w-1/4"></div>
            <div className="flex-auto  w-1/4">Kg/m3</div>
          </div>
          <div className="flex flex-wrap -mx[15px]">
            <div className="flex-auto w-1/2">RATE:</div>
            <div className="flex-auto  w-1/4">{data.fuel_rate}</div>
            <div className="flex-auto  w-1/4">INR/Ltr</div>
          </div>
          <div className="flex flex-wrap -mx[15px]">
            <div className="flex-auto w-1/2">VOLUME:</div>
            <div className="flex-auto  w-1/4">
              {(data.total_amount / data.fuel_rate).toFixed(2)}
            </div>
            <div className="flex-auto  w-1/4">Ltr</div>
          </div>
          <div className="flex flex-wrap -mx[15px]">
            <div className="flex-auto w-1/2">AMOUNT:</div>
            <div className="flex-auto  w-1/4">{data.total_amount}</div>
            <div className=" flex-auto  w-1/4">INR</div>
          </div>
          <p className=" mt-5 text-center leading-6">Thank you Visit Again</p>
        </div>
      </div>
    </div>
  );
}
