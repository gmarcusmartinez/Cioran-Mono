import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    border: 1px solid #ccc;
    padding: 1rem;
    margin: 1rem;
    width: 200px;
    height: 200px;
    box-shadow: 2px 2px 2px 1px #ccc;
    cursor: pointer;
    text-decoration: none;
  `}
`;
export const Title = styled.h2`
  ${() => css`
    font-size: 18px;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    letter-spacing: 0.1rem;
    color: #333;
  `}
`;
