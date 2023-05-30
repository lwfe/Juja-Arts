import * as S from './styles'

export function MoreOfMyWork() {
    return (
        <S.Container id='mais-do-meu-trabalho'>
            <S.Content>
                <S.ImageWrapper>
                    <S.ImageTrack>
                        <img src="/work2.svg" alt="Imagem demonstração de trabalho" />
                        <img src="/work3.svg" alt="Imagem demonstração de trabalho" />
                        <img src="/work4.svg" alt="Imagem demonstração de trabalho" />
                        <img src="/work.svg" alt="Imagem demonstração de trabalho" />
                    </S.ImageTrack>
                </S.ImageWrapper>

                <S.MainContent>
                    <S.TitleWrapper>
                        <h1>Mais do meu <span>Trabalho!</span></h1>
                        <p>Trabalhos feitos até o momento atual, sempre praticando para <b>entregar o melhor</b> para meus clientes!</p>
                    </S.TitleWrapper>

                    <a href="https://contate.me/jujaarts">Quero Fazer um Orçamento</a>
                </S.MainContent>

            </S.Content>
        </S.Container>
    )
}