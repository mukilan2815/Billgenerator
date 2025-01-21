import React from "react";
import { LuFuel } from "react-icons/lu";
import { FaCarSide } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { TfiReceipt } from "react-icons/tfi";
import { SiYourtraveldottv } from "react-icons/si";
import { RiBillLine } from "react-icons/ri";
import { MdOutlineFastfood } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";
import { AllBills } from "@/components/baseUI/all-bills";

import Link from "next/link";
export default function BillsNavigations() {
  return (
    <div className=" w-full">
      <div className="relative grid gap-8  p-7 lg:grid-cols-2">
        {AllBills.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center  bg-amber-200 text-amber-400 sm:h-12 sm:w-12 rounded-lg">
              <item.icon aria-hidden="true" size={28} className=" " />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const BillNavs = [
  {
    name: "Fuel Bill",
    link: "/tools/fuel-bill",
    description: "3 templates available",
    icon: LuFuel,
  },
  {
    name: "Driver Salary",
    link: "/tools/driver-salary",
    description: "3 templates available",

    icon: FaCarSide,
  },
  {
    name: "General Bill",
    link: "/tools/general-bill",
    description: "1 templates available",

    icon: RiBillLine,
  },
  {
    name: "Daily Helper Bill",
    link: "/tools/daily-helper",
    description: "3 templates available",

    icon: GrUserWorker,
  },
  {
    name: "Rent Receipt",
    link: "/tools/rent-receipt",
    description: "1 templates available",

    icon: TfiReceipt,
  },
  {
    name: "LTA Receipt",
    link: "/tools/lta-receipt",
    description: "1 templates available",

    icon: SiYourtraveldottv,
  },
  // {
  //   name: "Book Invoice",
  //   link: "/",
  // },
  // {
  //   name: "Internet Invoice",
  //   link: "/",
  // },
  {
    name: "Restaurant Bill",
    link: "/tools/restaurant-bill",
    description: "1 templates available",
    icon: MdOutlineFastfood,
  },
  {
    name: "Medical Bill",
    link: "/tools/medical-bill",
    description: "1 templates available",
    icon: MdOutlineMedicalServices,
  },

  // {
  //   name: "General Bill",
  //   link: "/",
  // },
  // {
  //   name: "Recharge Receipt",
  //   link: "/",
  // },
  // {
  //   name: "Medical Bill",
  //   link: "/",
  // },
  // {
  //   name: "Stationary Bill",
  //   link: "/",
  // },
  // {
  //   name: "Cab Bill",
  //   link: "/",
  // },
  // {
  //   name: "Mart Bill",
  //   link: "/",
  // },
];
