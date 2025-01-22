"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AiOutlineLoading } from "react-icons/ai";
import { Shield } from "lucide-react";
import { Dosis } from "next/font/google";
import PayMethods from "@/components/Payment/PayMethods";

const dosis_sans = Dosis({ weight: "700", subsets: ["latin"] });

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: 199,
    credits: 300,
    save: 101,
    description:
      "For individuals managing personal receipts. Get 34% bonus credits to simplify bill generation.",
  },
  {
    id: "standard",
    name: "Standard",
    price: 249,
    credits: 400,
    save: 151,
    description:
      "For freelancers, creators, handling multiple bills. Get 38% extra credits to automate receipts.",
  },
  {
    id: "premium",
    name: "Premium",
    price: 500,
    credits: 1000,
    save: 500,
    description:
      "For professionals managing high-volume receipts. Double your credits and save 50%.",
    popular: true,
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: 1000,
    credits: 3000,
    save: 2000,
    description:
      "For businesses processing large-scale invoices. Triple your credits and save 67%.",
  },
];

export default function AddCredit({ user }) {
  const [selectedPlan, setSelectedPlan] = useState("premium");
  const [payment_info, setPayment_info] = useState(
    plans.find((plan) => plan.id === "premium")
  );

  const handlePlanChange = (planId) => {
    setSelectedPlan(planId);
    setPayment_info(plans.find((plan) => plan.id === planId));
  };

  return (
    <div className="max-w-7xl m-auto mt-12 mb-36 relative px-5 sm:px-10">
      {/* Header Section */}
      <div className="text-center pt-24 mb-12">
        <h1
          className={`${dosis_sans.className} text-4xl md:text-5xl text-purple-600 mb-4`}
        >
          Limited-Time Offer:{" "}
          <span className="text-purple-700">Unlock Bonus</span>
          <br />
          Credits and Save Big!
        </h1>
        <p className="text-gray-600 text-lg mb-4">
          Act Fast! Limited-Time Sale: Get Extra Credits on All
          <br />
          Plans and Save Up to 67%!
        </p>

        {/* Timer Banner */}
        <div className="bg-pink-50 text-pink-600 px-4 py-2 rounded-full text-sm inline-block">
          <span className="font-semibold">40m 53s left!</span>
          <span className="ml-2 text-gray-600">
            Time Just Extended, But End Soon.
          </span>
        </div>

        {/* User Count */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div className="flex -space-x-2">
            <img
              src={`https://i.pravatar.cc/32?img=${
                Math.floor(Math.random() * 70) + 1
              }`}
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src={`https://i.pravatar.cc/32?img=${
                Math.floor(Math.random() * 70) + 1
              }`}
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
            <img
              src={`https://i.pravatar.cc/32?img=${
                Math.floor(Math.random() * 70) + 1
              }`}
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="font-semibold">28k+ happy users</span>
          </div>
        </div>
      </div>

      <h1 className="text-3xl ml-20 font-medium my-7">Add Credit</h1>
      <h2 className="text-zinc-500 ml-20 my-4">Credit offers</h2>

      {/* Custom Radio Group */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-xl border ${
              selectedPlan === plan.id ? "border-purple-500" : "border-gray-200"
            } ${plan.popular ? "bg-purple-50" : "bg-white"}`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                Most Popular
              </div>
            )}
            <label className="flex p-6 cursor-pointer">
              <input
                type="radio"
                name="plan"
                value={plan.id}
                checked={selectedPlan === plan.id}
                onChange={() => handlePlanChange(plan.id)}
                className="mt-1 w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
              />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium text-lg">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {plan.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-purple-600 text-2xl font-bold">
                      ₹{plan.price}
                    </div>
                    <div className="text-green-500 text-sm">
                      Save ₹{plan.save}
                    </div>
                  </div>
                </div>
                <div className="text-gray-800 font-medium italic">
                  {plan.credits} Credits
                </div>
              </div>
            </label>
          </div>
        ))}
      </div>

      {/* Security Note */}
      <div className="flex items-center justify-center gap-2 text-gray-600 text-sm mb-6">
        <Shield className="w-4 h-4 text-green-500" />
        <span>
          100% satisfaction guaranteed. Secure payment methods available.
        </span>
      </div>

      {/* Payment Methods */}
      <div className="flex justify-center items-center gap-4">
        <PayMethods />
      </div>
    </div>
  );
}

export async function Checkout(user, payment_info, setClicked) {
  const res = await fetch(checkEnvironment().concat("/api/payment/initiate"), {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: user,
      payment_info: payment_info,
    }),
  });
  const data = await res.json();
  console.log("data", data);
  if (res.ok) {
    setClicked(false);
    const url = data.url;
    console.log("url", url);
    window.location.href = url;
  } else {
    setClicked(false);
  }
}
