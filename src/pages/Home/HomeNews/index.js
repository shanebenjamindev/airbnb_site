import React from "react";
import "./news.css";

export default function HomeNews() {
  return (

    <section className="section__News bg-white p-5">
      <div className="container">

        <h2 className="section__Title">
          <div>
            News
          </div>
        </h2>

        <div className="line" />
        <div className="row">

          <div className="substance col-lg-4 col-md-4 col-sm-12">
            <div className="date">
              <div className="day">25</div>
              <div className="year">
                {" "}
                AUGUST
                <br />
                2017
              </div>
            </div>
            <div className="text">
              <a href="#">
                Update menu food in <br /> Skyline Hote
              </a>
            </div>
            <a href="#" className="read-more">
              Read More
            </a>
          </div>

          <div className="substance col-lg-4 col-md-4 col-sm-12">
            <div className="date">
              <div className="day">22</div>
              <div className="year">
                {" "}
                AUGUST
                <br />
                2017
              </div>
              <div className="text">
                <a href="#">
                  Las Maquinas
                  <br /> on Tragamonedas
                </a>
              </div>
              <a href="#" className="read-more">
                Read More{" "}
              </a>
            </div>
          </div>
          <div className="substance col-lg-4 col-md-4 col-sm-12">
            <div className="date">
              <div className="day">06</div>
              <div className="year">
                {" "}
                AUGUST
                <br />
                2017
              </div>
            </div>
            <div className="text">
              <a href="#">
                Mother Earth Hosts
                <br /> Our Travels
              </a>
            </div>
            <a href="#" className="read-more">
              Read More{" "}
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
