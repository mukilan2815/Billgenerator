import React from "react";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";

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
      const parts = dateString.split("-");
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return `${day} ${monthNames[month]} ${year}`;
    }
    return "";
  }

  const calculateTotal = () => {
    return data.items.reduce((acc, item) => acc + (item.total || 0), 0);
  };

  return (
    <div
      id="doc"
      className="w-full max-w-[800px] bg-white mx-auto p-6 border rounded-lg shadow-lg"
    >
      <div className={`${nunito_sans.className}`}>
        <div className="text-center mb-6">
          {data.logo_url && (
            <div className="w-32 h-16 relative mx-auto mb-4">
              <Image
                src={data.logo_url || "/placeholder.svg"}
                alt="Hotel Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          <h1 className="text-2xl font-bold">
            {data.hotel_name || "Hotel Name"}
          </h1>
          <p className="text-sm text-gray-600">{data.hotel_address}</p>
          <p className="text-sm text-gray-600">Phone: {data.hotel_phone}</p>
          <p className="text-sm text-gray-600">Email: {data.hotel_email}</p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-6">
          <div>
            <h2 className="font-bold mb-2">Guest Information</h2>
            <p>Name: {data.customer_name}</p>
            <p>Address: {data.customer_address}</p>
            <p>Registration No: {data.guest_registration_no}</p>
            <p>Nationality: {data.nationality}</p>
            <p>No. of Persons: {data.number_of_persons}</p>
          </div>
          <div>
            <h2 className="font-bold mb-2">Booking Details</h2>
            <p>Bill No: {data.bill_no}</p>
            <p>Receipt No: {data.receipt_no}</p>
            <p>Room No: {data.room_no}</p>
            <p>Room Type: {data.room_type}</p>
            <p>Reservation No: {data.reservation_no}</p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-bold mb-2">Stay Duration</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>Check In: {formatDate(data.check_in_date)}</p>
              <p>Time: {data.check_in_time}</p>
            </div>
            <div>
              <p>Check Out: {formatDate(data.check_out_date)}</p>
              <p>Time: {data.check_out_time}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="font-bold mb-2">Charges</h2>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-right">Price/Night</th>
                <th className="px-4 py-2 text-right">Nights</th>
                <th className="px-4 py-2 text-right">Tax %</th>
                <th className="px-4 py-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{item.description}</td>
                  <td className="px-4 py-2 text-right">
                    ₹{item.price_per_night}
                  </td>
                  <td className="px-4 py-2 text-right">{item.total_nights}</td>
                  <td className="px-4 py-2 text-right">{item.tax}%</td>
                  <td className="px-4 py-2 text-right">₹{item.total}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="border-t font-bold">
              <tr>
                <td colSpan={4} className="px-4 py-2 text-right">
                  Total Amount:
                </td>
                <td className="px-4 py-2 text-right">₹{calculateTotal()}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-8">
          {data.guest_signature_url && (
            <div className="text-center">
              <div className="w-32 h-16 relative mx-auto mb-2">
                <Image
                  src={data.guest_signature_url || "/placeholder.svg"}
                  alt="Guest Signature"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p>Guest Signature</p>
            </div>
          )}
          {data.receptionist_signature_url && (
            <div className="text-center">
              <div className="w-32 h-16 relative mx-auto mb-2">
                <Image
                  src={data.receptionist_signature_url || "/placeholder.svg"}
                  alt="Receptionist Signature"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p>Receptionist Signature</p>
            </div>
          )}
        </div>

        <div className="mt-6 text-xs text-gray-500">
          <p>GST No: {data.gst_no}</p>
          <p>Payment Method: {data.payment_method}</p>
          <p>Issued Date: {formatDate(data.issued_date)}</p>
        </div>
      </div>
    </div>
  );
}
