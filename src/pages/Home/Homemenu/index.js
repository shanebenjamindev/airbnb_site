import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./home-menu.css";
import { actListCity } from "../../../redux/types/actions";
import { useNavigate } from "react-router-dom";

export default function HomeMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listCityDataMenu = useSelector((state) => state.cityReducer.data);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    dispatch(actListCity());
  }, [dispatch]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOnChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue) {
      navigate(`/roombycity/${selectedValue}`);
    }

  };

  const renderDropDownCity = () => {
    if (isDropdownOpen) {
      console.log(listCityDataMenu);
      return (
        <div className="dropdown__Menu-Show">
          <div className="text-light bg-custom-primary" value={""}>
            - Chọn thành phố -
          </div>
          {listCityDataMenu?.map((city, index) => (
            <option onClick={handleOnChange}
              className="nav-link text-light bg-custom-primary"
              key={index}
              value={city.id}
            >
              {city.tenViTri}
            </option>
          ))}
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
                className="btn w-100 bg-white"
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
