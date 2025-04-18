import { PropsWithChildren } from "react";

import { guardContent } from "@/actions/auth";

export default async function AdminLayout({ children }: PropsWithChildren) {
  await guardContent();

  return children;
}
