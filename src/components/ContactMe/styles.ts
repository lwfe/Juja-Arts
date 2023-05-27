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
    z-index: -11;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 390px;
    gap: 48px;

    @media screen and (min-width: 1000px)  {
        flex-direction: row;
        max-width: 920px;
    }
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-weight: 500;
        font-size: 32px;
        color: #6E6BE8;
        text-align: center;

        @media screen and (min-width: 1000px)  {
            font-size: 42px;
        }
    }

    p {
        font-weight: 300;
        font-size: 20px;
        color: #171717;
        text-align: center;

        @media screen and (min-width: 1000px)  {
            font-size: 24px;
        }
    }
`;

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const InstaCard = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 20px;
    border-radius: 8px;
    background-color: #cf458033;
    color: #cf4580;
    gap: 8px;

    h3 {
        font-size: 16px;
        font-weight: 400;

        @media screen and (min-width: 1000px)  {
            font-size: 28px;
        }
    }
`;

export const WhatsCard = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding: 20px;
    border-radius: 8px;
    background-color: #00bb2633;
    color: #00bb26;
    gap: 8px;

    h3 {
        font-size: 16px;
        font-weight: 400;

        @media screen and (min-width: 1000px)  {
            font-size: 28px;
        }
    }
`;



export const GradientTop = styled.div`
    position: absolute;
    width: 260px;
    height: 260px;
    top: 0px;
    right: 0px;
    background: radial-gradient(rgba(110, 107, 232, 0.3) 0%, rgba(110, 107, 232, 0.8) 100%);
    filter: blur(150px);
    z-index: -9999;
`;

export const GradientBottom = styled.div`
    position: absolute;
    width: 150px;
    height: 150px;
    bottom: -50px;
    left: -50px;
    background: radial-gradient(rgba(110, 107, 232, 0.3) 0%, rgba(110, 107, 232, 0.8) 100%);
    filter: blur(150px);
    z-index: -9999;
`;