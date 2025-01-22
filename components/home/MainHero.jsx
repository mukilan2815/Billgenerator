import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { CiReceipt } from "react-icons/ci";
import { HiMiniReceiptPercent } from "react-icons/hi2";
import { HiOutlineHand } from "react-icons/hi";
import { IBM_Plex_Mono } from "next/font/google";
import {
  Poppins,
  Inter,
  Roboto,
  Nunito,
  Source_Sans_3,
} from "next/font/google";
const imb_plex_mono = IBM_Plex_Mono({ weight: "600", subsets: ["cyrillic"] });
const poppins = Poppins({ weight: "400", subsets: ["devanagari"] });
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
const nunito = Nunito({ weight: ["400", "600", "700"], subsets: ["latin"] });
const sourceSansPro = Source_Sans_3({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export default function MainHero({ session }) {
  return (
    <>
      <div className=" -mt-14 text-white   bg-accent h-full  relative overflow-x-clip">
        <div className="absolute inset-0 bg-[url(/svg/grid.svg)]  bg-[transform(rotate(120deg)]  top-14 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        {/* <span className="  invisible lg:visible absolute top-20 text-yellow-900 opacity-50 left-3">
          {" "}
          <CiReceipt size={150} />
        </span> */}
        <div className=" px-5 max-w-6xl m-auto  pt-44 pb-20 relative  z-20">
          <h1
            className={`${inter.className} lg:-ml-4 text-3xl sm:text-5xl font-bold   tracking-normal  max-w-3xl `}
          >
            Welcome to Bill Generator👋🏻{" "}
          </h1>
          <h2 className=" mt-4 sm:mt-7 text-xl sm:text-3xl font-medium">
            A Reliable Online Bill Generator Tool
          </h2>
          <p className="  max-w-xl my-5 text-sm sm:text-xl tracking-wider ">
            How about when you're in a rush to generate bills, invoices, and
            more but find no right and free solution for this? If this is your
            issue, let us introduce you to this easy and functioning tool, Bill
            Generator.
          </p>
          <ul className=" text-lg ml-1 font-light max-w-sm mt-5 mb-12 list-disc list-inside">
            <li>Generate bill in many formats.</li>
            <li>Get them directly to email.</li>
            <li>Save as PDF.</li>
          </ul>
          <div className=" flex   flex-col  sm:flex-row  sm:space-x-6 space-y-6 sm:space-y-0">
            <Link
              href={"/tools"}
              className=" transition-all ring-1 ring-slate-800 px-10 rounded-3xl py-2 bg-zinc-800 font-medium text-lg text-white hover:bg-white hover:text-black w-fit"
            >
              {!session ? "Try Now!" : "Generate new bill"}
            </Link>
            {!session && (
              <Link
                href={"/sign-in"}
                className=" transition-all ring-1 bg-red-500 ring-slate-800 italic  px-10 rounded-3xl py-2  text-lg flex items-center gap-2 hover:bg-red-800 w-fit"
              >
                Join and get 10 Credits Free <BsArrowRight />
              </Link>
            )}
          </div>
        </div>
        <Image
          alt={"Online Bill Generator"}
          src="/images/home/hero-image.png"
          height={1121}
          width={1800}
          priority={true}
          loading="eager"
          className=" absolute z-10 -right-32 -bottom-8 rounded-2xl max-w-3xl w-full    hidden lg:block   "
        />
      </div>
      {/* <div className=" my-5 h-20 bg-zinc-800 relative"></div> */}
    </>
  );
}
