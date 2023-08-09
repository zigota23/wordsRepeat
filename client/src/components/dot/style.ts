import styled from "@emotion/styled";
import { ColorPaletteProp } from "@mui/joy";
import { getColorPalette } from "../../utils/getColorPalette";


interface IWrapper {
  color: ColorPaletteProp;
}

export const Wrapper = styled.div<IWrapper>`
  position: relative;

  width: 16px;
  height: 16px;

  border-radius: 50%;
  border: 1px solid ${({ color, theme }) => getColorPalette(theme, color)[400]};
  background-color: transparent;

  & > div {
    background-color: ${({ color, theme }) =>
      getColorPalette(theme, color)[400]};
  }
`;

export const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 8px;
  height: 8px;

  border-radius: 50%;
`;
