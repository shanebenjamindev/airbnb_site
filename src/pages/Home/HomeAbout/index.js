import React from 'react'
import './about.css'


export default function About() {
  return (
    <section id='section__About' className="about p-5" >
      <div className="container-fluid">
        <div>
          <div className="about-centent text-center">
            <div>
              <h2 className="main__Title text-white">About Us</h2>
            </div>
            <div className="outline"></div>
            <div className='text-white'>
              <div>
                <p>
                  Contrary to popular belief, Lorem isn’t simply random text. It has roots in a of classical Latin literature from 45 BC, making it over 2000 years old. Avalon’s leading hotels with gracious island hospitality, thoughtful amenities and distinctive .
                </p>
              </div>
              <div>
                <p>
                  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage ...
                </p>
              </div>

            </div>
          </div>
        </div>


      </div>
      <div className='d-flex about__Content container flex-wrap'>
        <div className="about__Item col-md-3 col-lg-3">
          <div>
            <img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about.jpg" className="img-responsive img-v4" alt="" />
          </div>
        </div>
        <div className="about__Item col-md-6">
          <div>
            <img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about-1.jpg" className="img-responsive " alt="" />
          </div>
        </div>
        <div className="about__Item col-md-3 col-lg-3">
          <div>
            <img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about-2.jpg" className="img-responsive img-v4" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}