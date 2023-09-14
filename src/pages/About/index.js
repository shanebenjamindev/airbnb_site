import React from 'react'
import Design from '../HomeMenu/DesignHome/Design'
import HomeVideo from '../HomeMenu/HomeVideo/HomeVideo'
import Roomheader from '../Room&Rate/RoomHeader/Roomheader'
import './About.css'
import {Fade} from 'react-reveal'
import Countup from 'react-countup'
export default function About() {
  return (
    <div>
      <Roomheader />
      <section className="section-about">
        <div className="container">
          <div className="row">
            <div className="wrap-about">
              <div className="about-item row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding-right">
                  <Fade left delay={2000}>
                  <div className="img">
                    <img src="http://landing.engotheme.com/html/skyline/demo/images/About/about.jpg" alt="#" className="img-responsive" />
                  </div></Fade>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding-left">
                <Fade right  delay={2100}>
                  <div className="text">
                    <h2 className="heading">ABOUT US</h2>
                    <div className="desc">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                      <br />
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure </p>
                    </div>
                  </div>
                  </Fade>
                </div>
              </div>
            
              <div className="about-item about-right row">
              <Fade left delay={2100}>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 no-padding-right col-lg-pull-6 col-md-pull-6">
                  <div className="text">
                    <h2 className="heading">WHY GUEST CHOOSE  SKYLINE HOTEL?</h2>
                    <div className="desc">
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
                        <br />desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                      </p>
                    </div>
                  </div>
                </div>
                </Fade>
                <Fade right  delay={2000}>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6  no-padding-left col-lg-push-6 col-md-push-6 ">
                  <div className="img">
                    <img src="http://landing.engotheme.com/html/skyline/demo/images/About/about-1.jpg" alt="#" className="img-responsive" />
                  </div>
                </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="section-statistics ">
  <div className="container">
    <div className="statistics">
      <h2 className="heading text-center">
      <Fade top delay={2000}>Hotel statistics</Fade></h2>
      <div className="statistics_content">
        <div className="row">
          {/* ITEM */}
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col">
            <div className="item1">
              <Countup end={768} duration={20} className="count">
              </Countup>
              <span>Guest Stay</span>
            </div>
          </div>
          {/* END ITEM */}
          {/* ITEM */}
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col">
            <div className="item1">
            <Countup end={632} duration={20} className="count">
              </Countup>
              <span>BOOK ROOM</span>
            </div>
          </div>
          {/* END ITEM */}
          {/* ITEM */}
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col">
            <div className="item1">
            <Countup end={1024} duration={20} className="count">
              </Countup>
              <span>MEMBER STAY</span>
            </div>
          </div>
          {/* END ITEM */}
          {/* ITEM */}
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3 col">
            <div className="item1 no-border">
            <Countup end={256} duration={20} className="count">
              </Countup>
              <span>MEALS SERVED</span>
            </div>
          </div>
          {/* END ITEM */}
        </div>
      </div>
    </div>
  </div>
</section>
<section className="section-team">
  <div className="container">
    <div className="team">
      <Fade top delay={2000}>
      <h2 className="heading text-center">INVENTORS</h2></Fade>\
      <Fade bottom delay={2000}>
      <p className="sub-heading text-center">Lorem Ipsum is simply dummy text of the printing</p></Fade>
      <div className="team_content">
        <div className="row">
        <Fade left delay={2000}>
          <div className="col-xs-6 col-md-3">
            <div className="team_item text-center">
              <div className="img">
                <a href="#"><img src="http://landing.engotheme.com/html/skyline/demo/images/About/about-3.png" alt="#" /></a>
              </div>
              <div className="text">
                <h2>JESSICA ALBA</h2>
                <span>Manager lotus Hotel</span>
                <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                <div className="team-share">
                  <a href="#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true" /></a>
                  <a href="#" title="Facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></a>
                  <a href="#" title="Tripadvisor"><i className="fa fa-tripadvisor" aria-hidden="true" /></a>
                  <a href="#" title="Isnstagram"><i className="fa fa-instagram" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </div></Fade>
          <Fade top delay={2000}>
          <div className="col-xs-6 col-md-3">
            <div className="team_item text-center">
              <div className="img">
                <a href="#"><img src="http://landing.engotheme.com/html/skyline/demo/images/About/about-4.png" alt="#" /></a>
              </div>
              <div className="text">
                <h2>Robet WILIAM</h2>
                <span>Founder Hotel</span>
                <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                <div className="team-share">
                  <a href="#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true" /></a>
                  <a href="#" title="Facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></a>
                  <a href="#" title="Tripadvisor"><i className="fa fa-tripadvisor" aria-hidden="true" /></a>
                  <a href="#" title="Isnstagram"><i className="fa fa-instagram" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </div></Fade>
          <Fade bottom delay={2000}>
          <div className="col-xs-6 col-md-3">
            <div className="team_item text-center">
              <div className="img">
                <a href="#"><img src="http://landing.engotheme.com/html/skyline/demo/images/About/about-5.png" alt="#" /></a>
              </div>
              <div className="text">
                <h2>Adam</h2>
                <span>Lorem lipsum</span>
                <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                <div className="team-share">
                  <a href="#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true" /></a>
                  <a href="#" title="Facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></a>
                  <a href="#" title="Tripadvisor"><i className="fa fa-tripadvisor" aria-hidden="true" /></a>
                  <a href="#" title="Isnstagram"><i className="fa fa-instagram" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </div></Fade>
          <Fade right delay={2000}>
          <div className="col-xs-6 col-md-3">
            <div className="team_item text-center">
              <div className="img">
                <a href="#"><img src="http://landing.engotheme.com/html/skyline/demo/images/About/about-6.png" alt="#" /></a>
              </div>
              <div className="text">
                <h2>David Gari</h2>
                <span>Lorem lipsum</span>
                <p>Mea omnium explicari te, eu sit vidit harum fabellas, his no legere feugaitper in laudem malorum epicuri, quod natum evertitur ne per.</p>
                <div className="team-share">
                  <a href="#" title="Twitter"><i className="fa fa-twitter" aria-hidden="true" /></a>
                  <a href="#" title="Facebook"><i className="fa fa-facebook-square" aria-hidden="true" /></a>
                  <a href="#" title="Tripadvisor"><i className="fa fa-tripadvisor" aria-hidden="true" /></a>
                  <a href="#" title="Isnstagram"><i className="fa fa-instagram" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
          </div>
          </Fade>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
