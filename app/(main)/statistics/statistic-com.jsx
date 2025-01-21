"use client";
import React from "react";

export default function StatisticsComp({ data }) {
  // Function to convert UTC to IST
  function convertUTCtoIST(dateStr) {
    const date = new Date(dateStr);
    const istOffset = 5.5 * 60 * 60 * 1000; // IST is UTC + 5:30
    const istDate = new Date(date.getTime() + istOffset);
    return istDate.toISOString().slice(0, 10); // Return date in 'YYYY-MM-DD' format
  }

  // Function to filter by createdAt date in IST
  function filterByDateInIST(data, date) {
    return data.filter((item) => convertUTCtoIST(item.createdAt) === date);
  }

  // Example usage
  const dateToFilter = "2024-05-23";
  const filteredData = filterByDateInIST(data, dateToFilter);
  console.log(filteredData);

  return <div className=" max-w-7xl m-auto  p-6 sm:p-10 my-20">Statistics</div>;
}
