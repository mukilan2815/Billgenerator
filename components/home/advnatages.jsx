import React from "react";
import { BsFiletypePdf } from "react-icons/bs";
import { FaHornbill } from "react-icons/fa";
import { IoReceiptOutline } from "react-icons/io5";
import { TbCurrencyRupee, TbLayoutDashboard } from "react-icons/tb";

export default function Advantages() {
  return (
    <div className="bg-[#4b5874] py-10 text-white relative">
      <div className="max-w-6xl m-auto sm:my-14 relative z-20">
        <div className="overflow-hidden rounded-3xl">
          <div className="p-7">
            <div className="flex w-full flex-col items-center gap-3 max-w-6xl m-auto mb-20">
              <h2 className="text-4xl sm:text-center font-semibold tracking-tighter sm:text-5xl">
                Advantages of Using Our Online Bill Generator
              </h2>
              <p className="sm:text-center">
                What could be more interesting than knowing the benefits you may
                seek while using our Online Bill Generator Tool? Let us take a
                look.
              </p>
            </div>
            <ul className="col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-7 mt-20">
              {advantageList.map((feature, i) => {
                return (
                  <li
                    key={i}
                    className="bg-zinc-100 px-7 py-7 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    <h3 className="text-black text-xl font-medium mb-2 mt-3">
                      {feature.name}
                    </h3>
                    <p className="font-light text-slate-600">{feature.desc}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const advantageList = [
  {
    name: "100% Accurate",
    desc: "Now that you're using our Online Bill Generator Tool over your traditional man-made bills, you will surely save yourself from all kinds of human error and get 100% accuracy.",
  },
  {
    name: "Any Time Accessibility",
    desc: "If you have a habit of doing things last minute, you can use our tool anytime and all you need is a working internet connection and you're good to go.",
  },
  {
    name: "Time saver",
    desc: "Gone are those days when everything used to be done manually. If you want to save time, just choose the type of bill you wish to generate and it'll be done in a jiffy.",
  },
  {
    name: "Highly professional",
    desc: "All our templates are designed in a particular manner to look professional, and irrespective of what template you choose, it will surely meet your expectations.",
  },
  {
    name: "Email delivery",
    desc: "All the bills you generate will be sent to your recipient's email address in a PDF format.",
  },
  {
    name: "Eco friendly",
    desc: "Now that everything is being done digitally, why use those traditional paper invoices for your bills? Use these tools and save paper, save the planet.",
  },
  //
];
