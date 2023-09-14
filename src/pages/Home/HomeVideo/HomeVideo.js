import React from 'react'
import '../HomeVideo/video.css'
export default function HomeVideo(props) {
  return (
    <div className="video-v4">
      <div className="post">
        <div className="entry-media ">
          <div><img src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/about-video.jpg" alt="#" className="img-responsive" /></div>
          <div className="section-video ">
            <div className="btn-play" data-toggle="modal" data-target="#exampleModal">
            </div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body" style={{ width: '190%', height: '520px', marginLeft: -180, marginRight: -250 }}>
                    <iframe style={{ width: '100%', height: '100%' }} src="https://www.youtube.com/embed/gRogX6YRpwo" type='video/mp4' title="Mẫu video Powerpoint Giới thiệu Khách sạn~Hotel Animation Video Powerpoint~Free Download" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen autoPlay controls />
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
