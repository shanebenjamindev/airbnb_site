import React from 'react'
import './style.css'
import HomeCarousel from './HomeCarousel';
import HomeRoom from './HomeRoom';
import HomeVideo from './HomeVideo';
import HomeAbout from './HomeAbout';
import HomeNews from './HomeNews';
import Menu from './Menu';

export default function HomePage() {

  return (
    <div>
      <HomeCarousel />
      <Menu />
      <HomeRoom />
      <HomeVideo />
      <HomeAbout />
      <HomeNews />
    </div >
  )
}
