"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Link from "next/link";
import { LuFuel } from "react-icons/lu";
import { FaCarSide } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { TfiReceipt } from "react-icons/tfi";
import { SiYourtraveldottv } from "react-icons/si";
import { HiMiniReceiptPercent } from "react-icons/hi2";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiBillLine } from "react-icons/ri";
import { AllBills } from "@/components/baseUI/all-bills";

import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger onClick={() => setOpen((prev) => !prev)}>
        <HiOutlineMenuAlt4 size={28} />
      </SheetTrigger>
      <SheetContent side={"left"} className=" px-3">
        <SheetHeader>
          <div className=" flex items-center gap-4 px-3 pb-5 border-b">
            <Link
              href={"/"}
              className=" flex items-center h-full gap-2 text-black"
            >
              <HiMiniReceiptPercent size={26} className="  text-black" />
              <span className=" font-semibold text-xl">BillGenerator</span>
            </Link>
          </div>{" "}
        </SheetHeader>
        <BillLinks />
        <div className="  py-3  border-t">
          <Link
            href={"/payment"}
            className=" flex items-center rounded-lg px-4 py-3 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
          >
            <div className="flex  shrink-0 items-center justify-center rounded-lg">
              <RiMoneyDollarCircleLine size={20} className=" " />
            </div>
            <div className="ml-4">
              <p className="text-sm font-semibold text-gray-900">Add Credit</p>
            </div>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function BillLinks() {
  return (
    <div className=" py-3">
      {AllBills.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          className="flex items-center rounded-lg px-4 py-3.5 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
        >
          <div className="flex  shrink-0 items-center justify-center rounded-lg">
            <item.icon aria-hidden="true" size={20} className=" " />
          </div>
          <div className="ml-4">
            <p className="text-sm font-semibold text-gray-900">{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

const BillNavs = [
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
  // {
  //   name: "Restaurant Bill",
  //   link: "/",
  // },

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
