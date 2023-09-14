import React, { Fragment, useEffect, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PhanTrangTimKiemAction } from "../../../redux/Actions/ViTriDatVeAction";
import Slider from "react-slick";
import "../HomeRoom/diemden.css";
import { NavLink } from "react-router-dom";
import { getDsPhongTheoViTriAction } from "../../../redux/Actions/PhongActions";
import {Flip,Bounce } from 'react-reveal';
import Pulse from 'react-reveal/Pulse';
export default function HomeDiemDen(props) {

  const { DsViTri } = useSelector((state) => state.DSVitri);
  console.log(DsViTri, "phân trang");


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDsPhongTheoViTriAction());
  }, []);



  const renderPhanTrang = () => {
    return DsViTri.map((page, index) => {
      return (
        <Fragment key={index}>
          <Pulse delay={100}>
          <div className="card" style={{ width: "90%" }}>
            <img
              src={page.hinhAnh}
              style={{ width: "100%", height: "250px" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <p className="tinhthanh ">{page.tinhThanh}</p>
              <span className="vitri mb-3">{page.tenViTri}</span>
            </div>
            <div className="content-diemDen">
              <div className="wrap-content">
                <div className="rooms-content1">
                  <h4 className="sky-h4 ">{page.tinhThanh}</h4>
                  <h3 className="sky-h3 mb-3">{page.tenViTri}</h3>
                </div>

                <div className="bottom-room mt-3">
                  <ul className="row">
                    <li className="col-6" style={{ color: "#8E7037" }}>
                      <img
                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/v2-icon.png"
                        className="img-responsive"
                        alt="Image"
                      />
                      <span className="icon-location"> 4 Persons</span>
                    </li>
                    <li className="col-6">
                      <img
                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/v2-icon-1.png"
                        className="img-responsive"
                        alt="Image"
                      />
                      <span className="icon-location">{page.tenViTri}</span>
                    </li>
                    <li className="col-6 mt-3">
                      <img
                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/v2-icon-2.png"
                        className="img-responsive"
                        alt="Image"
                      />
                      <span className="icon-location">{page.quocGia}</span>
                    </li>
                    <li className="col-6 mt-3">
                      <img
                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/v2-icon-3.png"
                        className="img-responsive"
                        alt="Image"
                      />
                      <span className="icon-location">{page.tinhThanh}</span>
                    </li>
                  </ul>
                </div>
                <div className="btn btn-room">
                  <NavLink to={`/Home/room/${page.id}`} >
                    <span className="click" style={{ color: '#8e7037' }}>CLICK HERE</span>
                  </NavLink>

                </div>
              </div>
            </div>
          </div>
          </Pulse>
        </Fragment>
      );
    });
  };

  //setting realslick
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="rooms">
      <Flip delay={2000}>
      <h2 className="ourroom">Our Room</h2>
      <div className="outline"></div>
      </Flip>
      <Bounce delay={2200}>
      <p className="room-p">
        When you host a party or family reunion, the special celebrations let
        you streng then bonds with
      </p>
      </Bounce>
     
      <div className="container mt-5" style={{ alignItems: "center" }}> 
        <Slider {...settings}>{renderPhanTrang()}</Slider>
      </div>
      
      
    </div>

  );
}
