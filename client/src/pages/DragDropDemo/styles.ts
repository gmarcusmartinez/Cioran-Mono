import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    width: 100vw;
    height: 100%;
    justify-content: center;
    align-items: flex-end;
  `}
`;
