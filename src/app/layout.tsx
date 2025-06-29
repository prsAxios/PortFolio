import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Contact from "@/components/contact/Contact";
import { Plus_Jakarta_Sans } from "next/font/google";
import CustomCursor from "../components/CustomCursor";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "600", "700"],
});



export const metadata: Metadata = {
  title: "Pradeep Suthar",
  description: "Portfolio of Pradeep Suthar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={jakarta.className}
      >
        <Header />
        <CustomCursor />
        <main className="main-wrapper">
          {children}
        </main>
        <Contact />
      </body>
    </html>
  );
}
