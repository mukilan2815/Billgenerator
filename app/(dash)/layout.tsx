import MainHeader from "@/components/baseUI/MainHeader";
import MainFooter from "@/components/baseUI/MainFooter";
import { redirect } from "next/navigation";
// import { SessionProvider, useSession } from "next-auth/react";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { status, data: session } = useSession();

  // if (status !== "authenticated") {
  //   redirect("/sign-in");
  // }
  return (
    <div>
      <MainHeader />
      <div className=" relative bg-gradient-to-b  py-20">
        {/* <div className="absolute inset-0 text-slate-200 [mask-image:linear-gradient(white,transparent)]">
          <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
            <defs>
              <pattern
                id=":S5:"
                width="128"
                height="128"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="50%"
              >
                <path
                  d="M0 128V.5H128"
                  fill="none"
                  stroke="currentColor"
                ></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#:S5:)"></rect>
          </svg>
        </div> */}
        {children}
      </div>
      <MainFooter />
    </div>
  );
}
