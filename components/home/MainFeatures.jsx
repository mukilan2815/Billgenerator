import React from "react";
import { BsFiletypePdf } from "react-icons/bs";
import { FaHornbill } from "react-icons/fa";
import { IoReceiptOutline } from "react-icons/io5";
import { TbCurrencyRupee, TbLayoutDashboard } from "react-icons/tb";

export default function Features() {
  return (
    <div className=" max-w-6xl m-auto my-14  relative z-20   ">
      {/* <span className="  rotate-6 absolute -top-7 -left-14 text-green-300">
        <IoReceiptOutline size={120} />{" "}
      </span> */}
      <div className="   overflow-hidden rounded-3xl ">
        <div className=" p-7 ">
          <h2 className="text-3xl text-center font-semibold tracking-tighter sm:text-5xl ">
            Why our Online Bill Generator?
          </h2>
          <ul className=" col-span-2 grid sm:grid-cols-2 md:grid-cols-3 gap-7 mt-20">
            {featureList.map((feature, i) => {
              return (
                <li key={i} className=" bg-zinc-100 px-7  py-7 ">
                  {/* <span className="  bg-yellow-300 bg-opacity-50 h-8 w-8 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </span> */}
                  <h3 className="  text-xl  font-medium mb-2 mt-3">
                    {feature.name}
                  </h3>
                  <p className=" font-light text-slate-600 ">{feature.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

const featureList = [
  {
    name: "Affordable",
    desc: "All our bills are almost 50% cheaper than any of our competitor's Bill Generator Tools.",
    icon: <FaHornbill />,
  },
  {
    name: "24/7 Customer Service",
    desc: "You will get 24/7 customer support from our team. Thus, if you face any issues while creating an invoice, you can get assistance without any problems.",
    icon: <TbLayoutDashboard />,
  },
  {
    name: "Anytime Access",
    desc: "Irrespective of when you want to generate an invoice for you or your business, you can easily access these tools anytime.",
    icon: <BsFiletypePdf />,
  },
  {
    name: "User-friendly",
    desc: "If you want to create an invoice for yourself, you don't have to go through many steps. All you need is to follow the three-click steps and it'll be done.",
    icon: <TbCurrencyRupee />,
  },
  {
    name: "Variations",
    desc: "Our tool has various tools to offer per your needs. You can choose any that meets your needs.",
    icon: <TbCurrencyRupee />,
  },
  {
    name: "Professional Bills",
    desc: "Once you use our bills, you will know the difference between the professional and the basic invoices. We have the most professionally designed invoices.",
    icon: <TbCurrencyRupee />,
  },
];
