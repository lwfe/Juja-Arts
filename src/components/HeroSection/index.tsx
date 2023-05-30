import * as S from './styles'
import { HiMenu } from 'react-icons/hi'

export function HeroSection() {
    return (
        <S.Container id='inicio'>
            <S.HeaderWrapper>
                <S.Logo src='/JujaArtsLogo.svg' alt='Logo da Juja Arts' />
                <div className='navBarHamburguer'>
                    <HiMenu size={32} color='#6E6BE8' />
                </div>
                <S.NavMenu className='navBarMenu'>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#o-que-esperar">O que esperar?</a></li>
                    <li><a href="#meu-trabalho">Serviços</a></li>
                    <li><a href="#mais-do-meu-trabalho">Fazer Orçamento</a></li>
                </S.NavMenu>
            </S.HeaderWrapper>
            <S.Content>
                <S.MainText>
                    <h1>Transforme sua</h1>
                    <h2>História de Amor</h2>
                    <h1>em uma</h1>
                    <h2>Obra de Arte Digital</h2>

                    <a href="#meu-trabalho">Conheça meu Trabalho</a>
                </S.MainText>


                <S.HeroImage src='/HeroImage.svg' alt='Hero Image' />

            </S.Content>
        </S.Container >
    )
}