'use client'
import { HeroSection } from '@/components/HeroSection'
import { AboutMe } from '@/components/AboutMe'

import * as S from '../styles/home.styles'

import { BsWhatsapp, BsFillGiftFill, BsPencilSquare, BsInstagram } from 'react-icons/bs'
import { HowItWorks } from '@/components/HowItWorks'

export default function Home() {
  return (
    <S.Container>

      <HeroSection />
      <AboutMe />
      <HowItWorks />


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
