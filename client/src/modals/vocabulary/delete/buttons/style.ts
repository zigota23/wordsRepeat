import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  margin-top: 12px;

  & > button {
    width: calc(50% - 6px);
  }
`;
