import React from "react";
import { BsFiletypePdf } from "react-icons/bs";
import { FaHornbill } from "react-icons/fa";
import { IoReceiptOutline } from "react-icons/io5";
import { TbCurrencyRupee, TbLayoutDashboard } from "react-icons/tb";

export default function Features() {
  return (
    <div className=" max-w-6xl m-auto my-14 border  border-slate-200 rounded-3xl   relative z-20  bg-zinc-100 ">
      {/* <span className="  rotate-6 absolute -top-7 -left-14 text-green-300">
        <IoReceiptOutline size={120} />{" "}
      </span> */}
      <div className="   overflow-hidden rounded-3xl ">
        <div className=" p-10 ">
          <div className=" grid md:grid-cols-3 gap-14 ">
            <div className=" h-full flex flex-col  items-center justify-center">
              <div className=" max-w-sm">
                <h2 className=" text-4xl ">What you get</h2>
                <p className=" my-3 text-sm font-light text-slate-600 max-w-sm ">
                  We've made bill generation easy for you.
                </p>
              </div>
            </div>
            <ul className=" col-span-2 grid sm:grid-cols-2 gap-5">
              {featureList.map((feature, i) => {
                return (
                  <li
                    key={i}
                    className=" bg-white p-5  drop-shadow-xl shadow-black/10 rounded-xl"
                  >
                    <span className="  bg-yellow-300 bg-opacity-50 h-8 w-8 rounded-full flex items-center justify-center">
                      {feature.icon}
                    </span>
                    <h3 className="  text-lg mb-2 mt-3">{feature.name}</h3>
                    <p className=" text-sm font-light text-slate-600 line-clamp-4">
                      {feature.desc}
                    </p>
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

const featureList = [
  {
    name: "Personalization at Your Fingertips",
    desc: "With BillGenerator, adjusting your financial documents to fit your brand and preferences is a breeze. From logos to currency, customize to your heart's content, effortlessly.",
    icon: <FaHornbill />,
  },
  {
    name: "Fast, Reliable Document Creation",
    desc: "Say goodbye to the painstaking process of manual document preparation. QuickBillPro enables you to create precise and professional documents quickly, freeing up your time for more important tasks.",
    icon: <TbLayoutDashboard />,
  },
  {
    name: "Accessible Everywhere",
    desc: "Our platform is designed for your convenience. Access your bills, invoices, and receipts from any device, anywhere, ensuring you're always prepared, whether you're at home or on the move.",
    icon: <BsFiletypePdf />,
  },
  {
    name: "Secure and Dependable",
    desc: "We value your trust and ensure the utmost security for your data. With BillGenerator, your information is guarded with the latest security protocols, ensuring confidentiality and integrity.",
    icon: <TbCurrencyRupee />,
  },
];
