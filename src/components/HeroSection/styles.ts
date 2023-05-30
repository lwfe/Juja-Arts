import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: fit-content;
    max-width: 100vw;
    padding: 20px 16px 20px 16px ;
    position: relative;
    overflow: hidden;
    gap: 48px;
    background-color: #F9F9F9;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    width: 100%;
    max-width: 416px;
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
    max-width: 416px;
    gap: 48px;

    @media screen and (min-width: 1000px)  {
        flex-direction: row;
        max-width: 920px;
    }
`;

export const MainText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h1 {
        font-size: 40px;
        font-weight: 500;
        color: #171837;
        text-align: center;

        @media screen and (min-width: 1000px)  {
            font-size: 42px;
        }
    }

    h2 {
        font-size: 40px;
        font-weight: 500;
        color: #6E6BE8;
        text-align: center;

        @media screen and (min-width: 1000px)  {
            font-size: 42px;
        }
    }

    a {
        margin-top: 32px;
        width: fit-content;
        color: white;
        font-size: 24px;
        font-weight: 400;
        background-color: #171837;
        padding: 16px 20px;
        border-radius: 4px;

        @media screen and (min-width: 1000px)  {
            font-size: 28px;
        }
    }
`;

export const HeroImage = styled.img`
    width: 480px;
    height: auto;

    @media screen and (min-width: 1000px)  {
        width: 450px;
    }
`;