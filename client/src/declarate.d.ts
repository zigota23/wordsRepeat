import { Theme as ThemeJoy } from "@mui/joy";
import { DefaultPaletteRange, PaletteOptions } from "@mui/joy/styles/types";

declare module "@mui/joy/styles" {
  interface Palette {
    base: Partial<DefaultPaletteRange>;
  }
  interface PaletteOptions2 {
    base: Partial<DefaultPaletteRange>;
  }
}

declare module "@mui/joy" {
  interface ColorPalettePropOverrides {
    base: true;
  }
}

declare module "@emotion/react" {
  export interface Theme extends ThemeJoy {
    $$joy: ThemeJoy;
  }
}
