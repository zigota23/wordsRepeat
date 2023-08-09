import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 200px;
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;
`;

export const WrapperChildren = styled.div`
  width: calc(50% - 20px);
`;

export const WrapperImg = styled.div`
  width: calc(50% - 20px);
  display: flex;
  align-items: center;
  justify-content: center;

  & > img,
  & > svg {
    width: 200px;
    height: 200px;
  }
`;
