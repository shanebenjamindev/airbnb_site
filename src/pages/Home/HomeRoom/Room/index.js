import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Room(props) {
    const { room } = props;

    console.log(room);
    const descriptionStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        whiteSpace: 'normal',
    };

    return (
        <div className="card">
            <div className="card-img-top">
                <img src={room.hinhAnh} alt="img" />
            </div>
            <div className="card-body">
                <h5 className="card-title" style={descriptionStyle}>
                    <Link to={`/roomdetail/${room.id}`} className=' reset-link'>
                        {room.tenPhong}
                    </Link>
                </h5>
                <div style={descriptionStyle}>
                    <p>{room.moTa}</p>

                </div>
                <p>
                    Guest: {room.khach}
                </p>
            </div>
            <div className="card-bottom text-center">
                <Link to={`roomdetail/${room.id}`} className="btn w-100">
                    <b>
                        Giá: {room.giaTien}$
                    </b>
                </Link>
            </div>
        </div >
    );
}
