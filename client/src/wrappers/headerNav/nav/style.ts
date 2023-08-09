import styled from "@emotion/styled";

interface IWrapper {
  isOpen: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  width: 100%;
  height: 100%;

  background: #060606;
  color: white;

  padding: ${({ isOpen }) => (isOpen ? "30px 14px" : " 30px 14px")};
`;
