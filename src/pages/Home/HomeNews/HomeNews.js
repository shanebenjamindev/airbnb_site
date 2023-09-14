import React from "react";
import "../HomeNews/HomeNews.css";
import { Zoom,Fade } from "react-reveal";


export default function HomeNews(props) {
  return (

    <section className="news news-v3 news-v4">
      <div className="container">
   
        <h2 className="new-title">
        <Zoom left cascade delay={2500}>
          News
          </Zoom>
          </h2>
    
        <div className="line-v2" />
        <div className="row">
          <Fade left delay={2000}>
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
          </Fade>
          <Fade bottom delay={2100}>
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
          </Fade>
          <Fade right delay={2000}>
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
          </Fade>
        </div>
      </div>
    </section>
  );
}
