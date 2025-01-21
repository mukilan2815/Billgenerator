import React from "react";
// import "@/public/css/template.css";
import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });
export default function Restaurant2({ data }) {
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
        <div className={`${nunito_sans}  container p-2.5 w-[420px] `}>
          <div className="  text-center mb-[18px]">
            <div className="flex justify-center mb-[7px]">
              {data.logo ? (
                <img src={data.logo} alt="logo" className=" w-20 " />
              ) : (
                ""
              )}
            </div>
            <div className=" text-[13px] leading-[1.4] text-[#111]">
              {data.restaurant_name}
            </div>
            <div className="">{data.restaurant_address}</div>
            {/* <div className="text-[13px] leading-[1.4] text-[#111]">
              <span> GST No M43010GH195260 </span>
            </div> */}
          </div>
          <div className=" w-full">
            <div className="  template_heading_with_border ">
              <span>Receipt</span>
            </div>
            <ul className="grid grid-cols-2 list-none p-0 m-0 w-full gap-y-[7px]">
              <li className="flex text-[12px] leading-[1.2]">
                <div className="mr-2 text-[12px] text-[#111] leading-[1.2]">
                  Name:
                </div>
                <div className="mr-1">{data.customer_name}</div>
              </li>
              <li className="flex justify-end text-[12px] leading-[1.2]">
                <div className="mr-2 text-[12px] text-[#111] leading-[1.2]">
                  Invoice No:
                </div>
                <div className="mr-1">{data.invoice_number}</div>
              </li>
              <li className="flex text-[12px] leading-[1.2]">
                <div className="mr-2 text-[12px] text-[#111] leading-[1.2]">
                  Table:
                </div>
                <div className="mr-1">#{data.table_number}</div>
              </li>
              <li className="flex justify-end text-[12px] leading-[1.2]">
                <div className="mr-2 text-[12px] text-[#111] leading-[1.2]">
                  Date:
                </div>
                <div className="mr-1">{data.bill_date}</div>
              </li>
            </ul>

            <table className="tm_pos_invoice_table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>₹{item.price}</td>
                      <td>{item.qty}</td>
                      <td>₹{item.price * item.qty}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="tm_bill_list">
              <div className="tm_bill_list_in">
                <div className="tm_bill_title">Sub-Total:</div>
                <div className="tm_bill_value">
                  ₹ {calculateTotalPrice(data.items)}
                </div>
              </div>
              <div className="tm_bill_list_in">
                <div className="tm_bill_title">CGST:</div>
                <div className="tm_bill_value">
                  {" "}
                  SGST: {data.bill_tax / 2}% &nbsp; ₹{" "}
                  {(
                    (calculateTotalPrice(data.items) * (data.bill_tax / 2)) /
                    100
                  ).toFixed()}
                </div>
              </div>
              <div className="tm_bill_list_in">
                <div className="tm_bill_title">SGST:</div>
                <div className="tm_bill_value">
                  {" "}
                  SGST: {data.bill_tax / 2}% &nbsp; ₹
                  {(
                    (calculateTotalPrice(data.items) * (data.bill_tax / 2)) /
                    100
                  ).toFixed()}{" "}
                </div>
              </div>
              <div className="tm_invoice_seperator"></div>
              <div className="tm_bill_list_in">
                <div className="tm_bill_title">Mode: {data.payment_mode}</div>
                <div className="tm_bill_value">
                  Total: ₹{" "}
                  {calculateTotalPrice(data.items) +
                    (calculateTotalPrice(data.items) *
                      parseInt(data.bill_tax)) /
                      100}
                </div>
              </div>
              {data.taxIdentifier !== "" ? (
                <div className="  text-right flex my-2 gap-2 justify-end">
                  <div className=" ">{data.taxIdentifier + ":"}</div>
                  <div className="">{data.taxIdentifier_value}</div>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="tm_pos_sample_text">
              **SAVE PAPER SAVE NATURE !! <br /> Time: {data.bill_time}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
