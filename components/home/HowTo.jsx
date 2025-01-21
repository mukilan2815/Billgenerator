import { Separator } from "@/components/ui/separator";

export default function HowTo() {
  return (
    <div className=" bg-accent py-10 text-white relative">
      <div className=" max-w-6xl m-auto sm:my-14  relative z-20 p-7 sm:p-10   ">
        <div className="space-y-4">
          <h2 className="text-3xl  font-semibold  sm:text-5xl tracking-wide ">
            How Online Bill Generator Works?
          </h2>
          <p className=" text-sm sm:text-lg text-muted  max-w-4xl tracking-wide">
            The Online Bill Generator is a simple and effective tool designed to
            streamline the creation of invoices and receipts. To get started,
            visit https://billgenerator.co.in and follow the steps -
          </p>
        </div>
        <Separator className="my-8" />
        <div className="grid sm:grid-cols-3 gap-7 text-lg  pt-7 sm:pt-16">
          {steps.map((e, i) => {
            return (
              <div key={i} className=" relative">
                <span className=" font-mono absolute -left-7 -top-5  sm:-top-16 text-7xl sm:text-[120px] font-extrabold  text-white/20">
                  {i + 1}
                </span>
                <div className=" relative flex flex-col text-sm sm:text-base">
                  <strong className=" text-lg sm:text-xl">{e.title}</strong>{" "}
                  {e.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export const steps = [
  {
    title: "Choose your desired template",
    description:
      "From the given options, select a template that meets your requirements.",
  },
  {
    title: "Add all the details",
    description:
      "You will fill in details such as your name, receiver's name, amount, company address, and terms and conditions as per your requirements.",
  },
  {
    title: "Generate and download",
    description:
      "Once you have rechecked all your details, you have to click generate and your bill will be generated. To download it, you can tap on the Download button and download it in PDF format.",
  },
];
