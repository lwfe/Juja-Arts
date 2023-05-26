import { GlobalStyle } from '@/styles/globals'
import { Josefin_Sans } from 'next/font/google'
const josefinSans = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Juja Arts',
  description: 'Encontre a sua melhor arte digital aqui!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body className={josefinSans.className}>{children}</body>
    </html>
  )
}
