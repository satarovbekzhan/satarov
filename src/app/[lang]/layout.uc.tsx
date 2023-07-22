"use client";

import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import NextTopLoader from "nextjs-toploader";

import theme from "@/theme";

export default function RootLayout({
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
        <NextTopLoader color={"#000"} showSpinner={false} height={1} />
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
