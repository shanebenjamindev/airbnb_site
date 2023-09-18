import React from 'react'
import './blogs.css'

export default function HomeBlogs() {
    return (
        <section className="events py-5">
            <div className="container">
                <div>
                    <h2 className="main__Title">Our Events</h2>
                </div>

                <div className="line" />

                <div className="row event__Container align-items-center">
                    <div className="event__Content col-lg-6 col-sm-12 ">
                        <div className="event__Item ">
                            <div className="event__Img">
                                <img
                                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/events.jpg"
                                    alt=""
                                />
                                <div className="event__Text">
                                    <h2 className='main__Title '>
                                        EVENTS
                                    </h2>
                                    <h3 className="main__p text-white bg-warning">Beach Sports</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="event__Content col-lg-6 col-sm-12">
                        <div className="event__Item">
                            <div className="event__Img">
                                <img
                                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/events-1.jpg"
                                    alt=""
                                />
                                <div className="event__Text ">
                                    <h2 className="main__Title " >
                                        EVENTS
                                    </h2>
                                    <h3 className="main__p text-white bg-warning">Music Festival</h3>
                                </div>
                            </div>
                        </div>

                        <div className="event__Item">
                            <div className="event__Img">
                                <img
                                    src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/events-2.jpg"
                                    alt=""
                                />
                                <div className="event__Text">
                                    <h2 className="main__Title" >
                                        EVENTS
                                    </h2>
                                    <h3 className=" main__p text-white bg-warning">Wedding Day</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
