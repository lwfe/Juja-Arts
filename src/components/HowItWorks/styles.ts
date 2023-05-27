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
    background-color: white;
    z-index: -10;

    h1 {
        font-weight: 500;
        font-size: 32px;
        color: #6E6BE8;

        @media screen and (min-width: 1000px)  {
            font-size: 42px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 390px;
    gap: 20px;

    @media screen and (min-width: 1000px)  {
        flex-direction: row-reverse;
        max-width: 920px;
    }
`;

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    padding: 24px;
    border-radius: 20px;
    border: 1px #171837 solid;
    

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        color: #6E6BE8;

        h1 {
            font-size: 24px;
            font-weight: 500;
            text-align: center;

            @media screen and (min-width: 1000px)  {
                font-size: 32px;
            }
        }
    }

    p {
        color: #171837;
        font-weight: 300;
        font-size: 20px;
        text-align: center;
        padding-top: 12px;

        @media screen and (min-width: 1000px)  {
            font-size: 24px;
        }
    }
`;

export const JujaImage = styled.img`
    width: 300px;
    height: auto;

    @media screen and (min-width: 1000px)  {
        width: 450px;
    }
`;

export const GradientTop = styled.div`
    position: absolute;
    width: 260px;
    height: 260px;
    top: -50px;
    right: -50px;
    background: radial-gradient(rgba(110, 107, 232, 0.3) 0%, rgba(110, 107, 232, 0.8) 100%);
    filter: blur(150px);
    z-index: -9999;
`;

export const GradientBottom = styled.div`
    position: absolute;
    width: 260px;
    height: 260px;
    bottom: -50px;
    left: -50px;
    background: radial-gradient(rgba(110, 107, 232, 0.3) 0%, rgba(110, 107, 232, 0.8) 100%);
    filter: blur(150px);
    z-index: -9999;
`;