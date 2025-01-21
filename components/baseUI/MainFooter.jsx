import Link from "next/link";
import React from "react";
import { BiChevronsDown } from "react-icons/bi";
import { IoChevronDownOutline } from "react-icons/io5";
import { Mukta } from "next/font/google";
import BillNavs from "@/lib/billnavs";
import { title } from "process";
import { AllBills } from "@/components/baseUI/all-bills";
import PayMethods from "@/components/Payment/PayMethods";

const mukta = Mukta({ weight: "700", subsets: ["latin"] });

export default function MainFooter() {
  return (
    <>
      <footer className=" relative z-10 bg-black text-white mt-20 py-10 sm:py-16  ">
        <div className=" max-w-7xl m-auto px-7 sm:px-10 lg:grid grid-cols-4 gap-14">
          <div className=" ">
            <span
              className={`${mukta.className} font-bold text-3xl tracking-wide`}
            >
              BillGenerator
            </span>
            <p className=" my-5 text-sm text-zinc-200 font-thin ">
              All logos and band names mentioned on this website are the
              property and trademarks of their respective owners; we are not
              affiliated with any brand or company in any manner and are for
              identification purposes only.
            </p>
            {/* <button className=" mt-7 mb-7 lg:mb-0 px-7  py-0.5 ring-1  ring-zinc-400  dark:ring-zinc-600 rounded-md flex items-center gap-2 ">
              English <IoChevronDownOutline />
            </button> */}
          </div>
          <div className="  col-span-2">
            <span className=" ">Tools</span>

            <div className=" grid grid-cols-2 gap-x-10 gap-y-3.5 text-sm  my-7 ">
              {AllBills.map((bill, i) => {
                return (
                  <Link
                    key={i}
                    className=" font-thin text-zinc-200  hover:text-yellow-400 transition-all "
                    href={bill.link}
                  >
                    {bill.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className=" lg:border-l border-zinc-700 lg:px-10 ">
            <span className=" ">Important Links</span>
            <nav className=" flex flex-col gap-3.5 my-7   text-sm">
              {supportLinks.map((link, i) => {
                return (
                  <Link
                    key={i}
                    className="font-thin text-zinc-200  hover:text-yellow-400 transition-all "
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className=" col-span-4">
            <div className=" flex  flex-col-reverse sm:flex-row justify-between gap-4">
              <p className=" font-thin  text-xs text-zinc-300 dark:text-zinc-400    ">
                © Copyright 2024 BillGenerator.co.in
              </p>
              <PayMethods />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

const supportLinks = [
  { url: "/about-us", title: "About Us" },
  {
    url: "/terms",
    title: "Terms of Services",
  },
  {
    url: "/privacy-policy",
    title: "Privacy Policy",
  },
  {
    url: "/disclaimer",
    title: "Disclaimer",
  },
  {
    url: "/contact-us",
    title: "Contact Us",
  },
  {
    url: "/refund-policy",
    title: "Refund Policy",
  },
  // {
  //   url: "/payment/status/success",
  //   title: "Test",
  // },
];
