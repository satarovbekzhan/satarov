import { Metadata } from "next";

import { Locale } from "@/utils/i18n-config";
import { getDictionary } from "@/utils/get-dictionary";

import HomeUC from "./page.uc";

type Props = {
  params: { lang: Locale };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.home.title,
  };
}

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return <HomeUC dictionary={dictionary} />;
}
