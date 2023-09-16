import React from 'react'
import './about.css'
import { Fade } from 'react-reveal'
export default function About() {
  return (
    <section id='section__About' className="about about-v2 about-v4 mt-3" >
      <div className="container-fluid">
        <div>
          <div className="about-centent text-center">
            <Fade delay={1000}>
              <h2 className="about-title">About Us</h2>
            </Fade>
            <div className="outline"></div>
            <div className='overflow-content'>
              <Fade left delay={200}>
                <p>
                  Contrary to popular belief, Lorem isn’t simply random text. It has roots in a of classical Latin literature from 45 BC, making it over 2000 years old. Avalon’s leading hotels with gracious island hospitality, thoughtful amenities and distinctive .
                </p>
              </Fade>
              <Fade right delay={900}>
                <p>
                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage ...
                </p>
              </Fade>

            </div>
          </div>
        </div>


      </div>
      <div className='d-flex about__Content container'>
        <div className="about__Item col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <Fade left delay={3200}>
            <img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about.jpg" className="img-responsive img-v4" alt="" />
          </Fade>
        </div>
        <div className="about__Item col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <Fade bottom delay={3400}>
            <img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about-1.jpg" className="img-responsive " alt="" />
          </Fade>
        </div>
        <div className="about__Item col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <Fade right delay={3200}>
            <img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about-2.jpg" className="img-responsive img-v4" alt="" />
          </Fade>
        </div>
      </div>
      <div className='container'>
        <iframe className=''
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.835874782257!2d106.68809554999999!3d10.7568982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1svi!2s!4v1664300539026!5m2!1svi!2s"
          height={500}
          frameBorder={0}
          style={{ border: 0, width: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}