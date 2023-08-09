import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

interface IWrapperHeader {
  isOpen: boolean;
}

export const WrapperHeaderChildren = styled.div<IWrapperHeader>`
  width: ${({ isOpen }) => `calc(100% - ${isOpen ? 260 : 80}px)`};
  height: 100%;

  overflow: auto;

  transition: width 0.3s;
`;

export const WrapperNav = styled.div<IWrapperHeader>`
  width: ${({ isOpen }) => (isOpen ? "260px" : "80px")};
  height: 100%;

  transition: width 0.3s;
`;

export const WrapperChildren = styled.div`
  padding: 30px;
`;
