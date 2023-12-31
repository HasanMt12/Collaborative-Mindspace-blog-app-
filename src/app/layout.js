import Nav from '@/components/navbar/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/providers/AuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Collaborative Mindspace',
  description: 'Blog Website',
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper px-20 ">
                <Nav/>
                {children}
              <Footer /> {/* Render the Footer conditionally */}
              </div>
              
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
