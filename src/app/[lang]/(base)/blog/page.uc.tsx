"use client";

import { Stack, Text, useColorModeValue as mode } from "@chakra-ui/react";

import { getDictionary } from "@/utils/get-dictionary";

export default function Blog({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  return (
    <Stack
      as={"main"}
      flex={1}
      spacing={6}
      px={{ base: 6, md: 12 }}
      pb={{ base: 6, md: 12 }}
      bgColor={mode("white", "gray.900")}
    >
      <Text
        fontSize={"3xl"}
        whiteSpace={"pre-wrap"}
        maxW={"container.md"}
        color={mode("black", "gray.300")}
      >
        {dictionary.blog.text}
      </Text>
    </Stack>
  );
}
