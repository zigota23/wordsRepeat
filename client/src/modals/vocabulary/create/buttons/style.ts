import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 24px;

  & > button {
    width: calc(50% - 6px);
  }
`;
