import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    user-select: "none";
    padding: 16px;
    margin: 0 0 8px 0;
    min-height: 50;
    color: "white";
  `}
`;
