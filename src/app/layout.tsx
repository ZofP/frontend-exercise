import "./globals.scss";

import { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";

import { getAccessToken } from "@/actions/auth";
import { PageContent } from "@/components";
import { Navbar } from "@/features/navigation";
import { ReduxProvider } from "@/lib/redux";

export const metadata: Metadata = {
  title: "Cats Articles | Frontend Exercise",
  description: "Frontend Exercise in Next.js",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const token = await getAccessToken();

  console.log({ token });

  return (
    <html lang="en">
      <body className="antialiased">
        <ReduxProvider preloadedState={{ auth: { isAuthenticated: !!token } }}>
          <NextIntlClientProvider>
            <Navbar />
            <PageContent>{children}</PageContent>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
