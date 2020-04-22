import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #fff;
    z-index: 1;

    display: flex;
    align-items: center;
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
  `}
`;
export const Title = styled.h3`
  ${() => css`
    color: #19256d;
    font-size: 22px;
    font-weight: 300;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  `}
`;

export const FormControl = styled.div`
  ${() => css`
    width: 100%;
    margin: 2rem 0;
  `}
`;

export const Input = styled.input`
  ${() => css`
    width: 100%;
    border: none;
    border: 2px solid #c4c4c4;
    border-radius: 4px;
    height: 40px;
    margin-top: 0.5rem;
    font-size: 18px;
    padding: 0.5rem;

    &:focus {
      outline: none;
      border: 2px solid #19256d;
    }
  `}
`;
export const Label = styled.label`
  ${() => css`
    color: #19256d;
    font-size: 14px;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  `}
`;

export const Submit = styled.button`
  ${() => css`
    background-color: #19256d;
    color: #fff;
    width: 100px;
    height: 40px;
    border-radius: 4px;
    margin-top: 2rem;
    align-self: flex-end;
    cursor: pointer;
  `}
`;
