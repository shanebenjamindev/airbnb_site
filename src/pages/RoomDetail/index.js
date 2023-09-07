import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { actRoomDetail } from '../../redux/types/actions';
import './style.css'
import DateRangeForm from './DateRangeForm';
import { WifiOutlined, DesktopOutlined } from '@ant-design/icons';

export default function RoomDetail() {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actRoomDetail(param.id))
  }, [dispatch, param.id])

  const roomData = useSelector((state) => state.RoomDetailReducer.data);
  const renderRoom = () => {
    return <>
      {roomData && (
        <div className='mb-4'>
          <div className='section__Image'>
            <h2>{roomData.tenPhong}</h2>
            <img alt='' width="" className=' img-fluid rounded rounded-lg' src={roomData.hinhAnh} />
          </div>
        </div>)}
    </>

  }


  return (
    <div className='room__Container'>
      {renderRoom()}

      <div className='d-flex flex-wrap'>
        <div className='col-md-7'>
          <div className='section__Info  d-flex justify-content-between'>
            <div>
              <h2>  Toàn bộ căn hộ. Chủ nhà Sungwon</h2>
              <p>2 khách . 2 phòng ngủ . 3 phòng tắm .</p>

            </div>
            <div>
              <img width="80px" alt='avatar' src='https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png' />
            </div>
          </div>

          <hr />

          <div className='p-2'>
            <div>
              <h5>Sungwon là Chủ nhà siêu cấp</h5>
              Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh giá cao và là những người cam kết mang lại quãng thời gian ở tuyệt vời cho khách.
            </div>

            <div>
              <h5>Địa điểm tuyệt vời</h5>
              90% khách gần đây đã xếp hạng 5 sao cho vị trí này.
            </div>

            <h5>
              Miễn phí hủy trong 48 giờ.
            </h5>
          </div>

          <hr />

          <div>
            <div>
              <img className='my-3' alt='' width="150px" src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg' />
            </div>
            <div>
              Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn đề khác như sự cố trong quá trình nhận phòng.
            </div>
            <div>
              <a href='/'>Tìm hiểu thêm</a>
            </div>
          </div>

          <hr />

          <div>

            Một số thông tin đã được dịch tự động.Hiển thị ngôn ngữ gốc
            Nhà nghỉ thôn dã hình lưỡi liềm trong một ngôi làng nghệ thuật gốm hai nghìn năm. Một ngôi nhà nguyên khối lớn với sân thượng ba tầng của Bảo tàng Văn hóa Guitar Serra, nổi tiếng với mặt tiền đặc sắc trong một ngôi làng nghệ thuật gốm hai nghìn năm pha trộn rất tốt với thiên nhiên.

            Tận hưởng kỳ nghỉ dưỡng sức cảm xúc thư giãn trong một căn phòng ấm cúng, chào...

            Hiển thị thêm

          </div>

          <hr />

          {/**data */}
          <div className=''>
            <h5>Nơi này có những gì cho bạn</h5>

            <div className='d-flex flex-wrap py-2 '>

              {/** Bếp */}
              <div className='col-6 my-1 p-0'>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 30"
                  height="2em"
                  width="2em"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 3h8l-1 9H5zM7 18h2v3H7zM20 3v12h-5c-.023-3.681.184-7.406 5-12zM20 15v6h-1v-3M8 12v6" />
                </svg>
                Bếp
              </div>

              {/** thang may */}
              <div className='col-6 my-1 p-0'>
                <svg
                  fill="currentColor"
                  viewBox="0 0 16 20"
                  height="2em"
                  width="2em"
                >
                  <path d="M3 2a1 1 0 011-1h8a1 1 0 011 1v13h1.5a.5.5 0 010 1h-13a.5.5 0 010-1H3V2zm1 13h8V2H4v13z" />
                  <path d="M9 9a1 1 0 102 0 1 1 0 00-2 0z" />
                </svg>
                Thang máy
              </div>

              {/** Wifi */}
              <div className='col-6 my-1 p-0'>
                <svg
                  viewBox="0 0 1024 1300"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 00-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2zm117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 00-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3zm116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 00-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7 3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3zM448 778a64 64 0 10128 0 64 64 0 10-128 0z" />
                </svg>
                Wi-fi
              </div>

              {/** TV */}
              <div className='col-6 my-1 p-0'>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 30"
                  height="2em"
                  width="2em"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M4 4 H20 A1 1 0 0 1 21 5 V15 A1 1 0 0 1 20 16 H4 A1 1 0 0 1 3 15 V5 A1 1 0 0 1 4 4 z" />
                  <path d="M7 20h10M9 16v4M15 16v4" />
                </svg>
                TV
              </div>

              {/** Hệ thống sửi */}
              <div className='col-6 my-1 p-0'>
                <svg
                  viewBox="0 0 24 30"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M22 22H2v-2h20v2m0-16H2V3h20v3m-2 1v12h-3v-8s-2.5-1-5-1-5 1-5 1v8H4V7h16m-5.5 7.67h-.03l.34.55.06.12c.42 1.01.13 2.16-.66 2.9-.71.66-1.71.83-2.63.71-.87-.11-1.68-.66-2.13-1.42-.15-.23-.26-.5-.32-.76L9 16.11c-.04-.96.34-1.97 1.06-2.57-.33.72-.25 1.62.24 2.25l.06.08c.08.07.19.1.28.05.09-.03.16-.12.16-.22l-.04-.14c-.53-1.39-.08-3.01 1.03-3.93.31-.25.71-.48 1.08-.58-.41.82-.26 1.88.38 2.52l.89.73.36.37m-1.39 2.77c.26-.24.42-.64.39-1v-.19c-.12-.6-.65-.79-1-1.25l-.24-.45c-.13.3-.14.58-.09.91.06.34.2.63.12.98-.09.39-.39.78-.92.91.3.29.78.52 1.27.36l.47-.27z" />
                </svg>
                Hệ thống sửi
              </div>


              {/** Máy sấy */}
              <div className='col-6 my-1 p-0'>
                <svg
                  viewBox="0 0 24 30"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                >
                  <path d="M10 12.73A70.39 70.39 0 0017 11V4s-6.5-2-9.5-2a5.5 5.5 0 00-1.38 10.82L7 19h1a3 3 0 001.46 2.33A3.15 3.15 0 0111 24h1a4.12 4.12 0 00-1.91-3.45C9.39 20 9 19.63 9 19h1M4 7.5A3.5 3.5 0 017.5 4 37.08 37.08 0 0115 5.5v4A37.08 37.08 0 017.5 11 3.5 3.5 0 014 7.5M22 9a4.32 4.32 0 01-2.22-.55A3.4 3.4 0 0018 8V7a4.32 4.32 0 012.22.55A3.4 3.4 0 0022 8m0-2a3.4 3.4 0 01-1.78-.45A4.32 4.32 0 0018 5v1a3.4 3.4 0 011.78.45A4.32 4.32 0 0022 7m0 3a3.4 3.4 0 01-1.78-.45A4.32 4.32 0 0018 9v1a3.4 3.4 0 011.78.45A4.32 4.32 0 0022 11M9 7.5A1.5 1.5 0 117.5 6 1.5 1.5 0 019 7.5z" />
                </svg>
                Máy sấy khô
              </div>

              {/** Gym */}
              <div className='col-6 my-1 p-0'>
                <svg fill="none" viewBox="0 0 24 30" height="2em" width="2em">
                  <path
                    fill="currentColor"
                    d="M20.274 9.869l-3.442-4.915 1.639-1.147 3.441 4.915-1.638 1.147zM18.39 12.409L16.67 9.95l-8.192 5.736 1.72 2.457-1.638 1.148-4.588-6.554 1.638-1.147 1.72 2.458 8.192-5.736-1.72-2.458 1.638-1.147 4.588 6.553-1.638 1.148zM20.765 7.083l1.638-1.147-1.147-1.638-1.638 1.147 1.147 1.638zM7.168 19.046l-3.442-4.915-1.638 1.147 3.441 4.915 1.639-1.147zM4.382 18.555l-1.638 1.147-1.147-1.638 1.638-1.147 1.147 1.638z"
                  />
                </svg>
                Phòng tập thể hình
              </div>

              {/**  Hồ bơi */}
              <div className='col-6 my-1 p-0'>
                <svg fill="none" viewBox="0 0 15 15" height="2em" width="2em">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5.636 1C4.15 1 3 2.203 3 3.727V4h6v-.364C9 1.57 10.633 0 12.682 0v1C11.167 1 10 2.14 10 3.636V10H9V9H3v3H2V3.727C2 1.688 3.56 0 5.636 0v1zM3 8h6V5H3v3z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M7.44 13.442c-.895.504-1.877 1.058-3.485 1.058-1.483 0-2.614-.762-3.33-1.568l.75-.664c.584.66 1.462 1.232 2.58 1.232 1.339 0 2.128-.442 3.004-.935l.01-.007c.895-.504 1.877-1.058 3.485-1.058 1.531 0 2.884.82 3.852 1.572l-.612.79c-.923-.716-2.052-1.362-3.24-1.362-1.339 0-2.128.442-3.004.935l-.01.007z"
                  />
                </svg>
                Hồ bơi
              </div>

            </div>

            <button className='btn btn-outline-dark'>Hiển thị tất cả 75 tiện nghi</button>
          </div>

        </div>

        <div className='section__Checkout col-md-5'>
          <DateRangeForm />
        </div>

      </div >

      <div className='section__Review'>

      </div>
    </div >
  )
}
