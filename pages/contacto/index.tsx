import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Contacto() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
       <h1>Esta es la vista de contacto</h1>
    </div>
  )
}
