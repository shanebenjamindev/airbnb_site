import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./home-menu.css";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
export default function Menu() {
  const navigate = useNavigate();

  const listCityDataMenu = useSelector((state) => state.cityReducer.data);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOnChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue) {
      navigate(`/roombycity/${selectedValue}`);
    }

  };

  const animateLeft = {
    hidden: {
      x: '10vw',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.75,
        stiffness: 120
      }
    }
  }

  const animateRight = {
    hidden: {
      x: '-10vw',
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
        stiffness: 120
      }
    }
  }

  const animateUpToDown = {
    hidden: {
      y: '-10vw',
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
        stiffness: 120
      }
    }
  }

  const animateDownToUp = {
    hidden: {
      y: '10vw',
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        stiffness: 120
      }
    }
  }

  const renderDropDownCity = () => {
    if (isDropdownOpen) {
      return (
        <div>
          <div className="d-flex align-items-center flex-wrap">
            <div className="dropdown__MenuImg col-lg-4 col-md-4 d-none d-md-block">
              <motion.div
                variants={animateRight}
                initial="hidden"
                animate="visible"
              >
                <img className="MenuImg__Img" src="../../img/decoroom2.png" alt="" />
              </motion.div>
              <motion.div
                variants={animateDownToUp}
                initial="hidden"
                animate="visible"
              >
                <img className="MenuImg__Img" src="../../img/decoroom4.png" alt="" />
              </motion.div>
            </div>

            <div className="col-lg-4 col-md-4">
              <div className="text-light bg-custom-primary" value={""}>
                - Chọn thành phố -
              </div>
              {listCityDataMenu?.map((city, index) => (
                <option onClick={handleOnChange}
                  className="nav-link dropdown__Item text-light bg-custom-primary"
                  key={index}
                  value={city.id}
                >
                  {city.tenViTri}
                </option>
              ))}
            </div>

            <div className="dropdown__MenuImg col-lg-4 col-md-4">

              <motion.div
                variants={animateUpToDown}
                initial="hidden" animate="visible"
                className="MenuImg__Img">
                <img src="../../img/decoroom3.png" alt="" />
              </motion.div>

              <motion.div
                variants={animateLeft}
                initial="hidden"
                animate="visible"
              >
                <img className="MenuImg__Img" src="../../img/decoroom1.png" alt="" />
              </motion.div>

            </div>

          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="section__HomeMenu container py-5">
      <div className="section__Background"></div>
      <div className="row text-center justify-content-center p-2">
        <div>
          <div><h1 className="main__Title text-white">Welcome to our service</h1></div>
          <div className="dropdown__Content">
            <div className="">
              <div className="outline mb-4"></div>
              <button
                type="button"
                className="btn bg-white mb-2"
                onClick={toggleDropdown}
              >
                {isDropdownOpen ? (
                  <span className="main__Title">CLICK HERE TO CLOSE</span>
                ) : (
                  <span className="main__Title">CLICK HERE TO SEE OUR SERVICE LOCATION</span>
                )}

              </button>
              {renderDropDownCity()}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
