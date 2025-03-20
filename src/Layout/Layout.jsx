import { Outlet } from 'react-router-dom'
import { Heder } from '../component/Heder/Heder'
import { Footer } from '../component/Footer/Footer'


const Layout = () => {
  return (
    <>
      <Heder  />
      <Outlet />
      <Footer/>
    </>
  )
}

export default Layout
