import styled from "@emotion/styled";
import { baseColor } from "../../../../wrappers/joyTheme/data";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px;
  margin-bottom: 12px;

  background-color: #fafafa;

  border-radius: 8px;
  border: 1px solid ${baseColor[400]};

  &:last-child {
    margin-bottom: unset;
  }
`;
