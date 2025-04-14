import "./globals.scss";

import { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";

import { PageContent } from "@/components";
import { Navbar } from "@/features/navigation";

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
        <NextIntlClientProvider>
          <Navbar />
          <PageContent>{children}</PageContent>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
