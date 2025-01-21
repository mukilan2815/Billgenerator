import React from "react";
import User from "./user";
import Vendor from "./vendor";
export default function page() {
  return (
    <div className=" my-20   gap-10  max-w-5xl m-auto">
      <User /> <Vendor />
      <div className=" my-20 ">
        <h2 className=" font-bold text-2xl">Project Terms</h2>
        <ul className=" my-4 text-lg">
          <li className="">
            - Project duration upto 3 months from starting date.
          </li>
          <li className="">
            - Frequent Communiaction will required for project updats and
            modifications.
          </li>
          <li className="">
            - Payment through PayPal. Total payment terms 7 including advance.
            10% Advance payment and 15 days duration for next payments upon work
            proggress. 6 payments (60% of full amount) for ongoing progress
            until project complete. 40% after completion.
          </li>
          <li className="">
            - 1 month extended support will be provided for testing, bug fix,
            modifications and adding extra small features.{" "}
          </li>
          <li className="">
            - If any code issue accure after going live, that will be fixed
            without any cost.
          </li>
        </ul>

        <div className=" text-right mt-7">
          <p className="">
            Thanks <br /> Regards - Bhaskar Barma
          </p>
        </div>
      </div>
    </div>
  );
}
