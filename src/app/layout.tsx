import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "~/styles/globals.css";

import { Manrope } from "next/font/google";

import { Metadata } from "next";
import { Separator } from "~/components/ui/separator";
import { TRPCReactProvider } from "~/trpc/react";
import Footer from "./_components/common/footer/Footer";
import Navbar from "./_components/common/navbar/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Audiophile",
    default: "Home | Audiophile",
  },
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`font-sans ${manrope.variable} h-screen`}>
          <TRPCReactProvider>
            <Navbar />
            <div className="bg-black">
              <Separator className="bg-[#1b1b1b] md:mx-6 lg:mx-[10.3125rem]" />
            </div>
            {children}
            <Footer />
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
