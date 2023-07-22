"use client";

import React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Highlight,
  Image,
  Stack,
  Text,
  useColorModeValue as mode,
  keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { getDictionary } from "@/utils/get-dictionary";

const astronautAnimationKeyframes = keyframes`
  0% {
    transform: translate(0px);
  }
  50% {
    transform: translate(-4px, -25px);
  }
  100% {
    transform: translate(0px);
  }
`;

const animation = `${astronautAnimationKeyframes} 4s ease-in-out infinite`;

const socials = [
  {
    link: "https://www.linkedin.com/in/satarovbekzhan/",
    alt: "Linkedin",
    url: "/static/linkedin.png",
  },
  {
    link: "https://t.me/satarovbekzhan",
    alt: "Telegram",
    url: "/static/telegram.png",
  },
  {
    link: "https://www.instagram.com/satarovbekzhan/",
    alt: "Instagram",
    url: "/static/instagram.png",
  },
  {
    link: "https://github.com/satarovbekzhan",
    alt: "GitHub",
    url: "/static/github.png",
  },
];

export default function Home({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
  return (
    <Stack
      as={"main"}
      flex={1}
      px={{ base: 6, md: 12 }}
      pb={{ base: 6, md: 12 }}
      bgColor={mode("white", "gray.900")}
      direction={{ base: "column", md: "row" }}
      spacing={{ base: 6, md: 3 }}
    >
      <Stack flex={1} spacing={12}>
        <Text
          fontSize={"3xl"}
          whiteSpace={"pre-wrap"}
          color={mode("black", "gray.300")}
          maxWidth={"container.md"}
        >
          <Highlight
            query={dictionary.name}
            styles={{
              color: "blue.500",
            }}
          >
            {dictionary.home.bio}
          </Highlight>
        </Text>
        <Flex gap={{ base: 3, md: 6 }}>
          {React.Children.toArray(
            socials.map(({ alt, url, link }) => (
              <Link href={link} target="_blank" rel="noreferrer">
                <Image
                  src={url}
                  alt={alt}
                  boxSize={10}
                  _hover={{ opacity: 0.8 }}
                  transition={"opacity 0.2s ease-in-out"}
                />
              </Link>
            ))
          )}
          <Box
            h={10}
            rounded={10}
            overflow={"hidden"}
            _hover={{ opacity: 0.8 }}
            transition={"opacity 0.2s ease-in-out"}
          >
            <a
              href="https://www.digitalocean.com/?refcode=2c6dd7c1f25c&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg"
                alt="DigitalOcean Referral Badge"
                style={{ height: "100%", width: "auto" }}
              />
            </a>
          </Box>
        </Flex>
      </Stack>
      <Box width={{ base: 0, md: "30%" }} position={"relative"}>
        <Image
          as={motion.img}
          animation={animation}
          src={"/static/astronaut-cropped.webp"}
          alt={"Astronaut"}
          objectFit={"contain"}
          position={"absolute"}
          top={0}
          left={0}
        />
      </Box>
    </Stack>
  );
}
