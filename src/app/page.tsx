'use client'
import { ThemeProvider } from 'styled-components'
import { Container, Footer } from '@/styles/globals'
import { LightTheme } from '@/styles/themes'

import { HeroSection } from '@/components/HeroSection'
import { WhatToExpect } from '@/components/WhatToExcpect'
import { MyWork } from '@/components/MyWork'
import { MoreOfMyWork } from '@/components/MoreOfMyWork'

export default function Home() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Container>

        <HeroSection />
        <WhatToExpect />
        <MyWork />
        <MoreOfMyWork />

        <Footer>
          <h1>
            © 2023 JujaArts. Todos os direitos reservados.
          </h1>
        </Footer>
      </Container>
    </ThemeProvider>
  )
}
