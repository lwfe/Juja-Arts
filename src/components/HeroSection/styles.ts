import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: fit-content;
    max-width: 100vw;
    padding: 20px 32px;
    position: relative;
    overflow: hidden;
    gap: 48px;
    background-color: #F9F9F9;

    @media screen and (min-width: 700px){
        padding: 20px 64px;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1110px;
`;

export const NavMenu =styled.ul`
    display: flex;
    align-self: center;
    justify-content: center;
    gap: 30px;

    li {
        font-size: 20px;
        color: ${props => props.theme.colors.accent};
    }
`;

export const Logo = styled.img`
    width: 140px;
    height: 60px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 48px;
    max-width: 1110px;

    @media screen and (min-width: 768px)  {
        flex-direction: row;
    }

    @media screen and (min-width: 1000px)  {
        flex-direction: row;
    }
`;

export const MainText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;

    @media screen and (min-width: 700px){
        align-items: start;
    }

    h1 {
        font-size: 40px;
        font-weight: 500;
        color: #171837;
        text-align: center;

        @media screen and (min-width: 700px)  {
            font-size: 40px;
            text-align: left;
        }
    }

    h2 {
        font-size: 40px;
        font-weight: 500;
        color: #6E6BE8;
        text-align: center;

        @media screen and (min-width: 700px)  {
            font-size: 40px;
            text-align: left;
        }
    }

    a {
        margin-top: 24px;
        width: fit-content;
        color: white;
        font-size: 24px;
        font-weight: 400;
        background-color: #171837;
        padding: 16px 20px;
        border-radius: 4px;
        text-align: center;

        @media screen and (min-width: 700px)  {
            font-size: 28px;
        }
    }
`;

export const HeroImage = styled.img`
    width: 480px;
    height: auto;

    @media screen and (min-width: 1000px)  {
        width: 580px;
    }
`;