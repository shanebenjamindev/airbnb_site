import React from 'react'
import Fade from 'react-reveal/Fade';
import Responsive from './HomeSlick'
import './style.css'
export default function HomePage() {
  return (
    <div>
      <section className="about about-v2 about-v4 mt-3" >
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-md-offset-2 col-lg-12 col-lg-offset-2" >
              <div className="about-centent" style={{ textAlign: 'center' }}>
                <Fade top delay={1000}>
                  <h2 className="about-title text-center">About Us</h2>
                </Fade>
                <div className="outline"></div>
                <Fade left delay={900}>
                  <p className="about-p">Contrary to popular belief, Lorem isn’t simply random text. It has roots in a of classical Latin literature from 45 BC, making it over 2000 years old. Avalon’s leading hotels with gracious island hospitality, thoughtful amenities and distinctive .</p>
                </Fade>
                <Fade right delay={900}>
                  <p className="about-p1">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage ...</p>
                </Fade>

              </div>
            </div>
            <Fade left delay={2200}>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about.jpg" className="img-responsive img-v4" alt="Image" />
              </div>
            </Fade>
            <Fade bottom delay={2400}>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about-1.jpg" className="img-responsive " alt="Image" />
              </div>
            </Fade>
            <Fade right delay={2200}>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about-2.jpg" className="img-responsive img-v4" alt="Image" />
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <Responsive />

    </div>
  )
}
