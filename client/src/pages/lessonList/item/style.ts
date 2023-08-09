import styled from "@emotion/styled";
import { ColorPaletteProp } from "@mui/joy";
import { getColorPalette } from "../../../utils/getColorPalette";

interface IWrapper {
  color: ColorPaletteProp;
  isActive: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  width: 300px;
  margin-bottom: 25px;

  border-radius: 14px;
  border: 1px solid ${({ theme, color }) => getColorPalette(theme, color)[500]};

  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  cursor: ${({ isActive }) => (isActive ? "pointer" : "initial")};
`;

interface ITop {
  color: ColorPaletteProp;
}

export const Top = styled.div<ITop>`
  width: 100%;
  height: 100px;
  border-radius: 12px 12px 0 0;
  background-color: ${({ theme, color }) => getColorPalette(theme, color)[500]};
`;

export const WrapperContent = styled.div`
  padding: 20px;
`;
