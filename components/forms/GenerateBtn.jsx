"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CreditDialog from "./CreditDialog";

function clearForm() {
  // Get the form element
  var form = document.getElementById("BillForm");

  // Get all input elements within the form
  var inputs = form.getElementsByTagName(["input"]);

  // Loop through each input element
  for (var i = 0; i < inputs.length; i++) {
    // Check if the input element is not a button or submit
    if (inputs[i].type !== "button" && inputs[i].type !== "submit") {
      // Set the value of the input element to an empty string
      inputs[i].value = "";
    }
  }
}
export default function GenerateBtn({
  session,
  isGenerated,
  creditNeeded,
  GenerateInvoice,
}) {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const handleRefresh = () => {
    location.reload();
    scrollToTop();
  };
  return (
    <div>
      <div className=" space-x-3">
        {session?.user && !isGenerated && creditNeeded ? (
          <CreditDialog />
        ) : session?.user && !isGenerated ? (
          <Button type="submit">Generate PDF</Button>
        ) : session?.user && isGenerated ? (
          <Button disabled>Bill Generated</Button>
        ) : (
          <Link
            href={"/sign-in"}
            className=" inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Sign in to Generate PDF
          </Link>
        )}
        {!isGenerated ? (
          <Button asChild onClick={() => clearForm()} variant={"outline"}>
            <span>Clear</span>
          </Button>
        ) : (
          <Button asChild onClick={() => handleRefresh()}>
            <span>Generate new</span>
          </Button>
        )}
      </div>
    </div>
  );
}
