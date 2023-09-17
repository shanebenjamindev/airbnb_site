import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./homemenu.css";

import { Fade } from 'react-reveal'
import { actListCity } from "../../../redux/types/actions";
import { useNavigate } from "react-router-dom";
export default function HomeMenu() {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const listCityDataMenu = useSelector((state) => state.cityReducer.data);

  useEffect(() => {
    dispatch(actListCity());
  }, [dispatch]);

  const handleOnChange = (e) => {
    return navigate(`/roombycity/${e.target.value}`);
  };
  
  const renderDropDownCity = () => {
    return (
      <>
        <option className='bg-dark text-light' value={""}>- Chọn thành phố -</option>
        {
          listCityDataMenu?.map((city, index) => {
            return <option className='bg-dark text-light' key={index} value={city.id}>{city.tenViTri}</option>
          })
        }
      </>
    )
  }

  return (
    <section className="myCover">
      <div className="cover__content">
        <div className="row tool-search ">
          <Fade left delay={2000} >
            <div className="drop col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="dropdown">
                <span className="room-out">lOCATION</span>
                <input className="form-control" />
                <select
                  className="form-control"
                  style={{ position: "absolute", left: 10, top: 40 }}
                  placeholder="Select a person"
                  onChange={handleOnChange} name="selectedCityId"
                >
                  {renderDropDownCity()}
                </select>
              </div>
            </div> </Fade>
          <Fade top delay={2100}>
            <div className=" drop col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <span className="room-out">CHECK IN</span>
              <input className="form-control" type="date" />
            </div></Fade>

          <Fade right delay={2000}>
            <div className=" drop col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <span className="room-out">CHECK OUT</span>
              <input className="form-control" type="date" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
