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

    const listRoomByCity = useSelector((state) => state.getRoomByCityReducer.data);

    const renderRoomByCity = () => {
        return listRoomByCity?.map((room, index) => {
            console.log(room);
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


    return (
        <div className='row'>
            <div className='col-md-6'>

                <div className='d-flex justify-content-between'>
                    <h5>Hon 1.000 cho o</h5>
                    <button className='btn btn-light d-flex align-items-center'>
                        <NodeIndexOutlined />
                        bo loc</button>
                </div>
                <div className="flex-column">

                    {renderRoomByCity()}
                </div>
            </div>
            <div className='col-md-6'>
                Google map
            </div>
        </div>
    )
}
