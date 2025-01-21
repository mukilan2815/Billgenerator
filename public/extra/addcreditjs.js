// "use client";
// import React from "react";
// import { Checkbox } from "@/components/ui/checkbox";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { checkEnvironment } from "@/lib/checkenvironment";
// import { AiOutlineLoading } from "react-icons/ai";
// import Link from "next/link";
// import { BiSolidOffer } from "react-icons/bi";
// import { Slash } from "lucide-react";
// import { Dosis } from "next/font/google";
// const dosis_sans = Dosis({ weight: "700", subsets: ["latin"] });
// import PayTimer from "./PayTimer";
// import PayMethods from "@/components/Payment/PayMethods";
// export default function AddCredit({ user }) {
//   const activeOffers = offers.filter((o) => o.active);
//   const inactiveOffers = offers.filter((o) => !o.active);
//   const [payment_info, setPayment_info] = useState(activeOffers[0]);
//   const [isChecked, setIsChecked] = useState(false);
//   const [clicked, setClicked] = useState(false);

//   return (
//     <div className="max-w-7xl m-auto my-36 relative px-5 sm:px-10">
//       <h1 className="text-3xl font-medium my-7">Add Credit</h1>
//       <h2 className="text-zinc-500 my-4">Credit offers</h2>

//       <ul className="grid grid-cols-2 lg:grid-cols-4 max-w-2xl gap-4">
//         {activeOffers.map((e, i) => (
//           <li
//             key={i}
//             className={`${
//               payment_info.amount == e.amount
//                 ? "bg-white ring-2 ring-blue-500"
//                 : "bg-zinc-100"
//             } px-5 py-2 rounded-2xl flex flex-col gap-2 cursor-pointer`}
//             onClick={() => setPayment_info(e)}
//           >
//             <div className=" flex items-center justify-between">
//               <span className="text-zinc-500">₹{e.amount}</span>{" "}
//               <BiSolidOffer size={40} className=" text-yellow-400 " />
//             </div>
//             <div className="flex justify-between items-center relative">
//               <span className=" italic font-semibold  text-sm">Unlimited</span>
//               <div className=" flex flex-col">
//                 <span className="text-xl">{e.offer}%</span>
//                 <span className=" text-xs -mt-1">Off</span>
//               </div>
//             </div>
//           </li>
//         ))}
//         {inactiveOffers.map((e, i) => (
//           <li
//             key={i}
//             className=" cursor-not-allowed bg-zinc-100 px-5 py-2 rounded-2xl flex flex-col gap-2 relative"
//           >
//             <div className=" absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center -rotate-12">
//               <Slash
//                 strokeWidth={0.5}
//                 size={120}
//                 className=" text-rose-100 absolute -top-3 left-0 right-0 bottom-0 flex items-center justify-center z-10 "
//               />
//               <Slash
//                 strokeWidth={0.5}
//                 size={120}
//                 className="  text-zinc-800  ml-1 absolute -top-3 left-0 right-0 bottom-0 flex items-center justify-center "
//               />
//             </div>
//             <span className="text-zinc-500">₹{e.amount}</span>
//             <div className="flex justify-between items-center">
//               <span className="text-xs">
//                 {e.credit}
//                 <br /> Credits
//               </span>
//               <span className="text-2xl">{e.offer}%</span>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div className=" grid lg:grid-cols-2">
//         <div>
//           <p className="text-green-500 mt-10 ">
//             Grab this limited time special offer before it ends.
//           </p>
//           <form
//             action={() => Checkout(user, payment_info, setClicked)}
//             className="my-10"
//           >
//             <span className="block text-zinc-500 mb-2">Amount</span>
//             <div className="flex space-x-3 items-center">
//               <input
//                 readOnly
//                 type="number"
//                 value={payment_info.amount}
//                 className="border border-zinc-300 rounded-lg px-2 py-1 w-28"
//               />
//               <div>Buy unlimited credits for ₹ {payment_info.amount}</div>
//             </div>
//             <div className="my-10">
//               <span className="block text-zinc-500 mb-2">
//                 Have A Coupon Code?
//               </span>
//               <div className="flex space-x-3 items-center">
//                 <input
//                   type="text"
//                   className="border border-zinc-300 rounded-lg px-2 py-1 w-28"
//                 />
//                 <div>Apply</div>
//               </div>
//             </div>

//             <div className="my-10 space-y-10">
//               <div className="flex items-center space-x-2 my-10">
//                 <Checkbox
//                   required={true}
//                   id="terms"
//                   checked={isChecked}
//                   onCheckedChange={() => setIsChecked((prev) => !prev)}
//                 />
//                 <label
//                   htmlFor="terms"
//                   className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                 >
//                   I agree with terms and conditions
//                 </label>
//               </div>

//               <div className="mt-5">
//                 {user ? (
//                   <Button disabled={clicked} className="w-28">
//                     {clicked ? (
//                       <AiOutlineLoading size={20} className="animate-spin" />
//                     ) : (
//                       "Add credit"
//                     )}
//                   </Button>
//                 ) : (
//                   <Button asChild className="w-28">
//                     <Link href={"/sign-in"}>Add credit </Link>
//                   </Button>
//                 )}
//               </div>
//             </div>
//           </form>
//         </div>
//         <div className=" hidden  relative  lg:flex lg:items-center">
//           {/* <PiArrowBendLeftUpDuotone
//             size={180}
//             className=" text-green-400 absolute -left-60  top-48  -rotate-[120deg]"
//           /> */}
//           <div className=" relative bg-yellow-400 px-10 py-7 rounded-[36px]">
//             <h2
//               className={`${dosis_sans.className} first-letter:text-4xl sm:first-letter:text-6xl text-3xl sm:text-4xl  leading-loose tracking-wide  max-w-md mb-7`}
//             >
//               Generate Invoices & Bills Instantly in just 1-Click
//             </h2>
//             <h3
//               className={`${dosis_sans.className}  text-3xl sm:text-2xl  leading-loose tracking-wide  max-w-md mb-7`}
//             >
//               Add Credits now and generate Professional Invoices in Seconds.
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export async function Checkout(user, payment_info, setClicked) {
//   setClicked(true);
//   const res = await fetch(checkEnvironment().concat("/api/payment/initiate"), {
//     cache: "no-store",
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       user: user,
//       payment_info: payment_info,
//     }),
//   });
//   const data = await res.json();
//   console.log("data", data);
//   if (res.ok) {
//     setClicked(false);
//     const url = data.url;
//     console.log("url", url);
//     window.location.href = checkEnvironment().concat(
//       "/payment/initiate?url=" + url
//     );
//   } else {
//     setClicked(false);
//   }
// }

// export const offers = [
//   {
//     amount: 69,
//     credit: 1000,
//     offer: 93,
//     active: true,
//   },
//   {
//     amount: 200,
//     credit: 220,
//     offer: 10,
//     active: false,
//   },
//   {
//     amount: 500,
//     credit: 575,
//     offer: 15,
//     active: false,
//   },
//   {
//     amount: 1000,
//     credit: 1200,
//     offer: 20,
//     active: false,
//   },
// ];
