import { CssVarsProvider, ThemeProvider } from "@mui/joy";
import { theme } from "./data";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const WrapperJoyTheme: FC<IProps> = ({ children }) => {
  return (
    <CssVarsProvider>
      <ThemeProvider theme={{ $$joy: theme }}>{children}</ThemeProvider>
    </CssVarsProvider>
  );
};

export default WrapperJoyTheme;
