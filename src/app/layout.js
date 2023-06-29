import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className} suppressHydrationWarning={true} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
