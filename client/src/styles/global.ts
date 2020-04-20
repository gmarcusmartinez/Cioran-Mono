import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${() => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`}
`;
