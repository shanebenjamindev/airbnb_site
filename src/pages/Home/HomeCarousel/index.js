import React from "react";
import "./style.css";
import { Fade } from "react-reveal";

export default function HomeCarousel(props) {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      
      <button
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}


<div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./img/slider-1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h1 className="unique">
              <Fade bottom big cascade>
                Unique Experience
              </Fade>
            </h1>
            <p className="Enjoy">
              {" "}
              <span className="line-t"></span>
              <Fade bottom big cascade>
                Enjoy With US
              </Fade>
              <span className="line-b"></span>
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img src="./img/slider.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <h1 className="unique">
              <Fade bottom big cascade>
                Enjoy a Luxury Experience
              </Fade>
            </h1>
            <p className="Enjoy">
              {" "}
              <span className="line-t"></span>
              <Fade bottom big cascade>
                Enjoy With US
              </Fade>
              <span className="line-b"></span>
            </p>
          </div>
        </div>
      </div>