import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import "jodit/build/jodit.min.css"; // need to install jodit for this to work
import "./globals.css";
import Navbar from "@/components/general/navbar/Navbar";
import Footer from "@/components/general/Footer";
import SignInModal from "@/components/modals/SignInModal";
import SearchModal from "@/components/modals/SearchModal";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["300","400","500","600","700"]
});

export const metadata: Metadata = {
  title: "Tech Blog",
  description: "SJR version of Egbon Tech Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-background`}
      >
        <Navbar />
        {children}
        <Footer />
        <SignInModal />
        <SearchModal />
        <Toaster />
      </body>
    </html>
  );
}
