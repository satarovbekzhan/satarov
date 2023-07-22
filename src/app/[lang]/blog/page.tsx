import { Metadata } from "next";

import { Locale } from "@/utils/i18n-config";
import { getDictionary } from "@/utils/get-dictionary";

import BlogUC from "./page.uc";

type Props = {
  params: { lang: Locale };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.blog.title,
  };
}

export default async function Blog({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return <BlogUC dictionary={dictionary} />;
}
