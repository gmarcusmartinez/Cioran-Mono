import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    border: 1px solid #000;
    padding: 1rem;
    margin: 1rem;
    width: 200px;
    height: 200px;
    @media (max-width: 500px) {
      width: 200px;
      height: 200px;
    }
  `}
`;
export const Title = styled.h2`
  ${() => css`
    font-size: 18px;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    letter-spacing: 0.1rem;
  `}
`;
