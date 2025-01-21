import MainHeader from "@/components/baseUI/MainHeader";
import MainFooter from "@/components/baseUI/MainFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <MainHeader />
      <div className=" relative bg-gradient-to-b mt-20  ">{children}</div>
      <MainFooter />
    </div>
  );
}
