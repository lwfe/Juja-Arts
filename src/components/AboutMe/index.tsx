import * as S from './styles'

export function AboutMe() {
    return (
        <S.Container id='sobre-mim'>
            <h1>Sobre Mim</h1>

            <S.Content>
                <S.JujaImage src='/Juja.svg' alt='Hero Image' />

                <S.Card>
                    <h1>Júlia Borges</h1>
                    <h2>17 anos</h2>

                    <p>Como artista digital sou apaixonada por criar arte que inspire, desafie e encante meu público. <br />
                        Se procura uma arte digital única, vibrante e inspiradora, você acabou de encontrar a pessoa certa!</p>
                </S.Card>

            </S.Content>

            <S.GradientTop />
            <S.GradientBottom />
        </S.Container>
    )
}