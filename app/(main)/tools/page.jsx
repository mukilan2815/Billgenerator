import { description, title } from "@/lib/page-meta";
import ToolsComp from "./tools-page-comp";
export const metadata = {
  title: title.tools_page,
  description: description.tools_page,
  alternates: {
    canonical: "https://billgenerator.co.in/tools",
  },
};
export default async function CardHoverEffectDemo() {
  return <ToolsComp />;
}
