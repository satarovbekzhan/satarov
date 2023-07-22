"use client";

import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
  ColorModeScript,
} from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import NextTopLoader from "nextjs-toploader";

import theme from "@/theme";

export default function LangLayout({
  children,
  cookies,
}: {
  children: React.ReactNode;
  cookies: string;
}) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <CacheProvider>
      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <NextTopLoader color={"red"} showSpinner={false} height={1} />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
