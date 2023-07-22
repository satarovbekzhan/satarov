"use client";

import { getDictionary } from "@/utils/get-dictionary";

export default function Blog({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  return (
    <main>
      <h1>blog</h1>
      <p>{dictionary.name}</p>
    </main>
  );
}
