import localFont from "next/font/local";

import { Caveat } from "next/font/google";

const comic_cat = localFont({
  src: "../../fonts/comic_cat.otf",
});

const caveat = Caveat({
  subsets: ["latin", "cyrillic-ext"],
  weight: "400",
});

const typography = {
  fonts: {
    heading: comic_cat.style.fontFamily,
    body: caveat.style.fontFamily,
  },
};

export default typography;
