'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0; 
    }

    body {
        width:100vw;
        max-width: 100vw;
        overflow-x: hidden;
    }

    li {
        list-style: none;
    }

    a {
        color:black;
        text-decoration: none;
    }
`;