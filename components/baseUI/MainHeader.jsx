"use client";
import { useEffect, useState } from "react";
import { SiOpenlayers } from "react-icons/si";
import Button from "@mui/material-next/Button";
import { HiChevronDown } from "react-icons/hi";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import HeaderLinks from "./HeaderLinks";
import ProfileButton from "./ProfileButton";
import { HiMiniReceiptPercent } from "react-icons/hi2";
import MobileMenu from "./Mobilemenu";
import Feedback from "@/components/modals/feedback";
import { BiSolidOffer } from "react-icons/bi";

export default function MainHeader() {
  const { status, data: session } = useSession();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed z-50 left-0 right-0 top-0">
      <div className="py-1.5 bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 px-3 sm:px-10 text-white sm:text-center">
        <div className="flex space-x-4 space-y-1 items-center sm:justify-center w-fit m-auto">
          <div className="flex items-center text-xs sm:text-base">
            <BiSolidOffer size={28} className="shrink-0 mr-2 animate-pulse" />
            <p>
              Lifetime Credits for Just
              <strong className="ml-1 text-[#FFD700] sm:text-2xl">
                ₹249
              </strong>{" "}
              <strong>! Pay Once & Use Forever!</strong>🕒
            </p>
          </div>
          <div className="flex-grow">
            <Link
              href={"/payment"}
              className="whitespace-nowrap font-semibold bg-white rounded-full px-5 py-1 text-black hover:bg-gray-100"
            >
              CLAIM NOW 🔥
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`flex px-3 sm:px-10 h-14 items-center justify-between transition-all ${
          scrollY > 50 ? "backdrop-blur-lg bg-white/70" : "bg-transparent"
        }`}
      >
        <div className="flex h-full items-center gap-10">
          <div className="flex items-center gap-2">
            <span className="lg:hidden flex items-center">
              <MobileMenu />
            </span>
            <Link
              href={"/"}
              className="flex items-center h-full gap-1 text-black"
            >
              <HiMiniReceiptPercent size={26} className="text-black" />
              <span className="font-semibold text-xl">BillGenerator</span>
            </Link>
          </div>
          <div className="hidden lg:block">
            <HeaderLinks />
          </div>
        </div>
        <div className="flex gap-2 items-center text-sm">
          <Feedback userEmail={session?.user?.email} />
          {status === "authenticated" ? (
            <div className="flex items-center gap-5">
              <ProfileButton session={session} signOut={signOut} />
            </div>
          ) : (
            <Link
              href={"/sign-in"}
              className="cursor-pointer rounded-3xl ring-1 bg-zinc-800 text-white ring-slate-700 px-4 py-1 hover:bg-slate-50 hover:text-black"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

const links = [
  {
    name: "Bills",
    hasItem: true,
  },
  {
    name: "About",
    hasItem: false,
  },
  {
    name: "Pricing",
    hasItem: false,
  },
];
