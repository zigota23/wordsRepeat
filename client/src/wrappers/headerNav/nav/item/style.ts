import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { baseColor } from "../../../joyTheme/data";

const getActiveStyle = () => css`
  background-color: #f1f1f1;
  color: ${baseColor[600]};

  & svg * {
    color: ${baseColor[600]};
  }
`;

interface IWrapper {
  isActive: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  display: flex;
  align-items: center;
  color: #f1f1f1;

  padding: 15px;
  margin-bottom: 10px;

  border-radius: 20px;
  cursor: pointer;

  ${({ isActive }) => (isActive ? getActiveStyle() : "")}

  &:hover {
    ${getActiveStyle()}
  }

  &:last-child {
    margin-bottom: unset;
  }
`;

export const IconWrapper = styled.div`
  width: 22px;
  height: 22px;

  & > svg {
    width: 22px;
    height: 22px;
  }
`;

export const TextWrapper = styled.div`
  width: calc(100% - 38px);
  overflow: hidden;
  margin-left: 16px;
  font-size: 14px;
  font-weight: 600;
`;
