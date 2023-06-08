import { Inter } from 'next/font/google'
/* Styles */
import '/public/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'リスキリング・キャリア',
  description: 'リスキリングを通じてキャリアを変える',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
