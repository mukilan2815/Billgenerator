"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AllBills } from "@/components/baseUI/all-bills";

export default function CardHoverEffectDemo() {
  return (
    <div className=" py-20">
      <div className="max-w-6xl mx-auto px-8">
        <HoverEffect items={AllBills} />
      </div>
    </div>
  );
}
