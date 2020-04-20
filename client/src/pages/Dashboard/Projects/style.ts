import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border: 2px solid #f4f4f4;
  `}
`;
