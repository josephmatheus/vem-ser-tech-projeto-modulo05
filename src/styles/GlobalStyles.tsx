import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        height: 100vh;
        background-color: #f2dd727f;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`;
