'use client'
import Image from 'next/image'
import * as S from '../styles/home.styles'

export default function Home() {
  return (
    <S.Container>
      <S.Section id='Inicio'>
        <S.ContentWrapper>
          <S.Header>
            <img src="/JujaArtsLogo.svg" alt="logo da Juja Arts" />
            <S.Menu />
          </S.Header>

          <S.Content>
            <div id='title-div'>
              <S.ContentTitle>Transforme sua</S.ContentTitle>
              <S.ContentTitlePrimary>História de Amor</S.ContentTitlePrimary>
              <S.ContentTitle>em uma</S.ContentTitle>
              <S.ContentTitlePrimary>Obra de Arte Digital</S.ContentTitlePrimary>
              <a href="#">Conheça meus Serviços</a>
            </div>


            <img id="heroimage" src="/HeroImage.svg" alt="Imagem exemplo de arte digital" />
          </S.Content>

          <S.GradientTop />
          <S.GradientBottom />
        </S.ContentWrapper>
      </S.Section>

      <S.SectionBgPrimary id='sobre-mim'>
        <S.ContentWrapper>
          <S.Content>
            <h2>Sobre Mim</h2>
            <S.Card>
              <img id='jujaimage' src="/Juja.svg" alt="Imagem de Júlia" />
              <div>
                <h1>Júlia Borges</h1>
                <p>17 anos</p>
              </div>
              <p>Como artista digital sou apaixonada por criar arte que inspire, desafie e encante meu público. <br />
                Se procura uma arte digital única, vibrante e inspiradora, você acabou de encontrar a pessoa certa!</p>
            </S.Card>
          </S.Content>

          <S.GradientTopLight />
          <S.GradientBottomLight />
        </S.ContentWrapper>
      </S.SectionBgPrimary>

      <S.Section id='como-funciona'>
        <S.ContentWrapper>
          <S.Content>
            <h3>Como funciona?</h3>

          </S.Content>

          <S.GradientTop />
          <S.GradientBottom />
        </S.ContentWrapper>
      </S.Section>

    </S.Container>
  )
}
