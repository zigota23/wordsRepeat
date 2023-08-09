import { css } from "@emotion/react";
import { extendTheme, Palette } from "@mui/joy";

const white = "#ffffff";

export const baseColor = {
  50: "#FEF6EE",
  100: "#FDEAD7",
  200: "#FDEAD7",
  300: "#F7B27A",
  400: "#F38744",
  500: "#EF6820",
  600: "#E04F16",
  700: "#B93815",
  800: "#932F19",
  900: "#932F19",
};

const baseSolid: Palette["base"] = {
  solidBg: baseColor[500],
  solidColor: white,
  solidActiveBg: baseColor[700],
  solidDisabledBg: baseColor[500] + "46",
  solidDisabledColor: white,
  solidHoverBg: baseColor[600],
};

const baseSoft: Palette["base"] = {
  softBg: baseColor[100],
  softColor: baseColor[600],
  softActiveBg: baseColor[700],
  softDisabledBg: baseColor[500] + "46",
  softDisabledColor: white,
  softHoverBg: baseColor[600],
};

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        base: {
          ...baseColor,
          ...baseSoft,
          ...baseSolid,
          outlinedBorder: baseColor[300],
          outlinedHoverBorder: baseColor[400],
        },
      },
    },
  },
  components: {
    JoyInput: {
      styleOverrides: {
        root: () => ({
          color: "black",
        }),
      },
    },
    JoyButton: {
      defaultProps: { loadingPosition: "start" },
    },
    JoyTypography: {
      styleOverrides: {
        root: ({ ownerState: { level } }) => {
          if (level === "body1")
            return css`
              font-size: 20px;
              font-weight: 600;
            `;
          if (level === "body2")
            return css`
              font-size: 18px;
              font-weight: 600;
            `;
          if (level === "body3")
            return css`
              font-size: 16px;
              font-weight: 600;
            `;
        },
      },
    },
  },
});
