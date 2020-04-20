import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 1rem;
    margin: 1rem;
    width: 250px;
    height: 250px;
  `}
`;
