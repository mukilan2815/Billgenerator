import React from "react";
import { RiVisaFill } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa";
import { UPIIcon } from "@/components/icons/upiIcon";
export default function PayMethods() {
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex gap-4">
        <UPIIcon height={28} width={28} />
        <SiPhonepe size={28} />
        <FaGooglePay size={28} />
        <FaCcMastercard size={28} />
        <RiVisaFill size={28} />
      </div>
    </div>
  );
}
