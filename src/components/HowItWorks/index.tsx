import * as S from './styles'
import { BsFillGiftFill, BsPencilSquare, BsWhatsapp } from 'react-icons/bs'

export function HowItWorks() {
    return (
        <S.Container id='como-funciona'>
            <h1>Como Funciona?</h1>

            <S.Content>
                <S.JujaImage src='/HowItWorks.svg' alt='Hero Image' />

                <S.CardWrapper>
                    <S.Card>
                        <div>
                            <BsWhatsapp size={28} />
                            <h1>Contato via Whatsapp</h1>
                        </div>

                        <p>Nessa etapa o cliente envia a imagem e faz o pagamento</p>
                    </S.Card>

                    <S.Card>
                        <div>
                            <BsPencilSquare size={28} />
                            <h1>Processo de Produção</h1>
                        </div>

                        <p>Nesta etapa eu começo a fazer a arte (prazo de até 3 dias corridos)</p>
                    </S.Card>

                    <S.Card>
                        <div>
                            <BsFillGiftFill size={28} />
                            <h1>Enterga da Arte Digital</h1>
                        </div>

                        <p>Nesta etapa a arte é enviada para o cliente no formato JPEG</p>
                    </S.Card>
                </S.CardWrapper>
            </S.Content>

            <S.GradientTop />
            <S.GradientBottom />
        </S.Container>
    )
}