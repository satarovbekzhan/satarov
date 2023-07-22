"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Flex,
  Highlight,
  Stack,
  Text,
  useColorModeValue as mode,
  keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { getDictionary } from "@/utils/get-dictionary";

import linkedinLogo from "../../../../public/static/linkedin.png";
import telegramLogo from "../../../../public/static/telegram.png";
import instagramLogo from "../../../../public/static/instagram.png";
import githubLogo from "../../../../public/static/github.png";
import astronautPic from "../../../../public/static/astronaut-cropped.webp";

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
    url: linkedinLogo,
  },
  {
    link: "https://t.me/satarovbekzhan",
    alt: "Telegram",
    url: telegramLogo,
  },
  {
    link: "https://www.instagram.com/satarovbekzhan/",
    alt: "Instagram",
    url: instagramLogo,
  },
  {
    link: "https://github.com/satarovbekzhan",
    alt: "GitHub",
    url: githubLogo,
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
        <Flex
          gap={{ base: 3, md: 6 }}
          justify={{ base: "space-between", md: "flex-start" }}
        >
          {React.Children.toArray(
            socials.map(({ alt, url, link }) => (
              <Box
                as={Link}
                href={link}
                target="_blank"
                rel="noreferrer"
                boxSize={10}
                _hover={{ opacity: 0.8 }}
                transition={"opacity 0.2s ease-in-out"}
              >
                <Image src={url} alt={alt} loading={"lazy"} />
              </Box>
            ))
          )}
          <Box
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
                style={{
                  height: "2.5rem",
                  width: "auto",
                  borderRadius: "9px",
                }}
              />
            </a>
          </Box>
        </Flex>
      </Stack>
      <Box width={{ base: 0, md: "30%" }} position={"relative"}>
        <Box
          as={motion.div}
          animation={animation}
          position={"absolute"}
          top={0}
          left={0}
        >
          <Image
            src={astronautPic}
            alt={"Astronaut"}
            // objectFit={"contain"}
            loading={"lazy"}
          />
        </Box>
      </Box>
    </Stack>
  );
}
