import Image from "next/image";
import MainHero from "@/components/home/MainHero";
import Features from "@/components/home/Features";
import MainFeatures from "@/components/home/MainFeatures";
import HowTo from "@/components/home/HowTo";
import BillsType from "@/components/home/BillsType";
import { getServerSession } from "next-auth";
import Info from "@/components/home/info";
import Faqs from "@/components/home/faqs";
import HomeDescription from "@/components/home/description-text";
import Advantages from "@/components/home/advnatages";
import Reviews from "@/components/home/reviews";
import { authOptions } from "@/lib/authOptions";

import { description, title } from "@/lib/page-meta";
export const metadata = {
  title: title.homepage,
  description: description.homepage,
  alternates: {
    canonical: "https://billgenerator.co.in",
  },
};
export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <MainHero session={session} />
      <div className=" sm:h-20"></div>
      <HomeDescription />
      <Advantages />
      <BillsType />

      {/* <Info /> */}
      {/* <Features /> */}

      <MainFeatures />
      <HowTo />
      {/* <Reviews /> */}
      <Faqs />
    </>
  );
}
