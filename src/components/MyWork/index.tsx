import * as S from './styles'
import { BsFillGiftFill, BsPencilSquare, BsWhatsapp } from 'react-icons/bs'

export function MyWork() {
    return (
        <S.Container id='meu-trabalho'>
            <S.Content>
                <S.MainText>
                    <h1>Seu amor em <span>Pixels!</span></h1>
                    <p>Proporcionando uma experiência única e personalizada para capturar o <b>amor</b> e a <b>conexão entre vocês.</b></p>
                    <ol>
                        <li>
                            <img src="/ListStyle.svg" alt="" />
                            Fundo com Cor sólida
                        </li>
                        <li>
                            <img src="/ListStyle.svg" alt="" />
                            Fundo com Paisagem
                        </li>
                    </ol>
                </S.MainText>

                <S.Image src='/MyWorkImage.svg' />
            </S.Content>
        </S.Container>
    )
}