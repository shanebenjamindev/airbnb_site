import React from "react";
import "./style.css";
import { motion } from 'framer-motion'

export default function HomeCarousel(props) {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./img/slider-1.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <motion.div
              initial={{ y: "3vw", opacity: 0, transitionDelay: 2000, }}
              animate={{ y: 0, opacity : 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h1 className="unique">
                Unique Experience
              </h1>
            </motion.div>
            <div>
              <p className="Enjoy">
                {" "}
                <span className="line-t"></span>
                Enjoy With US
                <span className="line-b"></span>
              </p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src="./img/slider.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption">
            <motion.div
              initial={{ y: "30vw", transitionDelay: 2000, }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
            >
              <h1 className="unique">
                Enjoy a Luxury Experience
              </h1>
            </motion.div>
            <div>
              <p className="Enjoy">
                {" "}
                <span className="line-t"></span>
                Enjoy With US
                <span className="line-b"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
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
    </div >
  );
}

