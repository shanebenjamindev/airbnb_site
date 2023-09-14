import React, { useEffect, useState } from "react"; // Import useState
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { Flip, Bounce } from "react-reveal";
import "./style.css";
import { actHomeListRoom } from "../../../redux/types/actions";

export default function HomeRoom() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actHomeListRoom())
  }, [dispatch])

  const listRoom = useSelector((state) => state.homeListRoomReducer.data)

  if (listRoom) {
    console.log(listRoom);
  }

  const [settings, setSettings] = useState({
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
  });

  const renderListRoom = () => {
    return listRoom?.map((item) => {
      return <>{item}</>
    })
  }


  return (
    <div className="pt-5">
      <Flip delay={2000}>
        <h2 className="ourroom">Our Room</h2>
        <div className="outline"></div>
      </Flip>
      <Bounce delay={2200}>
        <p className="room-p">
          When you host a party or family reunion, the special celebrations let
          you strengthen bonds with
        </p>
      </Bounce>
      <div className="container mt-5" style={{ alignItems: "center" }}>
        <Slider {...settings}>
          {renderListRoom()}
        </Slider>
      </div>
    </div>
  );
}
