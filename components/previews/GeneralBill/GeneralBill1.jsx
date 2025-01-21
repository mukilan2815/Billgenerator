import React from "react";
// import "@/public/css/template.css";
import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });
export default function GeneralBill1({ data }) {
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
    <div id="doc" className="  w-[600px] ">
      <div className={`${nunito_sans} mt-5 container p-[50px] `}>
        <div className=" flex flex-col">
          <div className="logo col-lg-5">
            {data.shop_logo ? (
              <img src={data.shop_logo} alt="logo" className=" max-w-28 mb-3" />
            ) : (
              ""
            )}
          </div>
          <div className="col-lg-7">
            <h4 className=" text-[#ffc107] text-xl font-medium">
              {data.shop_name}
            </h4>
            <h6> {data.seller_details}</h6>
          </div>
        </div>
        <div className="invoice-info-container">
          <table className="">
            <tbody>
              <tr>
                <td rowSpan="2" className="client-name"></td>
                <td> {data.customer_name} </td>
              </tr>
              <tr>
                <td> {data.customer_address} </td>
              </tr>
              <tr>
                <td>
                  Invoice Date: <strong> {data.invoice_date}</strong>
                </td>
                <td> {data.customer_location} </td>
              </tr>
              <tr>
                <td>
                  Invoice No: <strong> {data.invoice_number}</strong>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="line-items-container">
          <table className=" text-sm my-[70px]">
            <thead>
              <tr>
                <th className="heading-description">Description</th>
                <th className="heading-quantity">Qty</th>
                <th className="heading-price">Price</th>
                <th className="heading-price">CGST %</th>
                <th className="heading-price">CGST Amount</th>
                <th className="heading-price">SGST %</th>
                <th className="heading-price">SGST Amount</th>
                <th className="heading-subtotal">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, i) => {
                return (
                  <tr key={i}>
                    <td className="">
                      {item.name} <br /> {item.description}
                    </td>
                    <td>{item.qty}</td>
                    <td className="right">
                      ₹
                      {item.price * item.qty -
                        (item.price * item.qty * item.tax) / 100}
                    </td>
                    <td className="right"> {item.tax / 2}%</td>
                    <td className="right">
                      {((item.price * item.qty * (item.tax / 2)) / 100).toFixed(
                        2
                      )}
                    </td>
                    <td className="right"> {item.tax / 2}%</td>
                    <td className="right">
                      {((item.price * item.qty * (item.tax / 2)) / 100).toFixed(
                        2
                      )}
                    </td>
                    <td className="bold">₹{item.price * item.qty}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="line-items-container">
          {" "}
          <table className="line-items-container has-bottom-border">
            <thead>
              <tr>
                <th>Payment Info</th>
                <th>Due By</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="payment-info text-xs">
                  <div>
                    Order No: <strong>{data.order_number}</strong>
                  </div>
                  <div>
                    Payment method : <strong>{data.payment_mode}</strong>
                  </div>
                </td>
                <td className=" text-[1.75em]">{data.invoice_date}</td>
                <td className="large  font-bold text-right text-[1.75em] text-[#fb7578]">
                  ₹ {calculateTotalPrice(data.items).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer">
          <div className="footer-info">
            <span> {data.shop_name}</span>
          </div>
          <div className="footer-thanks">
            <span>Thank you! Visit Again</span>
          </div>
        </div>
      </div>
    </div>
  );
}
