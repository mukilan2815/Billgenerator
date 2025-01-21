import React from "react";
import { checkEnvironment } from "@/lib/checkenvironment";
import StatisticsComp from "./statistic-com";
const fetchStats = async function (userid) {
  const response = await fetch(
    checkEnvironment().concat(`/api/user/allusers`),
    { cache: "no-store" }
  );
  return await response.json();
};
export default async function Statistics() {
  const data = await fetchStats();
  return <StatisticsComp data={data} />;
}
