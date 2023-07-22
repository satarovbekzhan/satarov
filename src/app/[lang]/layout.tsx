import { headers } from "next/headers";
import { Metadata } from "next";

import { i18n, Locale } from "@/utils/i18n-config";
import { getDictionary } from "@/utils/get-dictionary";

import RootLayoutUC from "./layout.uc";

type Props = {
  params: { lang: Locale };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getCookies() {
  return headers().get("cookie") ?? "";
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.root.title,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const cookies = await getCookies();
  return (
    <html lang={params.lang}>
      <body
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <RootLayoutUC cookies={cookies}>{children}</RootLayoutUC>
      </body>
    </html>
  );
}
