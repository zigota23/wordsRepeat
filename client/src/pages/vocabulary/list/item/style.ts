import styled from "@emotion/styled";
import { ColorPaletteProp, Typography } from "@mui/joy";
import { getColorPalette } from "../../../../utils/getColorPalette";

interface IWrapper {
  color: ColorPaletteProp;
}

export const Wrapper = styled.div<IWrapper>`
  width: 300px;
  position: relative;

  margin-bottom: 25px;

  border-radius: 14px;
  border: 1px solid ${({ theme, color }) => getColorPalette(theme, color)[400]};

  cursor: pointer;
`;

export const Text = styled(Typography)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const WrapperDot = styled.div`
  position: absolute;

  top: 10px;
  right: 10px;
`;
