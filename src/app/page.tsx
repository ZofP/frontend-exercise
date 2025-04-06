import { useTranslations } from "next-intl";

import { Typography } from "@/components";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="flex justify-center items-center h-screen">
      <Typography variant="h1">{t("heading")}</Typography>
    </div>
  );
}
