import styled from "@emotion/styled";
import { ColorPaletteProp } from "@mui/joy";

interface IWrapper {
  color: ColorPaletteProp;
}

export const Wrapper = styled.div<IWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  border-radius: 12px;
  border: 2px solid ${({ theme, color }) => theme.$$joy.palette[color][600]};
  box-shadow: 0 0 5px 0
    ${({ theme, color }) => theme.$$joy.palette[color][300]};
`;
