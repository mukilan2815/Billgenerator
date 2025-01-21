"use client";
import React from "react";
import { useSearchParams, redirect } from "next/navigation";
import Loader from "@/components/ui/loading";
export default function PayInit() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  if (url) {
    redirect(`${url}`);
  }

  return <Loader />;
}
