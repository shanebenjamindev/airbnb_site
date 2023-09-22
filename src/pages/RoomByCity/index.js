import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { actGetRoomByCity } from '../../redux/types/actions';
import './style.css'
import { NodeIndexOutlined } from '@ant-design/icons';

export default function RoomByCityPage() {
    const param = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actGetRoomByCity(param.id))
    }, [dispatch, param.id])

    const { loading, data, error } = useSelector((state) => state.roomReducer);
    const listRoomByCity = data
    const renderRoomByCity = () => {
        if (loading) {
            return null
        }
        else if (error) {
            return <div>Error 404</div> 
        }
        // const listRoomByCity = data
        return listRoomByCity?.map((room, index) => {
            return <Link to={`/roomdetail/${room.id}`} key={index} className='card p-1 m-3'>
                <div className='d-md-flex align-items-center'>
                    <div className='col-md-6'>
                        <img className="img-fluid" src={room.hinhAnh} alt="Cardcap" />
                    </div>
                    <div className='col-md-6'>
                        <span className="">{room.tenPhong}</span>
                        <p>Price: {room.giaTien}</p>
                    </div>
                </div>
            </Link>

        })
    }

    const renderCount = () => {
        if (listRoomByCity?.length === 0) { return <div>Hiện không có chỗ ở</div> }
        else return <div>Hiện có {listRoomByCity?.length} chỗ ở </div>
    }

    return (
        <div>
            <div className='section__Background'>
                <div className='section__BackgroundTitle'>
                    <h2 className='thanks-message'>List Rooms</h2>
                </div>
            </div>
            <div className='section__Content-secondary'>
                <div className='section__Item-secondary'>
                    <div className='row'>
                        <div className='col-sm-12 col-lg-6 col-md-6'>
                            <div className='d-flex justify-content-between'>

                                <div>{renderCount()}</div>
                                <button className='btn btn-light d-flex align-items-center'>
                                    <NodeIndexOutlined />
                                    Bộ lọc</button>
                            </div>
                            <div className="flex-column">
                                {renderRoomByCity()}
                            </div>
                        </div>
                        <div className='col-sm-12 col-lg-6 col-md-6'>
                            <iframe className=''
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.835874782257!2d106.68809554999999!3d10.7568982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1svi!2s!4v1664300539026!5m2!1svi!2s"
                                height={500}
                                frameBorder={0}
                                style={{ border: 0, width: "100%" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" title='intro__Video'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
