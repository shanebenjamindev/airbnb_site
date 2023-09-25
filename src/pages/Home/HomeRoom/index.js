import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actHomeListRoom } from "../../../redux/actions/actRoom";
import Room from "./Room";

export default function HomeRoom() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actHomeListRoom());
  }, [dispatch]);

  const { loading, data, error } = useSelector((state) => state.roomReducer);
  const listRoom = data

  // const error = useSelector((state) => state.roomReducer.error);
  const renderListRoom = () => {
    if (loading && error) {
      return null
    }

    return listRoom?.data?.map((item, index) => (
      <div key={index} className="col-lg-3 col-sm-6 my-2" data-aos="fade-up" data-aos-anchor-placement="top-center">
        <Room room={item} />
      </div>
    ));
  };

  return (
    <div className="section__Item-primary p-5">
      <div className="text-center">
        <div delay={1000}>
          <h2 className="main__Title">Our Room</h2>
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
