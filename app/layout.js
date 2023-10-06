import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Westscince Press',
  description: 'Westscience Press is a fast and reliable institution for publishing national and international journals with various scopes. Westscience Press focuses on helping students, teachers, lecturers, and academics. In addition, Westscinece Press has the service of publishing leading conference proceedings annually.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
