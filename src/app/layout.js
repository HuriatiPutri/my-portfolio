import { Poppins, Italianno } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the required font weights
  variable: "--font-poppins", // Define a CSS variable
});

const italianno = Italianno({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italianno",
});

export const metadata = {
  title: "About Putri Huriati",
  description: "Putri Huriati's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <Suspense>
      <html lang="en">
        <body
          className={`${poppins.variable} ${italianno.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </Suspense>
  );
}
