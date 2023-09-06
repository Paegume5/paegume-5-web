import NavBar from "@components/NavBar";
import "@styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paegume 5",
  description: "Paegume 5 NGO Organization",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/logo.png" />
      </head>
      <body className={`${poppins.className} bg-primary-bg`}>{children}</body>
    </html>
  );
}
