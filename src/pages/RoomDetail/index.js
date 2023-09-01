import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { actRoomDetail } from '../../redux/types/actions';
import './style.css'

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
          <div>
            Nơi này có những gì cho bạn

            <div className='d-flex'>
              <div className='col-md-6'>
                <div>Bếp</div>
                <div>Wi-fi</div>
                <div>TV</div>
              </div>

              <div className='col-md-6'>
                <div>Máy sấy khô</div>
                <div>Hệ thống sưởi</div>
                <div>Hồ bơi</div>
              </div>
            </div>

            <button className='btn btn-outline-dark'>Hiển thị tất cả 75 tiện nghi</button>
          </div>

        </div>

        <div className='section__Checkout col-md-5'>
          <form className='p-4 form__Checkout border rounded rounded-lg'>
            <div className="form-group">
              <h5>10000<span> 4 .80 đánh giá</span></h5>

              <div className='checkout__DateForm'>
                <div className='d-flex'>
                  <div className='col-md-6 checkout__DateFormItem'>
                    NHẬN PHÒNG
                    31-08-2023
                  </div>
                  <div className='col-md-6 checkout__DateFormItem'>
                    TRẢ PHÒNG
                    31-08-2023
                  </div>
                </div>
                <div className='col-12 py-2 checkout__Guest'>
                  <div>
                    <div>Khach</div>
                    <div className='d-flex d-flex justify-content-between'>
                      <button className='btn btn-dark'>-</button>

                      <div>0 Khach</div>

                      <button className='btn btn-dark'>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className='w-100 btn btn-danger'>Đặt phòng</button>

            <div className='text-center text-secondary'>Bạn vẫn chưa bị trừ tiền</div>

            <div className='checkout__Bill bg-info'>
              <div className='d-flex flex-wrap justify-content-between'>
                <div>$ 100000 x 0 đêm </div>
                <div>9999999</div>

              </div>
              <div className='d-flex flex-wrap justify-content-between'>
                <div>Phí dịch vụ</div>
                <div>000000000</div>
              </div>
            </div>

            <hr />
            <div className='d-flex flex-wrap justify-content-between'>
              <h5 className=''>
                Tổng trước thuế
              </h5 >
              <h5 className=''>0</h5>
            </div>

          </form>
        </div>
      </div >

      <div className='section__Review'>

      </div>
    </div >
  )
}
