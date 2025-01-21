import React from "react";
import SignIn from "@/components/auth/SignIn";

import { TfiCheckBox } from "react-icons/tfi";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import { PiArrowBendLeftUpDuotone } from "react-icons/pi";
import { Dosis } from "next/font/google";
const dosis_sans = Dosis({ weight: "700", subsets: ["latin"] });

import { description, title } from "@/lib/page-meta";
export const metadata = {
  title: title.sign_in,
  description: description.sing_in,
  alternates: {
    canonical: "https://billgenerator.co.in/sign-in",
  },
};
export default function page() {
  return (
    <div className=" max-w-7xl m-auto  relative   px-0 lg:px-10 xl:px-0  my-28">
      <div className=" relative px-7">
        <div className="  bg-yellow-400 w-full sm:w-[45%] h-screen inset-0 absolute  top-3 rounded-3xl"></div>
        <div className=" grid md:grid-cols-2  gap-y-5">
          <div className=" flex items-center px-5 sm:px-16 py-20">
            <div className=" relative ">
              <h2
                className={`${dosis_sans.className} first-letter:text-4xl sm:first-letter:text-6xl text-3xl sm:text-5xl  leading-relaxed tracking-wide  max-w-md mb-7`}
              >
                {" "}
                Generate Unlimited Bills & Invoices.
              </h2>
              <p
                className={`${dosis_sans.className} first-letter:text-4xl sm:first-letter:text-5xl text-2xl sm:text-4xl  leading-relaxed tracking-wide  max-w-md mb-7`}
              >
                Get 10 Credits for FREE when you Sign Up!
              </p>

              <span className=" text-5xl text-emerald-400">Join now!</span>
              <ul className=" my-7 list-inside text-lg space-y-2">
                {bills.map((e, i) => {
                  return (
                    <li key={i}>
                      <TfiCheckBox size={22} className=" mr-2" /> {e}
                    </li>
                  );
                })}
                <li className=" font-medium text-xl text-emerald-600">
                  <Link href="/tools">
                    <LuExternalLink size={22} className=" mr-2" /> More.
                  </Link>
                </li>
              </ul>
              <PiArrowBendLeftUpDuotone
                size={200}
                className=" hidden lg:block z-10 text-emerald-400 absolute top-64 -right-36  rotate-[70deg]"
              />
            </div>
          </div>
          <SignIn />
        </div>
      </div>
    </div>
  );
}

const bills = [
  "Fuel Receipt",
  "LTA Receipt",
  "Rent Receipt",
  "Restaurant Bill",
];
