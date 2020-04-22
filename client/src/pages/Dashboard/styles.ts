import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    height: 100vh;
    display: flex;
    position: relative;
  `}
`;
export const ContentSection = styled.div`
  ${() => css`
    width: 100%;
    height: 100%;
    margin: 2rem;
    /* border: 10px solid #000; */
  `}
`;
