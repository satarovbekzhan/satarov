import { Rubik, Rubik_Mono_One, Ubuntu_Mono } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin", "cyrillic"],
});

const rubik_mono_one = Rubik_Mono_One({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
});

const ubuntu_mono = Ubuntu_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

const typography = {
  fonts: {
    heading: rubik_mono_one.style.fontFamily,
    body: rubik.style.fontFamily,
    mono: ubuntu_mono.style.fontFamily,
  },
};

export default typography;
