import React from "react";
import Link from "next/link";
export default function DescriptionText() {
  return (
    <div className=" max-w-6xl m-auto my-20   px-7 border rounded-3xl p-7 bg-zinc-50 relative bg-gradient-to-r from-white  via-white  to-white   GuiBG">
      <div className=" relative z-10">
        <h2 className="text-3xl text-center font-semibold tracking-tighter sm:text-5xl ">
          Welcome to the Premier Bill Generator Hub!
        </h2>
        <p className=" prose-lg text-center mt-7">
          Generating bills can be a hassle if you don't have the right tool. You
          may get stuck in situations where you have to generate a formal
          receipt or a bill for your work, but all you find are those
          complicated paid tools that make this process ten times more
          difficult. By trying our online{" "}
          <Link href="/" className=" font-medium">
            Bill Generator tool
          </Link>
          , you will be able to generate bills for your invoices and use it for
          GST invoicing, fuel bills, rent bills, service bills, and much more.
          But do you need to pay for it? Not for the first few times. Coming to
          the best part of using our Bill Generator Online, you can use our tool
          anytime and every time and for your first few bills, we won't charge a
          penny from you. Likewise, the cherry on the cake is an easy process
          where you can skip those never-ending sign-up processes. Yes, it is
          highly secured and encrypted, so your data will be safe with you, and
          not even our team members can access it.
        </p>
      </div>
    </div>
  );
}
