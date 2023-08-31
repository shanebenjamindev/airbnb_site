import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { actRoomDetail } from '../../redux/types/actions';

export default function RoomDetail() {
  const param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actRoomDetail(param.id))
  },[])

  const listRoomByCity = useSelector((state) => state.getRoomByCityReducer.data);

  return (
    <div>
      DetailPage
    </div>
  )
}
