import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: fit-content;
    padding: 60px 32px 60px 32px;
    position: relative;
    overflow: hidden;
    gap: 48px;

    background-color: ${props => props.theme.colors.surface};

    h1 {
        font-weight: 600;
        font-size: 36px;
        color: ${props => props.theme.colors.accent};

        @media screen and (min-width: 1000px)  {
            font-size: 42px;
        }

        span {
            color: ${props => props.theme.colors.primary};
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 416px;
    gap: 12px;

    @media screen and (min-width: 1000px)  {
        flex-direction: row;
        max-width: 920px;
    }
`;

export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 20px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 160px;
    max-width: 450px;
    padding: 10px;
    gap: 24px;

    p {
        font-size: 24px;
        font-weight: 300;
        color: ${props => props.theme.colors.accent}
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 12px;

    h1 {
        font-size: 26px;
        color: ${props => props.theme.colors.accent}
    }
`;