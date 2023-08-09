import styled from "@emotion/styled";

interface IWrapper {
  width: string;
}

export const Wrapper = styled.div<IWrapper>`
  width: ${({ width }) => width};
`;
