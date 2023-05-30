import * as S from './styles'
import { BsTrophy } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { RiCompasses2Line } from 'react-icons/ri'

export function WhatToExpect() {
    return (
        <S.Container id='o-que-esperar'>
            <h1>O que <span>esperar?</span></h1>

            <S.Content>
                <S.CardsWrapper>

                    <S.Card>
                        <S.Header>
                            <BsTrophy size={32} color='#6E6BE8' />
                            <h1>Exclusividade</h1>
                        </S.Header>
                        <p>Transforme suas fotos comuns em obras de arte deslumbrantes e únicas.</p>
                    </S.Card>

                    <S.Card>
                        <S.Header>
                            <AiOutlineClockCircle size={32} color='#6E6BE8' />
                            <h1>Tempo Recorde</h1>
                        </S.Header>
                        <p>Sua obra de arte entregue rapidamente e com precisão (em até 3 dias corridos).</p>
                    </S.Card>

                    <S.Card>
                        <S.Header>
                            <RiCompasses2Line size={32} color='#6E6BE8' />
                            <h1>Personalizada</h1>
                        </S.Header>
                        <p>Dê vida a sua visão com designs personalizados que refletem seu estilo e personalidade únicos.</p>
                    </S.Card>
                </S.CardsWrapper>
            </S.Content>
        </S.Container>
    )
}