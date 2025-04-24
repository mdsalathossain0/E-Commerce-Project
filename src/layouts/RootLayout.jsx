import React from 'react'
import Navber from '../layouts/Navber'
import Sideber from '../layouts/Sideber'
import Footer from '../layouts/Footer'
import { Outlet } from 'react-router-dom'
const RootLayout = () => {
  return (
    <div>
        
        <Navber/>
        <Sideber/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default RootLayout