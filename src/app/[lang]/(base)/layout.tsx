import { Locale } from "@/utils/i18n-config";
import { getDictionary } from "@/utils/get-dictionary";

import BaseLayoutUC from "./layout.uc";

export default async function BaseLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return <BaseLayoutUC dictionary={dictionary}>{children}</BaseLayoutUC>;
}
