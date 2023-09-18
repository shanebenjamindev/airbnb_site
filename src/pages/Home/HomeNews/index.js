import React from "react";
import "./news.css";

export default function HomeNews() {
  return (

    <section className="section__News my-5">
      <div className="container">

        <h2 className="section__Title">
          <div left cascade delay={1500}>
            News
          </div>
        </h2>

        <div className="line-v2" />
        <div className="row">
          <div left delay={1000}>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="substance">
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
            </div>
          </div>
          <div bottom delay={1100}>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="substance">
                <div className="date">
                  <div className="day">22</div>
                  <div className="year">
                    {" "}
                    AUGUST
                    <br />
                    2017
                  </div>
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
          </div>
          <div right delay={1000}>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="substance">
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
        </div>
      </div>
    </section>
  );
}
