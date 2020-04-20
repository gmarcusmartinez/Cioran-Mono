import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    padding: 2rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `}
`;
