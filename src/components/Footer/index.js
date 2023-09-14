import React from 'react';
import "./style.css";
import { Zoom } from 'react-reveal';
import { ForwardOutlined } from '@ant-design/icons';

export default function Footer() {
    return (
        <div className='container-fluid'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.835874782257!2d106.68809554999999!3d10.7568982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1svi!2s!4v1664300539026!5m2!1svi!2s"
                height={500}
                frameBorder={0}
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <footer className="footer-sky footer-sky-v4">
                <div className="container">
                    <Zoom top right cascade delay={1000}>
                        <div className="footer-top text-center">
                            <div className="icon-email">
                                <a href="#" title="Email">
                                    <img
                                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-1/footer-top-icon-l.png"
                                        alt="Email"
                                        className="img-responsive"
                                    />
                                </a>
                            </div>
                            <h2>NEWS &amp; OFFERS</h2>
                            <p>
                                Enjoy many benefits and receive our promotions and special offers
                                directly
                            </p>
                            <div className="textbox">
                                <form className="form-inline">
                                    <div className="form-group">
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Your email address"
                                                aria-label="Search for..."
                                            />
                                            <button className=" btn-footer" type="button">
                                                <span className="forwar">
                                                    <ForwardOutlined />
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div></Zoom>
                    <Zoom top left cascade delay={1000}>
                        <div className="footer-bottom bottom-v3">
                            <div className="row">
                                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 ">
                                    <div className="footer-bottom-l">
                                        <a
                                            href="https://thietkeweb9999.com/thiet-ke-web/khach-san-44"
                                            title="Thiết kế web khách sạn"
                                            rel="dofollow"
                                            target="_blank"
                                            style={{ border: "none" }}
                                        >
                                            Thiết kế
                                        </a>{" "}
                                        bởi{" "}
                                        <a target="_blank" style={{ border: "none" }}>
                                            BINH CYBERSOFT
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8 ">
                                    <div className="payments text-right" style={{ marginTop: 35 }}>
                                        <ul className="d-flex">
                                            <li className="px-3">
                                                <a href="#" title="Paypal">
                                                    <img
                                                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-506.png"
                                                        alt="Paypal"
                                                    />
                                                </a>
                                            </li>
                                            <li className="px-3">
                                                <a href="#" title="Visa">
                                                    <img
                                                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-507.png"
                                                        alt="Visa"
                                                    />
                                                </a>
                                            </li>
                                            <li className="px-3">
                                                <a href="#" title="Master">
                                                    <img
                                                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-508.png"
                                                        alt="Master"
                                                    />
                                                </a>
                                            </li>
                                            <li className="px-3">
                                                <a href="#" title="Discover">
                                                    <img
                                                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-509.png"
                                                        alt="Discover"
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div></Zoom>
                </div>
            </footer>
        </div>

    );
}
