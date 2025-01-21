import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
export default function Info() {
  return (
    <div className=" max-w-6xl m-auto my-20   grid sm:grid-cols-2 gap-4 lg:gap-7 sm:gap-20 px-7">
      <div className=" relative hidden sm:block">
        <div className="  ">
          <Image
            src={"/images/home/online-bill-generator.webp"}
            height={1668}
            width={2938}
            className=" w-full"
            alt="online bill generator"
          />
        </div>
      </div>
      <div>
        <div className=" space-y-7">
          <h2 className=" text-3xl lg:text-5xl font-medium">
            See what you get
          </h2>
          <p className=" text-muted-foreground">
            How you can benifit using Billgenerator for bill creation. We make
            it easy from creating bills to sending it to your email.
          </p>
          <ToggleData />
        </div>
      </div>
    </div>
  );
}

export function ToggleData() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-5 lg:pt-7">
      {tdata.map((e, i) => {
        return (
          <AccordionItem
            value={"item-" + (i + 1)}
            key={i}
            className=" border rounded-2xl px-7 py-1 data-[state=open]:bg-zinc-50 "
          >
            <AccordionTrigger className=" text-left font-medium text-xl lg:text-2xl">
              {e.title}
            </AccordionTrigger>
            <AccordionContent className=" text-lg text-muted-foreground">
              {e.description}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

const tdata = [
  {
    title: "Various reciept templates",
    description:
      "Now you can grnerate bills in various formats as per your needs. Bill reciept like fuel, rent, madical, Restaurant and many more.",
  },
  {
    title: "Download reciept as PDF",
    description:
      "All bill reciept you generate are avilable for download as PDF file.",
  },
  {
    title: "Get in your mailbox",
    description:
      "When you generate a bill reciept you get the PDF automatically recieved on your mailbox.",
  },
];
