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
    background-color: #6E6BE8;

    h1 {
        font-weight: 500;
        font-size: 32px;
        color: white;

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
    gap: 12px;

    @media screen and (min-width: 1000px)  {
        flex-direction: row;
        max-width: 920px;
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    

    h1 {
        font-size: 28px;
        font-weight: 500;
        color: #171837;
        text-align: center;

        @media screen and (min-width: 1000px)  {
            font-size: 32px;
        }
    }

    h2 {
        font-size: 20px;
        font-weight: 300;
        color: #171837;
        text-align: center;

        @media screen and (min-width: 1000px)  {
            font-size: 24px;
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
    background: radial-gradient(rgba(211, 186, 244, 0.47) 0%, rgba(225, 206, 251, 0.88) 100%);
    filter: blur(150px);
    z-index: -9999;
`;

export const GradientBottom = styled.div`
    position: absolute;
    width: 260px;
    height: 260px;
    bottom: -50px;
    left: -50px;
    background: radial-gradient(rgba(211, 186, 244, 0.47) 0%, rgba(225, 206, 251, 0.88) 100%);
    filter: blur(150px);
    z-index: -9999;
`;