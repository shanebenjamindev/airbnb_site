import React from 'react'
import './about.css'


export default function About() {
  return (
    <div className='section__About p-5'>
      <div className="container-fluid  about-us">
        <div>
          <div className="text-center ">
            <div>
              <h2 className="main__Title text-white">About Us</h2>
            </div>
            <div className="outline"></div>
            <div className='text-white ' data-aos="flip-right">
              <div>
                <p>
                  Contrary to popular belief,  literature from 45 BC, making it over 2000 years old. Avalon’s leading hotels with gracious island hospitality, thoughtful amenities and distinctive .
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

        <div className='d-md-flex my-5 about-image-content'>
          <div className="about__Item" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="900">
            <div>
            <img width={"300px"} height={"450px"} src="https://i.pinimg.com/originals/3c/07/86/3c07863b9dfc0a06314462f0d84f70fe.jpg" className="img-responsive img-v4" alt="" />
            </div>
          </div>
          <div className="about__Item" data-aos="fade-up" data-aos-duration="1500">
            <div>
              <img width={""} height={"600px"} src="https://hips.hearstapps.com/hmg-prod/images/melanie-pounds-mountain-brook-house-tour-living-room-fireplace-jpg-1623351404.jpg" className="img-responsive " alt="" />
            </div>
          </div>
          <div className="about__Item" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900">
            <img width={"300px"} height={"450px"} src="https://i.pinimg.com/564x/38/c4/94/38c49428e91dbd05e0650c83edc86a04.jpg" className="img-responsive img-v4" alt="" />
            <div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}