import React from 'react'
import './style.css'
import HomeCarousel from './HomeCarousel';
import HomeRoom from './HomeRoom';
import HomeVideo from './HomeVideo';
import HomeAbout from './HomeAbout';
import HomeNews from './HomeNews';
import HomeMenu from './HomeMenu';
// import HomeMenu from './HomeMenu';

export default function HomePage() {

  return (
    <div>
      <HomeCarousel />
      <HomeRoom />
      <HomeVideo />
      <HomeAbout />
      <HomeNews />
    </div >
  )
}
