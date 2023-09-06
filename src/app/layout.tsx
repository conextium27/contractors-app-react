import './globals.css'
import Navbar from '../components/navbar/Navbar'


export const metadata = {
  title: 'Contractors-app',
  description: 'developed by Ricardo Espinosa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col h-full w-full absolute'>
		<Navbar></Navbar>
	  	{children}
	</body>
    </html>
  )
}
