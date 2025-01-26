import React from "react";
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ weight: "400", subsets: ["latin"] });

export default function FlightReceipt1({ data }) {
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
    <div id="doc" className="w-full sticky max-w-[600px] bg-white mx-auto">
      <div className={`${nunito_sans.className} container mt-5 p-2.5`}>
        <h1 className="text-center text-2xl font-bold mb-5">
          {data.flight_name}
        </h1>
        <p className="text-center mb-5">Flight Ticket Receipt</p>
        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Passenger Name:</h6>
            <p>{data.passenger_name}</p>
            <h6 className="font-bold text-lg">Flight Number:</h6>
            <p>{data.flight_number}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Invoice Number:</h6>
            <p>{data.invoice_number}</p>
            <h6 className="font-bold text-lg">Date:</h6>
            <p>{formatDate(data.departure_date)}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Departure Date:</h6>
            <p>{formatDate(data.departure_date)}</p>
            <h6 className="font-bold text-lg">Departure Time:</h6>
            <p>{data.departure_time}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Arrival Date:</h6>
            <p>{formatDate(data.arrival_date)}</p>
            <h6 className="font-bold text-lg">Arrival Time:</h6>
            <p>{data.arrival_time}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Ticket Number:</h6>
            <p>{data.ticket_number}</p>
            <h6 className="font-bold text-lg">Seat Number:</h6>
            <p>{data.seat_number || "N/A"}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Total Amount:</h6>
            <p>₹ {data.amount}</p>
            <h6 className="font-bold text-lg">Tax:</h6>
            <p>₹ {((data.amount * data.tax) / 100).toFixed(2)}</p>
            <h6 className="font-bold text-lg">Net Amount:</h6>
            <p>
              ₹{" "}
              {parseInt(data.amount) + parseInt((data.amount * data.tax) / 100)}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <h6 className="text-lg font-bold mb-2">Terms & Conditions</h6>
          <p className="text-sm">
            1. Tickets are non-refundable and non-transferable. <br />
            2. Passengers must arrive at the boarding gate at least 45 minutes
            before departure. <br />
            3. Airline reserves the right to deny boarding if the passenger
            fails to provide valid identification. <br />
            4. For any queries, contact: {data.email || "support@airline.com"}.
          </p>
        </div>
        <div className="mt-5 text-center">
          <p className="font-bold">
            Thank you for choosing {data.flight_name}!
          </p>
        </div>
      </div>
    </div>
  );
}
