import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    z-index: -900;
`;

export const Section = styled.section`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
    overflow: hidden;
`;

export const SectionBgPrimary = styled.section`
    width: 100%;
    height: fit-content;
    max-height: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #6E6BE8;
    z-index: 998;
    overflow: hidden;
`;

export const Header = styled.div`
    width: 100%;
    max-width: 380px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 0 12px 0;

    img {
        width: 140px;
        height: 60px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 425px;
    position: relative;
    
    @media screen and (min-width: 600px) {
        max-width:700px;
    }

    @media screen and (min-width: 1200px) {
        max-width:1100px;
    }
`;


export const Menu = styled.div`
    display: none;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0 20px 0;
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 380px;
    gap: 40px;

    @media screen and (min-width: 600px) {
        flex-direction: row;
        max-width: 900px;
    }
    
    @media screen and (min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
        max-width: 1110px;
    }

    #title-div {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 2px;

        a {
            margin-top: 32px;
            width: fit-content;
            color: white;
            font-size: 20px;
            background-color: #6E6BE8;
            padding: 12px;
            border-radius: 4px;

            @media screen and (min-width: 600px) {
                font-size: 28px;
            }
        }
    }

    #heroimage {
        width: 390px;
        height: auto;

        @media screen and (min-width: 1200px) {
            width: 600px;
        }
    }

    #jujaimage {
        width: 250px;
        height: auto;
    }

    #howitworks {
        width: 350px;
        height: auto;
    }

    h2 {
        color: white;
        font-size: 32px;
        font-weight: 500;

        @media screen and (min-width: 1200px) {
            font-size: 42px;
        }
    }

    h3 {
        color: #6E6BE8;
        font-size: 32px;
        font-weight: 500;
    }

    p {
        color: white;
        font-weight: 300;
        font-size: 20px;
    }

    a {
        width: fit-content;
        color: white;
        font-size: 20px;
        background-color: #171837;
        padding: 12px;
        border-radius: 4px;
    }

    .servicesTitleDescription {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .duvidasTitleDescription {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;

        p {
            color: #171837
        }
    }

    .socialmedia {
        display: flex;
        flex-direction: column;
        gap: 20px;

        padding: 0 0 30px 0;

        .instagram {
            background-color: rgb(201,56,177,0.20);
            border-radius: 12px;
        }

        .whatsapp {
            background-color: rgb(131,255,156,0.30);
            border-radius: 12px;
        }
    }
    
`;

export const ContentTitle = styled.h1`
    color: #171837;
    font-size: 32px;
    font-weight: 500;

    @media screen and (min-width: 1200px) {
        font-size: 48px;
    }
`;

export const ContentTitlePrimary = styled.h1`
    color: #6E6BE8;
    font-size: 32px;
    font-weight: 500;

    @media screen and (min-width: 1200px) {
        font-size: 48px;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    background-color: white;
    gap: 20px;
    width: 100%;
    height: fit-content;
    border-radius: 20px;

    @media screen and (min-width: 1200px) {
            flex-direction: row;
            max-width: 800px;
        }

    p {
        color: #171837;
        font-weight: 300;
        font-size: 20px;
        text-align: center;
    }

    h1 {
        color: #171837;
        font-size: 28px;
        font-weight: 500;
    }

    .TitleWithIcon {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        width: 100%;

        h1 {
            font-size: 24px;
            color: #6E6BE8;
        }
    }

    .sobremimText {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center; 

        @media screen and (min-width: 1200px) {
            flex-direction: column;
        }
    }

    .sobremimContent {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;

export const GradientTop = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    top: -150px;
    right: 0px;
    background: radial-gradient( rgba(110, 107, 232, 0.12) 0%, rgba(110, 107, 232, 0.8) 100%);
    filter: blur(150px);
    z-index: -9999;
`;

export const GradientBottom = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    bottom: -50px;
    left:-100px;
    background: radial-gradient( rgba(110, 107, 232, 0.12) 0%, rgba(110, 107, 232, 0.8) 100%);
    filter: blur(150px);
    z-index: -9999;
`;

export const GradientTopLight = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    top: -50px;
    right: 0;
    background: radial-gradient( rgba(211, 186, 244, 0.47) 0%, rgba(225, 206, 251, 0.88) 100%);
    filter: blur(150px);
    z-index: -9999;
`;

export const GradientBottomLight = styled.div`
    position: absolute;
    width: 350px;
    height: 350px;
    bottom: -50px;
    left: -50px;
    background: radial-gradient( rgba(211, 186, 244, 0.47) 0%, rgba(225, 206, 251, 0.88) 100%);
    filter: blur(150px);
    z-index: -9999;
`;

export const ServiceCardGradient = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    top: -150px;
    left: -150px;
    background: radial-gradient( rgba(110, 107, 232, 0.12) 0%, rgba(110, 107, 232, 0.8) 100%);
    filter: blur(150px);
`


export const ServicesCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    background-color: white;
    gap: 4px;
    width: 100%;
    height: 350px;
    border-radius: 20px;
    position: relative;

    overflow: hidden;

    h1 {
        font-size: 28px;
        color: #171837;
        font-weight: 400;
    }

    p { 
        font-size: 20px;
        font-weight: 300;
        color: #171837;
    }

    img {
        position: absolute;
        bottom: -20px;
        right: 40px;
    }
`;

export const InstagramSocialMediaCard = styled.a`
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 14px;
    justify-content: center;
    align-items: center;
    gap: 8px; 
    background-color: rgb(201,56,177,0.20);
    border-radius: 12px;
    
    h1 {
        font-size: 24px;
        font-weight: 500;
        color: #CF4580;
    }
`;

export const WhatsappSocialMediaCard = styled.a`
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 14px;
    justify-content: center;
    align-items: center;
    gap: 8px; 
    background-color: rgb(131,255,156,0.30);
    border-radius: 12px;
    
    h1 {
        font-size: 24px;
        font-weight: 500;
        color: #00BB26;
    }
`;


export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;
    background-color: #6E6BE8;
    padding: 20px 0 20px 0;
    
    h1 {
       font-size: 20px;
       font-weight: 300;
       color: white;
    }
`;