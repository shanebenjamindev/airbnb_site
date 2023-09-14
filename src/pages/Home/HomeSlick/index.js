import React, { Component } from "react";
import Slider from "react-slick";
import "../HomeSlick/Homeslick.css";
import Roll from 'react-reveal/Roll';
export default class Responsive extends Component {
  render() {
    //setting real slick
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container">
            <Roll bottom delay={300}>
        <Slider {...settings}>
          <div className="owl-item" style={{ width: 270, marginRight: 30 }}>
            <div className="item">
              <div className="wrap-best wrap-best-v3 text-uppercase">
                <div className="icon-best">
                  <img
                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-1/about-icon-2.png"
                    className="img-responsive"
                    alt="Image"
                  />
                </div>
                <h6 className="sky-h6">Master Bedrooms</h6>
              </div>
            </div>
          </div>
          <div className="owl-item" style={{ width: 270, marginRight: 30 }}>
            <div className="item">
              <div className="wrap-best wrap-best-v3 text-uppercase">
                <div className="icon-best">
                  <img
                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-1/about-icon-2.png"
                    className="img-responsive"
                    alt="Image"
                  />
                </div>
                <h6 className="sky-h6">Master Bedrooms</h6>
              </div>
            </div>
          </div>
          <div className="owl-item" style={{ width: 270, marginRight: 30 }}>
            <div className="item">
              <div className="wrap-best wrap-best-v3 text-uppercase">
                <div className="icon-best">
                  <img
                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-1/about-icon-3.png"
                    className="img-responsive"
                    alt="Image"
                  />
                </div>
                <h6 className="sky-h6">Master Bedrooms</h6>
              </div>
            </div>
          </div>
          <div className="owl-item" style={{ width: 270, marginRight: 30 }}>
            <div className="item">
              <div className="wrap-best wrap-best-v3 text-uppercase">
                <div className="icon-best">
                  <img
                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-1/about-icon-4.png"
                    className="img-responsive"
                    alt="Image"
                  />
                </div>
                <h6 className="sky-h6">Master Bedrooms</h6>
              </div>
            </div>
          </div>
          <div className="owl-item" style={{ width: 270, marginRight: 30 }}>
            <div className="item">
              <div className="wrap-best wrap-best-v3 text-uppercase">
                <div className="icon-best">
                  <img
                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-1/about-icon-1.png"
                    className="img-responsive"
                    alt="Image"
                  />
                </div>

                <h6 className="sky-h6">Master Bedrooms</h6>
              </div>
            </div>
          </div>
          <div className="owl-item" style={{ width: 270, marginRight: 30 }}>
            <div className="item">
              <div className="wrap-best wrap-best-v3 text-uppercase">
                <div className="icon-best">
                  <img
                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-1/about-icon-2.png"
                    className="img-responsive"
                    alt="Image"
                  />
                </div>

                <h6 className="sky-h6">Master Bedrooms</h6>
              </div>
            </div>
          </div>
          <div className="owl-item" style={{ width: 270, marginRight: 30 }}>
            <div className="item">
              <div className="wrap-best wrap-best-v3 text-uppercase">
                <div className="icon-best">
                  <img
                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-1/about-icon-3.png"
                    className="img-responsive"
                    alt="Image"
                  />
                </div>

                <h6 className="sky-h6">Master Bedrooms</h6>
              </div>
            </div>
          </div>
          <div className="owl-item" style={{ width: 270, marginRight: 30 }}>
            <div className="item">
              <div className="wrap-best wrap-best-v3 text-uppercase">
                <div className="icon-best">
                  <img
                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-1/about-icon-4.png"
                    className="img-responsive"
                    alt="Image"
                  />
                </div>

                <h6 className="sky-h6">Master Bedrooms</h6>
              </div>
            </div>
          </div>
          <div className="owl-item" style={{ width: 270, marginRight: 30 }}>
            <div className="item">
              <div className="wrap-best wrap-best-v3 text-uppercase">
                <div className="icon-best">
                  <img
                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-1/about-icon-1.png"
                    className="img-responsive"
                    alt="Image"
                  />
                </div>

                <h6 className="sky-h6">Master Bedrooms</h6>
              </div>
            </div>
          </div>
          <div className="owl-item" style={{ width: 270, marginRight: 30 }}>
            <div className="item">
              <div className="wrap-best wrap-best-v3 text-uppercase">
                <div className="icon-best">
                  <img
                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-1/about-icon-2.png"
                    className="img-responsive"
                    alt="Image"
                  />
                </div>

                <h6 className="sky-h6">Master Bedrooms</h6>
              </div>
            </div>
          </div>
        </Slider>
        </Roll>
      </div>
    );
  }
}
