import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actDeleteRoom, actHomeListRoom } from '../../../redux/actions/actRoom'
import { Table } from 'antd'
import { actDeleteCity } from '../../../redux/actions/actCity'
import { Link } from 'react-router-dom'

export default function RoomManagement() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actHomeListRoom())
  }, [dispatch])

  const listRoom = useSelector((state) => state.roomReducer.data)

  const userData = JSON?.parse(localStorage.getItem("USER_LOGIN"));

  console.log(userData);
  const roomData = listRoom?.data

  return (
    <div className='container'>
      <div className="">
        <h3 className="main__Title  text-center">Quản lý phòng</h3>
        <div className='text-right mb-2'><button className='btn__Primary'>Thêm phòng</button></div>
        <div className='table-responsive'>
          <Table
            className="table"
            dataSource={roomData}
            pagination={false}
            rowKey={"id"}
            columns={[
              {
                title: "ID",
                dataIndex: "id"
              },
              {
                title: "Hình ảnh",
                dataIndex: "hinhAnh",
                render: (hinhAnh, index) => {
                  return <img key={index} width={150} src={hinhAnh} alt=''></img>
                }
              },
              {
                title: "Tên Phòng",
                dataIndex: "tenPhong"
              },
              {
                title: "Mô tả",
                dataIndex: "moTa",
                width: "35%"
              },
              {
                title: "Khách",
                dataIndex: "khach",
              },
              {
                title: "Hành động",
                render: (room, index) => {
                  return <div className='d-flex justify-content-around' key={index}>
                    <button className='btn btn-info' value={room.id} > <Link to={`/roomdetail/${room.id}`}>View</Link> </button>
                    <button className='btn btn-danger' value={room.id} onClick={(e) => {
                      e.preventDefault();
                      if (window.confirm("Bạn có muốn xóa " + room.id)) {
                        dispatch(actDeleteRoom(room.id))
                      }
                    }}
                    > Delete </button>
                  </div>
                }
              }
            ]}
          >
          </Table >
        </div>
      </div >
    </div>
  )
}
