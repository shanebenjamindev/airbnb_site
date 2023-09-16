import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import './style.css'
import HomeCarousel from './HomeCarousel';
import HomeRoom from './HomeRoom';
import HomeVideo from './HomeVideo';
import { useDispatch, useSelector } from 'react-redux';
import { actHomeListRoom } from '../../redux/types/actions';
import About from '../About';

export default function HomePage() {

  return (
    <div>
      <section>
        <HomeCarousel />
      </section>

      <section>
      </section>
      <section> <HomeRoom /> </section>
      <HomeVideo />
      <About />

    </div >
  )
}
