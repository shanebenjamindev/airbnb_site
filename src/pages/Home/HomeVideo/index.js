import React from 'react'
import '../HomeVideo/video.css'
export default function HomeVideo() {
  return (
    <div className="section__Video">
      <div className="post">
        <div className="entry-media">

          <div className='video__Content'>

            <img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about-video.jpg" alt="#" className="img-responsive" />
            <div className="btn-play" data-toggle="modal" data-target="#exampleModal">

            </div>

            <div className="modal fade " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog ">
                <div className="modal-content">
                  <div className="modal-body">
                    <iframe  width="800" height="400" src="https://www.youtube.com/embed/gRogX6YRpwo" type='video/mp4' title="Mẫu video Powerpoint Giới thiệu Khách sạn~Hotel Animation Video Powerpoint~Free Download" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoPlay controls />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}
