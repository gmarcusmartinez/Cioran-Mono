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
    position: relative;
  `}
`;

export const AddProjectBtn = styled.button`
  ${({ theme }) => css`
    height: 40px;
    width: 40px;
    border: 2px solid #19256d;
    background-color: #19256d;
    position: absolute;
    top: -12px;
    right: -12px;
    border-radius: 50%;
    z-index: 2;
    &:focus {
      outline: none;
    }
    i {
      font-size: 20px;
      color: #fff;
    }
    &:hover {
      background-color: #fff;
      color: #19256d;
      transition: 0.25s ease-in;
      i {
        color: #19256d;
        transition: 0.25s ease-in;
      }
    }
  `}
`;
