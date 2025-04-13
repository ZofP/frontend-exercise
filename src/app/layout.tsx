import "./globals.scss";

import { ReactNode } from "react";
import type { Metadata } from "next";

import { Navbar } from "@/features/navigation";
import { PageContent } from "@/features/page";

export const metadata: Metadata = {
  title: "Cats Articles | Frontend Exercise",
  description: "Frontend Exercise in Next.js",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <PageContent>{children}</PageContent>
      </body>
    </html>
  );
}
