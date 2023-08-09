import { Theme } from "@emotion/react";
import { ColorPaletteProp } from "@mui/joy";

export const getColorPalette = (theme: Theme, color: ColorPaletteProp) =>
  theme.$$joy.palette[color];
