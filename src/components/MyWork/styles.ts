import { styled } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: fit-content;
    padding: 60px 32px 60px 32px ;
    position: relative;
    overflow: hidden;
    gap: 48px;

    background-color: ${props => props.theme.colors.background};

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
    gap: 32px;
    max-width: 1110px;

    @media screen and (min-width: 1000px)  {
        flex-direction: row;
    }
`;

export const MainText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;

    h1 {
        font-size: 38px;
        font-weight: 500;
        color: ${props => props.theme.colors.accent};

        @media screen and (min-width: 1000px){
            font-size: 50px;
        }
    }

    span {
        color: ${props => props.theme.colors.primary};
    }
    
    p {
        font-size: 24px;
        color: ${props => props.theme.colors.contrast}
    }

    b {
        font-weight: 600;
        color: ${props => props.theme.colors.accent}
    }
 
    ol {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 16px;
    }

    li {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 24px;
        gap: 12px;
        
        color: ${props => props.theme.colors.contrast};
    }

`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;