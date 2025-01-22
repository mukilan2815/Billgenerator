"use client";
import React, { useState } from "react";
import { Shield, Clock, Users, Star, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PayMethods from "@/components/Payment/PayMethods";

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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center px-4 py-1 mb-6 bg-purple-100 rounded-full text-center">
            <Clock className="w-4 h-4 text-red-600 mr-2" />
            <span className="text-red-600 text-base sm:text-lg font-medium">
              Limited Time Offer - 40m 53s remaining
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 text-center">
            Unlimited Invoices, One-Time Purchase—{" "}
            <span className="text-purple-500">Generate Bills Forever!</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-lg mb-6 text-center">
            Say goodbye to recurring costs! With our one-time purchase, enjoy
            unlimited invoice and bill generation. Pay once and handle all your
            billing needs without limits!
          </p>

          <div className="flex items-center justify-center flex-wrap space-x-4">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="flex space-x-2">
                <img
                  src="https://i.pravatar.cc/50?img=1"
                  alt="Avatar 1"
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
                />
                <img
                  src="https://i.pravatar.cc/50?img=2"
                  alt="Avatar 2"
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
                />
                <img
                  src="https://i.pravatar.cc/50?img=3"
                  alt="Avatar 3"
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
                />
                <img
                  src="https://i.pravatar.cc/50?img=4"
                  alt="Avatar 4"
                  className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
                />
              </div>
              <span className="text-gray-700 ml-4 text-sm sm:text-base">
                28k+ happy users
              </span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-300"></div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-gray-700 text-sm sm:text-base">
                4.9/5 rating
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-200 hover:shadow-lg ${
                selectedPlan === plan.id ? "ring-2 ring-purple-500" : ""
              } ${plan.popular ? "transform hover:-translate-y-1" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-2 -m-2">
                  <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
                    POPULAR
                  </div>
                </div>
              )}

              <CardContent className="p-4 sm:p-6">
                <label className="cursor-pointer block">
                  <div className="flex items-center mb-4">
                    <input
                      type="radio"
                      name="plan"
                      value={plan.id}
                      checked={selectedPlan === plan.id}
                      onChange={() => handlePlanChange(plan.id)}
                      className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                    />
                    <span className="ml-3 text-base sm:text-xl font-semibold text-gray-900">
                      {plan.name}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                        ₹{plan.price}
                      </span>
                      <span className="ml-2 text-xs sm:text-sm text-green-600 font-medium">
                        Save ₹{plan.save}
                      </span>
                    </div>
                    <div className="mt-1 text-purple-600 font-semibold">
                      {plan.credits} Credits
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </label>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-gray-600 text-sm sm:text-base">
              Secure payment processing
            </span>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <CreditCard className="w-5 h-5 text-gray-400 mr-2" />
              <h3 className="text-base sm:text-lg font-medium text-gray-900">
                Payment Methods
              </h3>
            </div>
            <div className="flex justify-center">
              <PayMethods />
            </div>
          </div>
        </div>
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
