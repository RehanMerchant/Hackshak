import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { cn } from "@/lib/utils";
import BottomTab from "@/components/BottomTab/BottomTab";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hackshak",
  description: "Social Media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`,'')}
      >     <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <main className="flex">
        <div className="md:flex hidden lg:w-[220px] md:w-[60px] ">
        <Sidebar/>
        </div>
       <div>
        <div className="md:hidden h-[60px]">
        <Header/>
        </div>
   

 
{children}

      <div className="md:hidden flex w-full h-[60px]">
      <BottomTab/>
      </div>
      </div>
      </main>

        <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
