'use client'
import { HeroSection } from '@/components/HeroSection'
import * as S from '../styles/home.styles'

import { BsWhatsapp, BsFillGiftFill, BsPencilSquare, BsInstagram } from 'react-icons/bs'

export default function Home() {
  return (
    <S.Container>

      <HeroSection />

      <S.SectionBgPrimary id='sobre-mim'>
        <S.ContentWrapper>
          <S.Content>
            <h2>Sobre Mim</h2>
            <S.Card>
              <img id='jujaimage' src="/Juja.svg" alt="Imagem de Júlia" />
              <div className='sobremimContent'>
                <div className='sobremimText'>
                  <h1>Júlia Borges</h1>
                  <p>17 anos</p>
                </div>
                <p>Como artista digital sou apaixonada por criar arte que inspire, desafie e encante meu público. <br />
                  Se procura uma arte digital única, vibrante e inspiradora, você acabou de encontrar a pessoa certa!</p>
              </div>

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

            <img id="howitworks" src="/HowItWorks.svg" alt="Imagem de mulher ilustrando" />

            <S.Card>
              <div className='TitleWithIcon'>
                <BsWhatsapp size={24} color='#6E6BE8' />
                <h1>Contato via Whatsapp</h1>
              </div>
              <p>Nessa etapa o cliente envia a imagem e faz o pagamento</p>
            </S.Card>

            <S.Card>
              <div className='TitleWithIcon'>
                <BsPencilSquare size={24} color='#6E6BE8' />
                <h1>Processo de Produção</h1>
              </div>
              <p>Nesta etapa eu começo a fazer a arte (prazo de até 3 dias corridos)</p>
            </S.Card>

            <S.Card>
              <div className='TitleWithIcon'>
                <BsFillGiftFill size={24} color='#6E6BE8' />
                <h1>Entrega da Arte Digital</h1>
              </div>
              <p>Nesta etapa a arte é enviada para o cliente no formato JPEG</p>
            </S.Card>

          </S.Content>

          <S.GradientTop />
          <S.GradientBottom />
        </S.ContentWrapper>
      </S.Section>

      <S.SectionBgPrimary id='meus-serviços'>
        <S.ContentWrapper>
          <S.Content>
            <div className='servicesTitleDescription'>
              <h2>Meus Serviços</h2>
              <p>Confira todos os meus serviços disponíveis</p>
            </div>

            <S.ServicesCard>
              <h1>Arte Casal</h1>
              <p>a partir de R$80,00</p>

              <img src="/Casal.svg" alt="Imagem de casal ilustrada" />
              <S.ServiceCardGradient />
            </S.ServicesCard>

            <a href="#">Fazer Orçamento Agora</a>
          </S.Content>

          <S.GradientTopLight />
          <S.GradientBottomLight />
        </S.ContentWrapper>
      </S.SectionBgPrimary>

      <S.Section id='dúvida'>
        <S.ContentWrapper>
          <S.Content>
            <div className='duvidasTitleDescription' >
              <h3>Tem alguma dúvida?</h3>
              <p>Não hesite em me chamar nos meios abaixo</p>
            </div>

            <div className='socialmedia'>
              <S.InstagramSocialMediaCard href='#' className='instagram'>
                <BsInstagram size={38} color='#CF4580' />
                <h1>Instagram</h1>
              </S.InstagramSocialMediaCard>

              <S.WhatsappSocialMediaCard href='#' className='whatsapp'>
                <BsWhatsapp size={38} color='#00BB26' />
                <h1>Whatsapp</h1>
              </S.WhatsappSocialMediaCard>
            </div>
          </S.Content>
          <S.GradientTop />
          <S.GradientBottom />
        </S.ContentWrapper>
      </S.Section>

      <S.Footer>
        <h1>
          Juja Arts | 2023
        </h1>
      </S.Footer>
    </S.Container>
  )
}
