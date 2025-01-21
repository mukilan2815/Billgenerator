"use client";
import React from "react";
import { AllBills } from "@/components/baseUI/all-bills";
export default function BillsType() {
  const colors = [
    "bg-red-500/5",
    "bg-green-500/5",
    "bg-blue-500/5",
    "bg-yellow-500/5",
    "bg-purple-500/5",
    "bg-pink-500/5",
    "bg-indigo-500/5",
    "bg-sky-500/5",
    "bg-lime-500/5",
  ];

  return (
    <div className=" max-w-6xl m-auto my-20 px-7 homeBills  ">
      <div className="flex w-full flex-col items-center  gap-3 max-w-2xl m-auto mb-5 sm:mb-16">
        <h2 className="text-3xl text-center font-semibold tracking-tighter sm:text-5xl ">
          Try Our Online Bill Generator Now
        </h2>
      </div>
      <ul className=" col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-7 mt-20">
        {AllBills.map((e, i) => {
          return (
            <li
              key={i}
              className={`${colors[i]} flex  space-x-5 items-center rounded-xl p-5`}
            >
              <span className=" text-5xl">
                <e.icon />
              </span>
              <div>
                <h3 className=" text-xl font-semibold">{e.name}</h3>
                <p className=" text-sm">{e.info}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
