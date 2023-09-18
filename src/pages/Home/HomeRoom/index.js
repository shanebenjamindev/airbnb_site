import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { actHomeListRoom } from "../../../redux/types/actions";
import Room from "./Room";

export default function HomeRoom() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actHomeListRoom());
  }, [dispatch]);

  const listRoom = useSelector((state) => state.homeListRoomReducer.data);

  const renderListRoom = () => {
    if (listRoom) {
      return listRoom.data?.map((item, index) => (
        <div key={index} className="col-lg-3 col-sm-6 my-2">
          <Room room={item} />
        </div>
      ));
    }
  };

  return (
    <div className="room__Content">
      <div className="text-center">
        <div delay={1000}>
          <h2 className="section__Title">Our Room</h2>
          <div className="outline"></div>
        </div>
      </div>
      <div delay={1200}>
        <p className="room-p text-center">
          When you host a party or family reunion, the special celebrations let
          you strengthen bonds with
        </p>
      </div>
      <div className="container my-4">
        <div className="row">
          {renderListRoom()}
        </div>
      </div>
    </div>
  );
}
