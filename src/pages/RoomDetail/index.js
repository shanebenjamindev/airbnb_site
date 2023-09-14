import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { actRoomDetail } from '../../redux/types/actions';
import './style.css'
import DateRangeForm from './DateRangeForm';
import Comfort from './Comfort';

export default function RoomDetail() {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actRoomDetail(param.id))
  }, [dispatch, param.id])

  const userData = JSON.parse(localStorage.getItem("USER_LOGIN"));
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
      {roomData && (
        <div className='d-flex flex-wrap'>
          <div className='col-md-7'>
            <div className='section__Info  d-flex justify-content-between'>
              <div>
                <h2>  Toàn bộ căn hộ. Chủ nhà Sungwon</h2>
                <p>{roomData.khach} khách . {roomData.phongNgu} phòng ngủ . {roomData.phongTam} phòng tắm .</p>

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
            <Comfort data={roomData} />
          </div>

          <div className='section__Checkout col-md-5'>

            <DateRangeForm data={roomData} user={userData} />

          </div>
        </div >

      )}
      <div className='section__Review'>

      </div>
    </div >
  )
}
