import React from "react";

import { guardContent } from "@/actions/auth";
import { MyArticlesContent } from "@/features/administration/components/MyArticlesContent";

export default async function MyArticlesPage() {
  await guardContent();
  return <MyArticlesContent />;
}
