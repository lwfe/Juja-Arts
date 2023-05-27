import * as S from './styles'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

export function ContactMe() {
    return (
        <S.Container id='contato'>
            <S.Content>
                <S.Title>
                    <h1>Tem alguma dúvida?</h1>
                    <p>Não hesite em me chamar nos meios abaixo</p>
                </S.Title>

                <S.CardsWrapper>
                    <S.InstaCard href='#'>
                        <BsInstagram size={32} />
                        <h3>Instagram</h3>
                    </S.InstaCard>

                    <S.WhatsCard href='#'>
                        <BsWhatsapp size={32} />
                        <h3>Whatsapp</h3>
                    </S.WhatsCard>
                </S.CardsWrapper>

            </S.Content>

            <S.GradientTop />
            <S.GradientBottom />
        </S.Container>
    )
}