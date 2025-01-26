import React from "react";
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ weight: ["400"], subsets: ["latin"] });

export default function GymReceipt1({ data }) {
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
      const date = new Date(year, month, day);
      return `${day} ${monthNames[month]} ${year}`;
    }
    return "";
  }

  return (
    <div id="doc" className="w-full sticky max-w-[600px] bg-white mx-auto">
      <div className={`${nunito_sans.className} container mt-5 p-2.5`}>
        <h1 className="text-center text-2xl font-bold mb-5">{data.gym_name}</h1>
        <p className="text-center mb-5">Gym Invoice</p>
        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Customer Name:</h6>
            <p>{data.customer_name}</p>
            <h6 className="font-bold text-lg">Billing Cycle:</h6>
            <p>{data.billing_cycle}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Invoice Number:</h6>
            <p>{data.invoice_number}</p>
            <h6 className="font-bold text-lg">Invoice Date:</h6>
            <p>{formatDate(data.invoice_date)}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Start Date:</h6>
            <p>{formatDate(data.bill_from_date)}</p>
            <h6 className="font-bold text-lg">End Date:</h6>
            <p>{formatDate(data.bill_to_date)}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Gym No:</h6>
            <p>{data.gym_phone}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b-2 border-gray-400 mb-5">
          <div className="px-4">
            <h6 className="font-bold text-lg">Total Amount:</h6>
            <p>₹ {data.amount}</p>
          </div>
          <div className="px-4 text-right">
            <h6 className="font-bold text-lg">Tax:</h6>
            <p>₹ {((data.amount * data.tax) / 100).toFixed(2)}</p>
            <h6 className="font-bold text-lg">Net Amount:</h6>
            <p>
              ₹{" "}
              {parseInt(data.amount) + parseInt((data.amount * data.tax) / 100)}
            </p>
          </div>
        </div>

        {/* Terms & Conditions section */}
        <div className="mt-4">
          <h6 className="text-lg font-bold mb-2">Terms & Conditions</h6>
          <p className="text-sm">
            1. Membership fees are non-refundable and non-transferable.
          </p>
          <p className="text-sm">
            2. Access to the gym is restricted to the membership period only.
          </p>
          <p className="text-sm">
            3. Please adhere to the gym rules and regulations for safety and
            hygiene.
          </p>
        </div>

        {/* Instructions for Gym section */}
        <div className="mt-4">
          <h6 className="text-lg font-bold mb-2">Instruction for Gym</h6>
          <p className="text-sm">
            <strong>Check-In:</strong> Upon arrival, check in at the front desk
            if required.
          </p>
          <p className="text-sm">
            <strong>Attire and Hygiene:</strong> Wear appropriate workout attire
            and clean, non-marking athletic shoes. Bring a towel to wipe down
            equipment after use and maintain good personal hygiene.
          </p>
          <p className="text-sm">
            <strong>Warm-up:</strong> Start your session with a 5-10 minute
            warm-up to prepare your muscles and joints for exercise. This can
            include light cardio such as walking, cycling, or dynamic
            stretching.
          </p>
          <p className="text-sm">
            <strong>Equipment Familiarization:</strong> If you're new to the
            gym, take a moment to familiarize yourself with the layout and usage
            of different equipment. Ask gym staff for guidance if needed.
          </p>
          <p className="text-sm">
            <strong>Cardio Equipment:</strong> Adjust cardio machines
            (treadmills, ellipticals, bikes) to your fitness level. Wipe down
            the machine before and after use.
          </p>
          <p className="text-sm">
            <strong>Hydration:</strong> Stay hydrated by drinking water before,
            during, and after your workout. Use the provided water fountain or
            bring your own water bottle.
          </p>
          <p className="text-sm">
            <strong>Rest Periods:</strong> Take adequate rest between sets to
            recover, but avoid hogging equipment during peak hours. If the gym
            is busy, limit your rest time accordingly.
          </p>
          <p className="text-sm">
            <strong>Cool Down:</strong> After your workout, cool down with 5-10
            minutes of light stretching to help your muscles relax and prevent
            soreness.
          </p>
          <p className="text-sm">
            <strong>Personal Belongings:</strong> Keep your personal belongings
            secure in designated areas or lockers provided by the gym. Avoid
            leaving valuables unattended.
          </p>
          <p className="text-sm">
            <strong>Enjoy and Stay Consistent:</strong> Most importantly, enjoy
            your workout! Consistency is key to reaching your fitness goals.
          </p>
        </div>

        <div className="mt-5 text-center">
          <p className="font-bold">Thank you for choosing {data.gym_name}!</p>
        </div>
      </div>
    </div>
  );
}
