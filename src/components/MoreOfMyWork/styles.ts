import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 60px 32px 60px 32px;
    width: 100vw;
    height: fit-content;
    position: relative;
    overflow: hidden;
    gap: 48px;
    background-color: ${props => props.theme.colors.surface};
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 48px;
    position: relative;
    max-width: 1110px;

    @media screen and (min-width: 1000px)  {
        flex-direction: row;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    gap: 29px;
    width: 100%;
    height: 345px;
    overflow: hidden;
`;

export const ImageTrack = styled.div`
    display: flex;
    gap: 24px;
`;

export const MainContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;

    @media screen and  (min-width: 1000px){
        align-items: end;
    }

    a {
        color: ${props => props.theme.colors.surface};
        width: fit-content;
        font-size: 24px;
        font-weight: 400;
        background-color: ${props => props.theme.colors.accent};
        padding: 16px 20px;
        border-radius: 4px;

        @media screen and (min-width: 1000px)  {
            font-size: 28px;
        }
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 32px;

    @media screen and (min-width: 1000px) {
        align-items: end;
    }

    h1 {
        font-size: 32px;
        font-weight: 500;
        color: ${props => props.theme.colors.accent};

        @media screen and  (min-width: 1000px){
            font-size: 40px;
        }
    }

    span {
        color: ${props => props.theme.colors.primary}
    }

    p {
        font-size: 24px;
        text-align: center;
        color: ${props => props.theme.colors.contrast};

        @media screen and  (min-width: 1000px){
            text-align: end;
        }
    }

    b {
        font-weight: 700;
        color: ${props => props.theme.colors.accent}
    }
`;