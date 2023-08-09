import styled from "@emotion/styled";


interface IWrapper {
  width: string;
  height: string;
  withoutPadding: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  padding: ${({ withoutPadding }) => (withoutPadding ? "unset" : "20px")};

  border-radius: 14px;
  background-color: rgba(255, 255, 255, 0.34);
`;
