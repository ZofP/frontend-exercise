import "./globals.scss";

import type { Metadata } from "next";

import { Navbar } from "@/features/navigation";

export const metadata: Metadata = {
  title: "Cats Articles | Frontend Exercise",
  description: "Frontend Exercise in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
