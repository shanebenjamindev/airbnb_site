import React, { useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import './style.css'
import HomeCarousel from './HomeCarousel';
import HomeRoom from './HomeRoom';
import { useDispatch, useSelector } from 'react-redux';
import { actHomeListRoom } from '../../redux/types/actions';

export default function HomePage() {

  return (
    <div>
      <section>
        <HomeCarousel />
      </section>

      <section> <HomeRoom /> </section>

      <section id='section__About' className="about about-v2 about-v4 mt-3" >
        <div className="container-fluid">
          <div>
            <div className="about-centent text-center">
              <Fade delay={1000}>
                <h2 className="about-title">About Us</h2>
              </Fade>
              <div className="outline"></div>
              <div className='overflow-content'>
                <p>
                  <Fade left delay={200}>
                    Contrary to popular belief, Lorem isn’t simply random text. It has roots in a of classical Latin literature from 45 BC, making it over 2000 years old. Avalon’s leading hotels with gracious island hospitality, thoughtful amenities and distinctive .
                  </Fade>
                </p>
                <p>
                  <Fade right delay={900}>
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage ...
                  </Fade>
                </p>

              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.835874782257!2d106.68809554999999!3d10.7568982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1svi!2s!4v1664300539026!5m2!1svi!2s"
            height={500}
            frameBorder={0}
            style={{ border: 0, width: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className='d-flex'>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <Fade left delay={2200}>
                <img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about.jpg" className="img-responsive img-v4" alt="" />
              </Fade>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <Fade bottom delay={2400}>
                <img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about-1.jpg" className="img-responsive " alt="" />
              </Fade>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <Fade right delay={2200}>
                <img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about-2.jpg" className="img-responsive img-v4" alt="" />
              </Fade>
            </div>

          </div>
        </div>
      </section >

    </div >
  )
}
