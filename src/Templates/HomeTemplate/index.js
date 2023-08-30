import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Header'
import Footer from '../../components/Footer'

export default function HomeTemplate() {
  return (
    <div className=''>
      <Navbar />
      <div className='w-75 m-auto'>
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}
