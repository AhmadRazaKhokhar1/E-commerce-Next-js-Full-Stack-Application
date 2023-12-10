import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Commerce Store',
  description: 'An E-Commerce store created by Ahmad Raza khokhar using next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NavBar/>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
