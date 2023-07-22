"use client";

import { getDictionary } from "@/utils/get-dictionary";

export default function Home({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  return (
    <main>
      <h1>home</h1>
      <p>{dictionary.name}</p>
    </main>
  );
}
