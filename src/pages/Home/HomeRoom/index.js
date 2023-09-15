import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fade from 'react-reveal/Fade';
import { Flip, Bounce } from "react-reveal";
import "./style.css";
import { actHomeListRoom } from "../../../redux/types/actions";

export default function HomeRoom() {
  const dispatch = useDispatch();
  const [pageIndex, setPageIndex] = useState(1); // Current page index

  useEffect(() => {
    dispatch(actHomeListRoom(pageIndex));
  }, [dispatch, pageIndex]);

  const listRoom = useSelector((state) => state.homeListRoomReducer.data);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Adjust the number of items per slide as needed
    slidesToScroll: 4, // Adjust the number of items to scroll as needed
  };

  const renderListRoom = () => {
    if (listRoom) {
      return listRoom.data?.map((item) => (
        <div key={item.id} className="my-2 col-md-3 col-sm-6 col-xs-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{item.tenPhong}</h5>
            </div>
            <div>
              <button className="btn">show</button>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div className="container">
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
      <div className="row">
        <Fade bottom delay={2000}>
          {renderListRoom()}
        </Fade>
      </div>
    </div>
  );
}
