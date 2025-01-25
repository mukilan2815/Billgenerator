import React from "react";
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });

export default function HotelBillPreview({ data }) {
  function formatDate(dateString) {
    if (dateString) {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const parts = dateString.split("/");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      const date = new Date(year, month, day);
      return `${day} ${monthNames[month]} ${year}`;
    }
    return "";
  }

  return (
    <div id="doc" className="w-[600px]">
      <div className={`${nunito_sans.className} container mt-5 p-2.5`}>
        <h1 className="text-center text-2xl font-bold mb-5">
          {data.hotel_name || "Hotel Name"}
        </h1>
        <p className="text-center mb-5">Hotel Bill Receipt</p>
        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Guest Name:</h6>
            <p>{data.guest_name}</p>
            <h6 className="font-bold text-lg">Room Type:</h6>
            <p>{data.room_type}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Invoice Number:</h6>
            <p>{data.invoice_number}</p>
            <h6 className="font-bold text-lg">Check-in Date:</h6>
            <p>{formatDate(data.check_in_date)}</p>
            <h6 className="font-bold text-lg">Check-out Date:</h6>
            <p>{formatDate(data.check_out_date)}</p>
          </div>
        </div>

        <div className="border-b-2 border-gray-400 mb-5 px-4">
          <h3 className="font-bold text-lg mb-2">Additional Services:</h3>
          {data.additional_services.length > 0 ? (
            <ul>
              {data.additional_services.map((service, index) => (
                <li key={index}>- {service}</li>
              ))}
            </ul>
          ) : (
            <p>No additional services selected.</p>
          )}
        </div>

        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Room Cost:</h6>
            <p>₹ {data.room_cost}</p>
            <h6 className="font-bold text-lg">Service Cost:</h6>
            <p>₹ {data.service_cost}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Tax:</h6>
            <p>
              ₹{" "}
              {(
                (data.room_cost + data.service_cost) *
                (data.tax / 100)
              ).toFixed(2)}
            </p>
            <h6 className="font-bold text-lg">Net Amount:</h6>
            <p>₹ {data.total_amount.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-4">
          <h6 className="text-lg font-bold mb-2">Terms & Conditions</h6>
          <p className="text-sm">
            1. The booking is subject to hotel rules and regulations. <br />
            2. Check-in time is 2:00 PM, and check-out time is 12:00 PM. Late
            check-outs may incur additional charges. <br />
            3. Cancellations and refunds are subject to the hotel's policies.{" "}
            <br />
            4. For any queries, contact:{" "}
            {data.guest_email || "support@hotel.com"}.
          </p>
        </div>
        <div className="mt-5 text-center">
          <p className="font-bold">
            Thank you for staying at {data.hotel_name || "our hotel"}!
          </p>
        </div>
      </div>
    </div>
  );
}
