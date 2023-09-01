import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Header'
import Footer from '../../components/Footer'
import './style.css'

export default function HomeTemplate() {
  return (
    <div className=''>
      <Navbar />
      <div className='main m-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
