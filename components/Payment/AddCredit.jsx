"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AiOutlineLoading } from "react-icons/ai";
import { Dosis } from "next/font/google";
import PayMethods from "@/components/Payment/PayMethods";
import { checkEnvironment } from "@/lib/checkenvironment";

const dosis_sans = Dosis({ weight: "700", subsets: ["latin"] });

const offers = [
  {
    amount: 249,
    credit: 1500,
    offer: 89,
    active: true,
  },
  {
    amount: 200,
    credit: 220,
    offer: 10,
    active: false,
  },
  {
    amount: 500,
    credit: 575,
    offer: 15,
    active: false,
  },
  {
    amount: 1000,
    credit: 1200,
    offer: 20,
    active: false,
  },
];

export default function AddCredit({ user }) {
  const activeOffers = offers.filter((o) => o.active);
  const inactiveOffers = offers.filter((o) => !o.active);
  const [payment_info, setPayment_info] = useState(activeOffers[0]);
  const [isChecked, setIsChecked] = useState(false);
  const [clicked, setClicked] = useState(false);

  async function handleAction(event) {
    event.preventDefault();
    setClicked(true);
    await Checkout(user, payment_info, setClicked);
  }

  return (
    <>
      {/* Top Banner */}
      <div className="w-full bg-rose-500 text-white p-3 flex justify-center items-center space-x-2">
        <span className="text-yellow-300">💝</span>
        <span>Generate unlimited bills, offer starts at </span>
        <span className="text-yellow-300">₹199.</span>
        <button className="bg-white text-black rounded-md px-3 py-1 text-sm ml-2 hover:bg-gray-100">
          Get It Now 🔥
        </button>
      </div>

      <div className="max-w-7xl m-auto mt-12 mb-36 relative px-5 sm:px-10">
        {/* Limited Time Offer Section */}
        <div className="text-center mb-12">
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

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="flex -space-x-2">
              <img
                src="/api/placeholder/32/32"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/api/placeholder/32/32"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white"
              />
              <img
                src="/api/placeholder/32/32"
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

        <h1 className="text-3xl font-medium my-7">Add Credit</h1>
        <h2 className="text-zinc-500 my-4">Credit offers</h2>

        <ul className="grid grid-cols-2 lg:grid-cols-4 max-w-2xl gap-4">
          {activeOffers.map((e, i) => (
            <li
              key={i}
              className={`${
                payment_info.amount === e.amount
                  ? "bg-white ring-2 ring-blue-500"
                  : "bg-zinc-100"
              } overflow-hidden px-5 py-2 rounded-2xl flex flex-col gap-2 cursor-pointer relative `}
              onClick={() => setPayment_info(e)}
            >
              <div className="flex items-center justify-between">
                <span className="text-green-500 font-bold text-2xl">
                  ₹{e.amount}
                </span>{" "}
                <span className="absolute w-32 h-14 bg-rose-500 text-white rotate-45 -right-10 -top-1 text-[10px] pt-5 text-center font-bold">
                  Limited <br />
                  Offer
                </span>
              </div>
              <div className="flex justify-between items-center relative">
                <span className="italic font-semibold text-sm">Unlimited</span>
                <div className="flex flex-col">
                  <span className="text-xl">{e.offer}%</span>
                  <span className="text-xs -mt-1">Off</span>
                </div>
              </div>
            </li>
          ))}
          {inactiveOffers.map((e, i) => (
            <li
              key={i}
              className="cursor-not-allowed bg-zinc-100 px-5 py-2 rounded-2xl flex flex-col gap-2 relative"
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center -rotate-12">
                <Slash
                  strokeWidth={0.5}
                  size={120}
                  className="text-rose-100 absolute -top-3 left-0 right-0 bottom-0 flex items-center justify-center z-10"
                />
                <Slash
                  strokeWidth={0.5}
                  size={120}
                  className="text-zinc-800 ml-1 absolute -top-3 left-0 right-0 bottom-0 flex items-center justify-center"
                />
              </div>
              <span className="text-zinc-500">₹{e.amount}</span>
              <div className="flex justify-between items-center">
                <span className="text-xs">
                  {e.credit}
                  <br /> Credits
                </span>
                <span className="text-2xl">{e.offer}%</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="grid lg:grid-cols-2">
          <div>
            <p className="text-green-500 mt-4">
              🚀 Unlimited Bill & Invoice Generation for Life - Just at ₹249 !
              Pay Once, Use Forever! 🕒
            </p>
            <form onSubmit={handleAction} className="my-10">
              <span className="block text-zinc-500 mb-2">Amount</span>
              <div className="flex space-x-3 items-center">
                <input
                  readOnly
                  type="number"
                  value={payment_info.amount}
                  className="border border-zinc-300 rounded-lg px-2 py-1 w-28"
                />
                <div>Buy unlimited credits for ₹ {payment_info.amount}</div>
              </div>
              <div className="my-10">
                <span className="block text-zinc-500 mb-2">
                  Have A Coupon Code?
                </span>
                <div className="flex space-x-3 items-center">
                  <input
                    type="text"
                    className="border border-zinc-300 rounded-lg px-2 py-1 w-28"
                  />
                  <div>Apply</div>
                </div>
              </div>

              <div className="my-10 space-y-10">
                <div className="flex items-center space-x-2 my-10">
                  <Checkbox
                    required={true}
                    id="terms"
                    checked={isChecked}
                    onCheckedChange={() => setIsChecked((prev) => !prev)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree with terms and conditions
                  </label>
                </div>

                <div className="mt-5">
                  {user ? (
                    <Button disabled={clicked} className="w-28 uppercase">
                      {clicked ? (
                        <AiOutlineLoading size={20} className="animate-spin" />
                      ) : (
                        "Add credits"
                      )}
                    </Button>
                  ) : (
                    <Button asChild className="w-28 uppercase">
                      <Link href={"/sign-in"}>Add credit </Link>
                    </Button>
                  )}
                </div>
              </div>
            </form>
            <PayMethods />
          </div>
          <div className="hidden relative lg:flex lg:items-start pt-20">
            <div className="relative bg-yellow-400 px-10 py-7 rounded-[36px]">
              <h2
                className={`${dosis_sans.className} first-letter:text-4xl sm:first-letter:text-6xl text-3xl sm:text-4xl leading-loose tracking-wide max-w-md mb-7`}
              >
                Generate Invoices & Bills Instantly in just 1-Click
              </h2>
              <h3
                className={`${dosis_sans.className} text-3xl sm:text-2xl leading-loose tracking-wide max-w-md mb-7`}
              >
                Add Credits now and generate Professional Invoices in Seconds.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
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
