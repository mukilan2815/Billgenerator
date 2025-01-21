import React from "react";
import { PiUserDuotone } from "react-icons/pi";

export default function Reviews() {
  return (
    <div className="max-w-6xl m-auto mt-20 sm:mt-36 mb-40 px-7">
      <div className="flex w-full flex-col items-center  gap-3 max-w-2xl m-auto mb-5 sm:mb-16">
        <h2 className="text-3xl text-center font-semibold tracking-tighter sm:text-5xl ">
          What people are talking about us!
        </h2>
      </div>
      <div className="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {reviewlist.map((e, i) => {
          return (
            <div key={i} className="break-inside-avoid">
              <div className="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900 relative">
                <div className="flex flex-col px-4 py-5 sm:p-6">
                  <div>
                    <q className="text-gray-600 dark:text-gray-300">
                      {e.review}
                    </q>
                    <div className="flex items-center gap-3 mt-6 relative">
                      <span className="relative inline-flex items-center justify-center flex-shrink-0 rounded-full h-10 w-10 text-base">
                        <PiUserDuotone size={32} />
                      </span>
                      <div>
                        <a
                          href="https://twitter.com/youyuxi"
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label="Evan You"
                          className="focus:outline-none"
                          tabindex="-1"
                        >
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          ></span>
                        </a>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">
                          {e.name}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {e.jobProfile}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const reviewlist = [
  {
    name: "Ananya Malhotra",
    jobProfile: "Accountant",
    review:
      "This tool has made invoicing a breeze. It's easy to use, and the automatic reminders help us stay on top of payments. Overall, it has significantly improved our accounting accuracy and efficiency.",
  },
  {
    name: "Vikas Joshi",
    jobProfile: "Small Business Owner",
    review:
      "This invoicing tool is a lifesaver. It simplifies bill creation, tracks payments, and even generates reports. My accounting has never been this organized and stress-free!",
  },
  {
    name: "Sunita Rao",
    jobProfile: "Freelancer",
    review:
      "Creating invoices is now effortless with this tool. It's intuitive and helps me manage my clients' payments efficiently. It has also reduced the time I spend on accounting tasks.",
  },
  {
    name: "Rohan Singh",
    jobProfile: "Financial Advisor",
    review:
      "This tool is fantastic! It makes invoicing straightforward and integrates well with our existing systems. It has improved our accounting processes and enhanced overall productivity.",
  },
  {
    name: "Meera Pillai",
    jobProfile: "Marketing Executive",
    review:
      "I love how easy this tool makes invoicing. The templates are professional, and the tracking features are excellent. It has streamlined our billing and improved our cash flow management.",
  },
  {
    name: "Sanjay Patil",
    jobProfile: "Entrepreneur",
    review:
      "This invoicing tool has transformed my business operations. It's easy to create and send invoices, and the reporting features have improved my financial oversight and planning.",
  },
  {
    name: "Aarti Bhatt",
    jobProfile: "Project Manager",
    review:
      "This tool is a must-have for any business. It simplifies billing, improves accounting accuracy, and saves a lot of time. The customer support is also top-notch, always ready to help.",
  },
  {
    name: "Rahul Deshmukh",
    jobProfile: "Retail Store Owner",
    review:
      "Using this tool has been a game-changer for my store. Invoicing is now quick and error-free, and the detailed analytics help me make better business decisions. Highly recommend!",
  },
];
