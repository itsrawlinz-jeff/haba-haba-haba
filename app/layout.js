import Loading from "@/components/Loading";
import "./globals.scss";
import Navbar from "@/components/Navbar";
import { Outfit, Engagement, Didact_Gothic } from "next/font/google";
import { Suspense } from "react";
import Footer from "@/components/Footer";

const engagement = Engagement({
  weight: "400",
  variable: "--font-engagement",
  display: "swap",
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
  subsets: ["latin"],
});

const didact_gothic = Didact_Gothic({
  weight: "400",
  variable: "--font-didact-gothic",
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Haba",
  description: "For the Smart, the Elite, and the Wealthy",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${engagement.variable} ${didact_gothic.variable}`}
    >
      <body>
        <Suspense fallback={<Loading />}>{children}</Suspense>
       
      </body>
    </html>
  );
}
