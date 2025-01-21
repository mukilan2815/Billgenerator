import React from "react";
// import "@/public/css/template.css";

export default function Fuel1({ data }) {
  return (
    <div id="doc" className=" min-w-[580px]   container p-[50px!important] ">
      <div className=" flex flex-wrap -mx-[15px]  border-b px-[15px] ">
        <h3
          className="  text-[1.75rem]  leading-5  font-medium"
          style={{ marginBottom: 8 + "px" }}
        >
          Fuel Receipt
        </h3>
      </div>
      <div className="flex  justify-between -mx-[15px]">
        <div className=" px-[15px]  font-bold  mt-2.5">
          {data.logo_data.logo && (
            <img src={data.logo_data.logo} className=" w-20" />
          )}
        </div>
        <div className=" px-[15px] relative w-full  text-right">
          <h6 className="font-bold mt-2.5">Receipt Details</h6>
          <p className=" m-0"> Receipt Number: RP-{data.invoice_number}</p>
          <p className=" m-0"> Date: {data.bill_date}</p>
          <p className=" m-0"> Time: {data.bill_time}</p>
        </div>
      </div>
      <div className="flex  justify-between -mx-[15px]">
        <div className=" px-[15px] relative w-full">
          <h6 className="font-bold mt-2.5">Billed To</h6>
          <p className=" m-0"> Customer Name: {data.customer_name}</p>
          <p className=" m-0"> Vehicle Number: {data.vehicle_number}</p>
          <p className=" m-0"> Vehicle Type: {data.vehicle_type}</p>
        </div>
        <div className=" px-[15px] relative w-full  text-right">
          <h6 className="font-bold mt-2.5">Fuel Station Details</h6>
          <p className=" m-0"> Fuel Station Name: {data.fuel_station}</p>
          <p className=" m-0">
            {" "}
            Fuel Station Address: {data.fuel_station_address}
          </p>

          {data.taxIdentifier !== "" ? (
            <p className=" m-0">
              {data.taxIdentifier + " : " + data.taxIdentifier_value}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-[15px]">
        <div className="px-[15px] relative w-full   text-right">
          <h6 className="font-bold mt-2.5">Payment Method</h6>
          <p className=" m-0"> {data.payment_type}</p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-[15px]">
        <div className="px-[15px] relative w-full ">
          <div className="mt-5 bg-zinc-100">
            <h6 className=" font-bold p-1.5"> Receipt Summary </h6>
          </div>
        </div>
        <div className="px-[15px] relative w-full  ">
          <table className="  mb-4  border-t w-full">
            <thead className=" w-full">
              <tr className=" h-10  border-b  ">
                <td>
                  <strong>Fuel Rate</strong>
                </td>
                <td>
                  <strong>Quantity</strong>
                </td>
                <td className="text-center">
                  <strong>Total Amount</strong>
                </td>
              </tr>
            </thead>
            <tbody className=" w-full ">
              <tr className=" h-10 border-b  ">
                <td> ₹{data.fuel_rate}</td>
                <td>{(data.total_amount / data.fuel_rate).toFixed(2)} lt.</td>
                <td className="text-center">₹ {data.total_amount}</td>
              </tr>
              <tr className=" h-10 border-b ">
                <td></td>
                <td></td>
                <td className="text-center">
                  <strong>Total: </strong>₹ {data.total_amount}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-wrap -mx-[15px]">
        <div className="px-[15px] relative w-full   text-center uppercase flex flex-col gap-4">
          <p className="">
            <strong className="">Thank you ! For Fuelling With Us !</strong>
          </p>
          <p>For any queries and complaint visit our customer care </p>
          <p>Save fuel, secure the future!</p>
          <p>Time: {data.bill_time} </p>
        </div>
      </div>
    </div>
  );
}
