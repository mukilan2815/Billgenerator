import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <WalletIcon className="h-16 w-16 text-red-500" />
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Payment Failed</h1>
            <p className="text-gray-500 dark:text-gray-400">
              There was an issue processing your payment. Please try again.
            </p>
          </div>
        </div>
        <Button className="w-full" asChild>
          <Link href={"/payment"}>Try Again</Link>
        </Button>
      </div>
    </div>
  );
}

function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}
