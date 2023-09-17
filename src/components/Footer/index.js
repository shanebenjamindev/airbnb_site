/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import "./style.css";
import { Zoom } from 'react-reveal';
import { ForwardOutlined } from '@ant-design/icons';

export default function Footer() {
    return (
        <footer className=''>
          
            <div className="footer-sky footer-sky-v4">
                <div className="container">
                    <Zoom top right cascade delay={500}>
                        <div className="footer-top text-center">
                            <div className="icon-email">
                                <a href="/" title="Email">
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
                                    <div className="">
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
                            </div>
                        </div></Zoom>
                    <Zoom top left cascade delay={900}>
                        <div className="footer-bottom bottom-v3">
                            <div className="d-md-flex">
                                <div className="col-xs-12 col-md-6">
                                    <div className="footer-bottom-l">
                                        <a
                                            href="https://thietkeweb9999.com/thiet-ke-web/khach-san-44"
                                            title="Thiết kế web khách sạn"
                                            rel="dofollow noreferrer"
                                            target="_blank"
                                            style={{ border: "none" }}
                                        >
                                            Thiết kế
                                        </a>{" "}
                                        bởi{" "}
                                        <a
                                            href="/"
                                            title="Thiết kế web khách sạn"
                                            rel="dofollow noreferrer"
                                            target="_blank" style={{ border: "none" }}>
                                            BINH CYBERSOFT
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-6">
                                    <div className="payments justify-content-end">
                                        <div className="row payments__Content">
                                            <li className="mx-3">
                                                <a href="/" title="Paypal">
                                                    <img
                                                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-506.png"
                                                        alt="Paypal"
                                                    />
                                                </a>
                                            </li>
                                            <li className="mx-3">
                                                <a href="/" title="Visa">
                                                    <img
                                                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-507.png"
                                                        alt="Visa"
                                                    />
                                                </a>
                                            </li>
                                            <li className="mx-3">
                                                <a href="/" title="Master">
                                                    <img
                                                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-508.png"
                                                        alt="Master"
                                                    />
                                                </a>
                                            </li>
                                            <li className="mx-3">
                                                <a href="/" title="Discover">
                                                    <img
                                                        src="http://landing.engotheme.com/html/skyline/demo/images/Home-3/Layer-509.png"
                                                        alt="Discover"
                                                    />
                                                </a>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></Zoom>
                </div>
            </div>
        </footer>

    );
}
