import * as S from './styles'

export function HeroSection() {
    return (
        <S.Container id='inicio'>
            <S.Logo src='/JujaArtsLogo.svg' alt='Logo da Juja Arts' />
            <S.Content>
                <S.MainText>
                    <h1>Transforme sua</h1>
                    <h2>História de Amor</h2>
                    <h1>em uma</h1>
                    <h2>Obra de Arte Digital</h2>

                    <a href="#meus-serviços">Conheça meus Serviços</a>
                </S.MainText>

                <S.HeroImage src='/HeroImage.svg' alt='Hero Image' />
            </S.Content>

            <S.GradientTop />
            <S.GradientBottom />
        </S.Container>
    )
}