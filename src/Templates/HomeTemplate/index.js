import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Header'
import Footer from '../../components/Footer'

export default function HomeTemplate() {
  return (
    <div className='w-75 m-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
