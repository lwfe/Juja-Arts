import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 0 32px 0 ;
    width: 100%;
    position: relative;
    overflow: hidden;
    gap: 48px;
`;

export const Logo = styled.img`
    width: 140px;
    height: 60px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 390px;
    gap: 48px;

    @media screen and (min-width: 1000px)  {
        flex-direction: row;
        max-width: 920px;
    }
`;

export const MainText = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    h1 {
        font-size: 32px;
        font-weight: 500;
        color: #171837;

        @media screen and (min-width: 1000px)  {
            font-size: 42px;
        }
    }

    h2 {
        font-size: 32px;
        font-weight: 500;
        color: #6E6BE8;

        @media screen and (min-width: 1000px)  {
            font-size: 42px;
        }
    }

    a {
        margin-top: 32px;
        width: fit-content;
        color: white;
        font-size: 20px;
        font-weight: 300;
        background-color: #6E6BE8;
        padding: 12px;
        border-radius: 4px;

        @media screen and (min-width: 1000px)  {
            font-size: 28px;
        }
    }
`;

export const HeroImage = styled.img`
    width: 390px;
    height: auto;

    @media screen and (min-width: 1000px)  {
        width: 450px;
    }
`;

export const GradientTop = styled.div`
    position: absolute;
    width: 260px;
    height: 260px;
    top: 0;
    right: 0;
    background: radial-gradient(rgba(110, 107, 232, 0.5) 0%, rgba(110, 107, 232, 0.8) 100%);
    filter: blur(150px);
    z-index: -9999;
`;

export const GradientBottom = styled.div`
    position: absolute;
    width: 260px;
    height: 260px;
    bottom: 0;
    left: 0;
    background: radial-gradient(rgba(110, 107, 232, 0.5) 0%, rgba(110, 107, 232, 0.8) 100%);
    filter: blur(150px);
    z-index: -9999;
`;