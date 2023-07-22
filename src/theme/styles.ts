import { mode, Styles } from "@chakra-ui/theme-tools";

export default {
  global: (props) => ({
    ":root": {},
    "*": {
      scrollBehavior: "smooth",
    },
    body: {
      color: mode("black", "white")(props),
      bg: mode("white", "gray.900")(props),
    },
  }),
} as Styles;
