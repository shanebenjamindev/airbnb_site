import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Header'
import Footer from '../components/Footer'
import './style.css'

export default function HomeTemplate() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
