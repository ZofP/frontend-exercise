import React from "react";

import { guardContent } from "@/actions/auth";

export default async function MyArticlesPage() {
  await guardContent();
  return <div>MyArticlesPage</div>;
}
