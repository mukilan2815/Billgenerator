import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/baseUI/MainHeader";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/auth/SessionProvider";
import TopbarProvider from "@/components/topbarprovider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bill Generator",
  description: "Bill Generator",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={"text-neutral-800"} id="body">
        <Script
          strategy="lazyOnload"
          id="gtag-adword"
          src="https://www.googletagmanager.com/gtag/js?id=AW-16575809362"
        ></Script>

        {/* Google Tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16832148285"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16832148285');
      `,
          }}
        />

        <Script async defer id="google-adword" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-16575809362');
        `}
        </Script>
        <Script
          strategy="lazyOnload"
          id="gtag-analytics"
          src="https://www.googletagmanager.com/gtag/js?id=G-4KVZDMJ8NV"
        ></Script>
        <Script async defer id="google-analytics" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4KVZDMJ8NV');
        `}
        </Script>
        <TopbarProvider>
          <SessionProvider session={session}>
            <div>{children}</div>
            <Toaster position="top-center" richColors />
          </SessionProvider>
        </TopbarProvider>
      </body>
    </html>
  );
}
