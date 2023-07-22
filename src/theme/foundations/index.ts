import colors from "./colors";
import typography from "./typography";
import shadows from "./shadows";
import breakpoints from "./breakpoints";
import sizes from "./sizes";
import { spacing } from "./spacing";
import radii from "./radius";

export const foundations = {
  colors,
  radii,
  ...typography,
  shadows,
  breakpoints,
  sizes,
  space: spacing,
};
