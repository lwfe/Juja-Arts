import * as S from './styles'

export function MyServices() {
    return (
        <S.Container id='meus-serviços'>
            <S.Content>
                <div>
                    <h1>Meus Serviços</h1>
                    <p>Todos os meus serviços disponíveis</p>
                </div>

                <S.Card>
                    <h2>Arte Casal</h2>
                    <h3>a partir de R$80,00</h3>

                    <img src="/Casal.svg" alt="Ilustração de Casal" />
                </S.Card>

            </S.Content>

            <S.GradientTop />
            <S.GradientBottom />
        </S.Container>
    )
}