"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { HiMiniReceiptPercent } from "react-icons/hi2";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Component() {
  const { status, data: session } = useSession();
  if (status === "authenticated") {
    redirect("/dashboard");
  }
  return (
    <div className=" flex items-center bg-white">
      <div className=" max-w-lg m-auto bg-white prose-lg w-full py-14 px-7  lg:px-16   relative">
        <div className=" flex flex-col gap-10 items-center">
          {" "}
          <HiMiniReceiptPercent size={80} className=" text-yellow-400" />
          <h1 className=" text-2xl sm:text-3xl font-medium sm:font-bold text-center leading-normal">
            Sign in to your <br />
            Bill Generator account!
          </h1>
        </div>
        <button
          onClick={() => signIn("google")}
          className="mt-6  inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90  px-4 py-2.5 w-full  border border-yellow-500 hover:bg-slate-100"
        >
          <FcGoogle size={26} className=" mr-2" />
          Continue with Google
        </button>
        <div className="mt-6 flex items-center justify-between">
          <div className="h-[1px] w-full bg-gray-300" />
          <span className="mx-4 text-sm text-gray-500">or</span>
          <div className="h-[1px] w-full bg-gray-300" />
        </div>
        <button
          disabled
          className=" inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90  px-4 py-3 mt-4 w-full bg-yellow-300 hover:bg-yellow-400 "
        >
          Sign in with Email/Phone
        </button>
        <p className="mt-7  text-sm text-gray-500">
          By signing up, you agree to our{" "}
          <Link className="text-blue-600" href="/terms">
            Terms
          </Link>
          ,{" "}
          <Link className="text-blue-600" href="/privacy-policy">
            Privacy Policy
          </Link>{" "}
          and <span className="text-blue-600">Cookie Use</span>
        </p>
        <p className="mt-4 text-sm text-center">
          Don't have an account? Just click on the <br />
          Continue with Google.
        </p>
      </div>
    </div>
  );
}
