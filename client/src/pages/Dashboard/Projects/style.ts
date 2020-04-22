import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    height: 100%;
    max-width: 900px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border-radius: 4px;
    position: relative;
    @media (min-width: 1000px) {
      max-height: 500px;
    }
  `}
`;

export const AddProjectBtn = styled.button`
  ${({ theme }) => css`
    height: 40px;
    width: 40px;
    border: 2px solid #19256d;
    background-color: #19256d;
    position: absolute;
    top: -16px;
    right: -16px;
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
