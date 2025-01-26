import React from "react";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";

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
      const parts = dateString.split("-");
      const day = Number.parseInt(parts[0], 10);
      const month = Number.parseInt(parts[1], 10) - 1;
      const year = Number.parseInt(parts[2], 10);
      if (monthNames[month]) {
        return `${day}-${monthNames[month].substring(0, 3)}-${year}`;
      }
      return "";
    }
    return "";
  }

  const grossFare = (
    Number.parseFloat(data.base_fare || 0) +
    Number.parseFloat(data.taxes_fees || 0)
  ).toFixed(2);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-[800px] mx-auto">
      <div className={`${nunito_sans.className}`}>
        <h1 className="text-center text-2xl font-bold mb-2">
          TICKET CONFIRMATION
        </h1>

        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold">{data.logo}</h2>
            <p className="text-lg mt-2">{data.pnr}</p>
            <p className="text-sm text-gray-600">Airline PNR</p>
          </div>
          {data.ticket_barcode && (
            <div className="w-24 h-24 relative">
              <Image
                src={data.ticket_barcode || "/placeholder.svg"}
                alt="Ticket Barcode"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-600">Reference Number</p>
            <p className="font-semibold">{data.reference_no}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Issued On</p>
            <p className="font-semibold">
              {formatDate(data.issued_date)} {data.issued_time}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">FLIGHT DETAILS</h2>
          <p className="text-sm text-gray-600 mb-4">
            ALL TIMINGS MENTIONED ARE IN 24HRS FORMAT AND LOCAL AIRPORT TIMINGS
            AT THE DEPARTURE/ARRIVAL AIRPORT.
          </p>

          <div className="border rounded-lg p-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {data.logo && (
                    <div className="w-6 h-6 relative">
                      <Image
                        src="/placeholder.svg"
                        alt="Airline Logo"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  )}
                  <span className="font-bold">{data.flight_no}</span>
                </div>
                <p>Class - {data.class}</p>
                <p>{data.refundable}</p>
              </div>
              <div className="text-right">
                <p>Duration: {data.duration}</p>
                <p className="text-green-600 font-semibold">{data.status}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Depart</h3>
                <p className="text-lg font-bold">{data.depart_location}</p>
                <p>
                  {data.depart_time} {formatDate(data.depart_date)}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Arrive</h3>
                <p className="text-lg font-bold">{data.arrive_location}</p>
                <p>
                  {data.arrive_time} {formatDate(data.arrive_date)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Passenger Details</h2>
          <p className="text-sm mb-2">
            Phone: {data.passenger_mobile}
            {data.passenger_email && ` | Email: ${data.passenger_email}`}
          </p>

          <div className="border rounded-lg">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Ticket No.</th>
                  <th className="px-4 py-2 text-left">
                    Passenger / Baggage Details
                  </th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-2">{data.ticket_no}</td>
                  <td className="px-4 py-2">
                    <p>
                      {data.passenger_title} {data.passenger_name}
                    </p>
                    <p>{data.passenger_type}</p>
                    <p>
                      Hand Baggage: {data.hand_baggage} || CheckIn Baggage:{" "}
                      {data.checkin_baggage}
                    </p>
                  </td>
                  <td className="px-4 py-2">{data.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-bold mb-2">Payment Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>Base Fare</p>
              <p>Taxes and Fees</p>
              <p className="font-bold mt-2">Gross Fare</p>
            </div>
            <div className="text-right">
              <p>₹ {data.base_fare || "0.00"}</p>
              <p>₹ {data.taxes_fees || "0.00"}</p>
              <p className="font-bold mt-2">₹ {grossFare}</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold mb-2">Additional Information</h2>
          <div className="text-sm text-gray-600 space-y-2">
            <p>
              • Use your Airline PNR for all communication you have directly
              with the airline & us about your booking.
            </p>
            <p>
              • A printed Copy of this E-Ticket or E-Ticket display on Phone /
              tablet must be presented at the time of check-in and to get access
              to Airport Terminal.
            </p>
            <p>
              • Check-in Starts 3 hours before schedule departure and closes
              upto 60 minutes prior to the departure time.
            </p>
            <p>• Carry a Valid Government issued Photo identification.</p>
            <p>
              • For International Flights, Carrying of Passport and related visa
              / travel documents is mandatory.
            </p>
            <p>
              • WEB CHECK-IN IS NOW MANDATORY. CHECK-IN ONLINE ON AIRLINE
              WEBSITE.
            </p>
            <p>• WEB CHECK-IN WILL CLOSE 60 MINS PRIOR TO DEPARTURE.</p>
            <p>
              • Power banks/portable mobile chargers are allowed ONLY in
              Hand-Baggage.
            </p>
            <p>
              • Disclaimer ‐ No meal will be served on flights that have less
              than 2 hours of flight duration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
