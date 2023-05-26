import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-height: fit-content;

    #sobre-mim {
        z-index: 1000;
    }
`;

export const Section = styled.section`
    width: 100%;
    height: fit-content;
    max-height: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
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
        }
    }

    #heroimage {
        width: 390px;
        height: auto;
    }

    #jujaimage {
        width: 250px;
        height: auto;
    }

    h2 {
        color: white;
        font-size: 32px;
        font-weight: 500;
    }

    h3 {
        color: #171837;
        font-size: 32px;
        font-weight: 500;
    }
`;

export const ContentTitle = styled.h1`
    color: #171837;
    font-size: 32px;
    font-weight: 500;
`;

export const ContentTitlePrimary = styled.h1`
    color: #6E6BE8;
    font-size: 32px;
    font-weight: 500;
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
    bottom: -100px;
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

