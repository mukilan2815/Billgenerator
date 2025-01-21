"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
export default function PaymentSuccess() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(timer);
          router.push("/dashboard");
        }
        return prevCountdown - 1;
      });
    }, 1000);

    // Cleanup the timer if the component is unmounted before the timer ends
    return () => clearInterval(timer);
  }, [router]);

  return (
    <>
      <Script async defer id="sell-trackibg" strategy="lazyOnload">
        {`  gtag('event', 'conversion', {
      'send_to': 'AW-16575809362/8_oHCO_FrMYZENKO-989',
      'value': 249.0,
      'currency': 'INR',
      'transaction_id': ''
  });`}
      </Script>{" "}
      <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <CircleCheckIcon className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Payment Successful!
          </h1>
          <div className="mt-6 space-y-4">
            <div className="grid gap-2">
              <p className="text-muted-foreground">
                Redirecting to the dashboard within{" "}
                <span className=" text-primary font-medium">{countdown}</span>{" "}
                seconds.
              </p>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Continue to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
