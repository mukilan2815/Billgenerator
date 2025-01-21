"use client";
import React from "react";
import { Next13ProgressBar } from "next13-progressbar";

const TopbarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Next13ProgressBar
        height="2px"
        color="#222222"
        options={{ showSpinner: true }}
        showOnShallow
      />
    </>
  );
};

export default TopbarProvider;
