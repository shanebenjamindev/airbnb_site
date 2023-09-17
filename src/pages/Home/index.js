import React from 'react'
import './style.css'
import HomeCarousel from './HomeCarousel';
import HomeRoom from './HomeRoom';
import HomeVideo from './HomeVideo';
import HomeAbout from './HomeAbout';

export default function HomePage() {

  return (
    <div>
      <HomeCarousel />
      <HomeRoom />
      <HomeVideo />
      <HomeAbout />
    </div >
  )
}
