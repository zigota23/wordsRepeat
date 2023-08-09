import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  margin-bottom: 80px;
  padding: 0 8px;
`;

export const LogoText = styled.div`
  width: calc(100% - 48px);
  overflow: hidden;
  margin-left: 16px;
  white-space: nowrap;
`;

export const LogoWrapper = styled.div`
  & > svg {
    width: 32px;
    height: 32px;
  }
`;

interface ICloseButtonWrapper {
  isOpen: boolean;
}

export const CloseButtonWrapper = styled.div<ICloseButtonWrapper>`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  left: 100%;

  transform: ${({ isOpen }) =>
    isOpen ? "translateX(-10%)" : " translateX(-10%) rotateZ(180deg)"};

  transition: transform 0.3s;

  border-radius: 50%;
  background-color: white;

  & > svg {
    width: 20px;
    height: 20px;

    fill: black;
  }
`;
