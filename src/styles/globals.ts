'use client'
import { createGlobalStyle, styled } from "styled-components";

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

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    z-index: -900;
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
    padding: 32px 0;
    max-width: 416px;
    
    h1 {
       font-size: 20px;
       font-weight: 300;
       color: ${props => props.theme.colors.accent};
    }
`;