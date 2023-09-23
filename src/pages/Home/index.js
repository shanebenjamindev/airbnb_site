import React, { useEffect } from 'react'
import './style.css'
import HomeCarousel from './HomeCarousel';
import HomeRoom from './HomeRoom';
import HomeVideo from './HomeVideo';
import HomeAbout from './HomeAbout';
import HomeNews from './HomeNews';
import Menu from './Menu';
import HomeBlogs from './HomeBlogs';

export default function HomePage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div>
      <HomeCarousel />
      <Menu />
      <HomeRoom />
      <HomeAbout />
      <HomeVideo />
      <div className='bg-white'>
        <HomeBlogs />
        <div className='container'>
          <iframe className=''
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.835874782257!2d106.68809554999999!3d10.7568982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1svi!2s!4v1664300539026!5m2!1svi!2s"
            height={200}
            frameBorder={0}
            style={{ border: 0, width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" title='intro__Video'
          />
          <HomeNews />

        </div>
      </div>
    </div >
  )
}
