'use client'
import { HeroSection } from '@/components/HeroSection'
import { AboutMe } from '@/components/AboutMe'

import * as S from '../styles/home.styles'

import { BsWhatsapp, BsFillGiftFill, BsPencilSquare, BsInstagram } from 'react-icons/bs'
import { HowItWorks } from '@/components/HowItWorks'
import { MyServices } from '@/components/MyServices'
import { ContactMe } from '@/components/ContactMe'

export default function Home() {
  return (
    <S.Container>

      <HeroSection />
      <AboutMe />
      <HowItWorks />
      <MyServices />
      <ContactMe />

      <S.Footer>
        <h1>
          Juja Arts | 2023
        </h1>
      </S.Footer>
    </S.Container>
  )
}
