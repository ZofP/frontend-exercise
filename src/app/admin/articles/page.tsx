import React, { Suspense } from "react";

import { guardContent } from "@/actions/auth";
import { LoadingIndicator } from "@/components";
import { MyArticlesContent } from "@/features/administration/components/MyArticlesContent";

export default async function MyArticlesPage() {
  await guardContent();
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <MyArticlesContent />
    </Suspense>
  );
}
