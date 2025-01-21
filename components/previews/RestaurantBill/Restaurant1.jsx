import React from "react";
// import "@/public/css/template.css";
import { Press_Start_2P } from "next/font/google";
const press_start_2p = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export default function Restaurant1({ data }) {
  function calculateTotalPrice(data) {
    let totalPrice = 0;
    if (data.length > 0) {
      data.forEach((obj) => {
        if (obj?.hasOwnProperty("price")) {
          totalPrice += parseInt(obj.price) * parseInt(obj.qty);
        }
      });
    }
    return parseInt(totalPrice);
  }
  return (
    <>
      <div id="doc" className="  border-slate-200 h-fit shadow-2xl  w-fit ">
        <div
          className={`${press_start_2p.className}  text-[#212529] text-[9.5px]  -tracking-[0.7px]    leading-[1.2]  w-[360px] h-full p-[5px] relative`}
        >
          <div className="col-lg-12  text-center mb-[5px]">
            {/* <img src="xxx" alt="logo" className=" w-20" /> */}
          </div>
          <p className=" text-center leading-[1.35]  mb-[5px]  ">WELCOME!!!</p>
          <p className="text-center leading-[1.35]  mb-[5px]   m-1">
            {/* <span> GST No M43010GH195260 </span> */}
          </p>
          <p className="text-center leading-[1.35]  mb-[5px]   text-[12px]">
            {data.restaurant_name}
          </p>
          <p className="text-center leading-[1.35]  mb-[5px]  ">
            {data.restaurant_address}
          </p>
          <p className="text-center leading-[1.35]  mb-[5px]  ">
            Original Receipt
          </p>
          <div className="  flex justify-between px-[5px] -mb-[5px] mt-0    ">
            <p className="m-1">Date: {data.bill_date}</p>
            <p className="m-1"> Time: {data.bill_time}</p>
          </div>
          <div className="flex justify-between px-[5px] -mb-[5px] mt-0">
            <p className="m-1">{data.customer_name}</p>
          </div>
          <div className="flex justify-between px-[5px] -mb-[5px] mt-0">
            <p className="m-1">Table: #{data.table_number}</p>
          </div>
          <div className=" mb-[30px]">
            <div className="flex justify-between px-[5px] -mb-[5px] mt-0">
              <p className="m-1">Receipt No.: {data.invoice_number}</p>
            </div>
          </div>
          <table className=" w-full px-5">
            <thead className=" text-left">
              <tr>
                <th>Description</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody className=" ">
              {data.items.length > 0 &&
                data.items.map((item, i) => {
                  return (
                    <tr className=" " key={i}>
                      <td>{item?.name}</td>
                      <td>{item?.qty}</td>
                      <td>₹{item?.price}</td>
                      <td className="text-left">₹{item?.price * item?.qty}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="flex justify-between px-[5px] -mb-[5px] mt-0">
            <p className=" ml-auto mt-5 mb-4">
              Sub Total: ₹ {calculateTotalPrice(data.items)}
            </p>
          </div>
          <div className="flex justify-between px-[5px] -mb-[5px] mt-0">
            <p className=" ml-auto mb-4">
              CGST: {data.bill_tax / 2}% &nbsp; ₹{" "}
              {(
                (calculateTotalPrice(data.items) * (data.bill_tax / 2)) /
                100
              ).toFixed()}
            </p>
          </div>
          <div className="flex justify-between px-[5px] -mb-[5px] mt-0">
            <p className=" ml-auto mb-4">
              SGST: {data.bill_tax / 2}% &nbsp; ₹{" "}
              {(
                (calculateTotalPrice(data.items) * (data.bill_tax / 2)) /
                100
              ).toFixed()}
            </p>
          </div>
          <div className="flex justify-between px-[5px] -mb-[5px] mt-0">
            <p className=" ml-auto mb-4">
              Total: ₹{" "}
              {calculateTotalPrice(data.items) +
                (calculateTotalPrice(data.items) * parseInt(data.bill_tax)) /
                  100}
            </p>
          </div>
          <div className="flex justify-between px-[5px] -mb-[5px] mt-0">
            <p className="m-1">MODE: {data.payment_mode}</p>
          </div>
          {data.taxIdentifier !== "" ? (
            <div className=" flex  px-[5px] -mb-[5px] mt-0">
              <p className="m-1 ">{data.taxIdentifier + ":"}</p>
              <p className="m-1">{data.taxIdentifier_value}</p>
            </div>
          ) : (
            ""
          )}
          <p className=" mt-[60px] text-center uppercase mb-1 ">
            SAVE PAPER SAVE NATURE !! <br />
            Thank you for a delicious meal.
          </p>
        </div>
      </div>
    </>
  );
}
