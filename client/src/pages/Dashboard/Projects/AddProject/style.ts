import styled, { css } from 'styled-components';

export const Overlay = styled.div`
  ${() => css`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #fff;
    z-index: 1;
    display: flex;
    justify-content: center;
  `}
`;
export const Form = styled.form`
  ${() => css`
    width: 400px;
    height: 300px;
    padding: 32px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    box-shadow: 2px 2px 2px 2px #ccc;

    display: flex;
    flex-direction: column;
    h3 {
      color: #fa8072;
      font-size: 22px;
      font-weight: 300;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
  `}
`;

export const FormField = styled.div`
  ${() => css`
    width: 100%;
    margin: 2rem 0;
    label {
      color: #fa8072;
      font-size: 14px;
      font-weight: 400;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    input {
      width: 100%;
      border: none;
      border: 2px solid #c4c4c4;
      border-radius: 4px;
      height: 40px;
      margin-top: 0.75rem;
      font-size: 18px;
      padding: 0.5rem;

      &:focus {
        outline: none;
        border: 2px solid #66b2b2;
      }
    }
  `}
`;

export const Btn = styled.button`
  ${() => css`
    background-color: #fa8072;
    color: #fff;
    width: 100px;
    height: 40px;
    border-radius: 4px;
    margin-top: 2rem;
    align-self: flex-end;
    cursor: pointer;
    &:hover {
      background-color: #66b2b2;
      transition: 0.25s ease-in;
    }
  `}
`;
