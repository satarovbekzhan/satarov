"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  useColorMode,
  useColorModeValue as mode,
} from "@chakra-ui/react";

import { i18n, Locale } from "@/utils/i18n-config";
import { getDictionary } from "@/utils/get-dictionary";
import { getFlagImageLink } from "@/utils/get-flag-image-link";

const languageNames = {
  en: "English",
  de: "Deutsch",
  ru: "Русский",
  kg: "Кыргызча",
};

export default function BaseLayout({
  children,
  dictionary,
}: {
  children: React.ReactNode;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  const pathname = usePathname();
  const params = useParams();
  const { colorMode, toggleColorMode } = useColorMode();

  const lang = params.lang as Locale;

  const locales = i18n.locales;

  return (
    <>
      <Box p={{ base: 6, md: 12 }} bgColor={mode("white", "gray.900")}>
        <Flex
          align={"flex-start"}
          justify={"space-between"}
          gap={{ base: 6, md: 3 }}
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Link href={"/"}>
            <Heading mb={12} color={mode("black", "gray.200")}>
              {dictionary.name}
            </Heading>
          </Link>
          <Flex gap={{ base: 8, md: 3 }} justify={"flex-end"}>
            <Button
              as={Link}
              href={"/blog"}
              variant={{ base: "outline", md: "ghost" }}
              color={pathname.includes("/blog") ? "blue.500" : undefined}
            >
              {dictionary.root.blog}
            </Button>
            <Button
              variant={{ base: "outline", md: "ghost" }}
              onClick={toggleColorMode}
            >
              {colorMode === "light"
                ? dictionary.root.dark
                : dictionary.root.light}
            </Button>
            <Menu autoSelect={false}>
              <MenuButton
                as={Button}
                variant={{ base: "outline", md: "ghost" }}
                textTransform={"uppercase"}
                leftIcon={<Image src={getFlagImageLink(lang)} alt={lang} />}
              >
                {languageNames[lang]}
              </MenuButton>
              <MenuList
                shadow={"none"}
                rounded={"md"}
                p={1}
                bgColor={mode("white", "gray.900")}
              >
                {React.Children.toArray(
                  locales
                    .filter((locale) => locale !== lang)
                    .map((locale) => (
                      <MenuItem
                        as={Link}
                        href={pathname.replace(lang, locale)}
                        fontSize={"xl"}
                        icon={
                          <Image src={getFlagImageLink(locale)} alt={locale} />
                        }
                        rounded={"sm"}
                        px={3}
                        py={1}
                        color={mode("gray.900", "gray.300")}
                        bgColor={mode("white", "gray.900")}
                        _hover={{
                          bgColor: mode("gray.100", "gray.700"),
                        }}
                      >
                        {languageNames[locale]}
                      </MenuItem>
                    ))
                )}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      {children}
    </>
  );
}
