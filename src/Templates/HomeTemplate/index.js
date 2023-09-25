import React from 'react'
import Navbar from './components/Header'
import Footer from './components/Footer'
import './style.css'
import PageContent from './components/PageContent'

export default function HomeTemplate() {
  return (
    <div className=''>
      <Navbar />
      <PageContent />
      <Footer />
    </div>
  )
}
