import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomeFaqs() {
  return (
    <div className="  max-w-6xl m-auto mt-20 sm:mt-36 mb-40 px-7">
      <div className="flex w-full flex-col items-center  gap-3 max-w-2xl m-auto mb-5 sm:mb-16">
        <h2 className="text-3xl text-center font-semibold tracking-tighter sm:text-5xl ">
          Frequently Asked Questions
        </h2>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-5 pt-5">
        {faqs.map((item, i) => {
          return (
            <AccordionItem
              key={i}
              value={"item-" + (i + 1)}
              className=" border rounded-2xl px-5 sm:px-7 py-1 sm:py-2 data-[state=open]:border-zinc-900 data-[state=open]:bg-zinc-50 "
            >
              <AccordionTrigger className="  font-medium text-xl sm:text-2xl hover:no-underline">
                <p className=" text-left">{item.q}</p>
              </AccordionTrigger>
              <AccordionContent className=" text-base sm:text-lg text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export const faqs = [
  {
    q: "Is it safe to use this Bill Generator tool?",
    a: "Our online tool works on an algorithm designed primarily to create hassle-free tools for our users. We're 100% encrypted, and your data is safe with us.",
  },
  {
    q: "Do I need to create an account to use the tool?",
    a: "Yes, you will need to create an account so that you can see all the invoices you have generated every time you log in.",
  },
  {
    q: "Is the tool free or paid?",
    a: "Although it is a paid tool, we still offer 10 free credits to our users so that they can avail of some invoices free of cost and see if they like the designs.",
  },
  {
    q: "Do I need to download any app for the same?",
    a: "No, we're currently working on our app model. Thus, for the time being, users can create invoices using the website.",
  },
];
