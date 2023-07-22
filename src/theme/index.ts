import { extendTheme } from "@chakra-ui/react";

import { foundations } from "./foundations";
import { components } from "./components";
import { semanticTokens } from "./semantic-tokens";
import styles from "./styles";
import config from "./config";

import type { ThemeDirection } from "@chakra-ui/react";

const direction: ThemeDirection = "ltr";

export default extendTheme({
  semanticTokens,
  direction,
  ...foundations,
  components,
  styles,
  config,
});
