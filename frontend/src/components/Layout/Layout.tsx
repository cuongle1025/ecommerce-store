import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="px-80">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
