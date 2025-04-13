import { PageContent } from "@/features/page";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PageContent>{children}</PageContent>;
}
