import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actDeleteRoom, actHomeListRoom, actListRoom } from '../../../redux/actions/actRoom'
import { Table } from 'antd'
import { actDeleteCity } from '../../../redux/actions/actCity'
import { Link } from 'react-router-dom'
import { useCheckRole } from '../../../hooks/useCheckRole'

export default function RoomManagement() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actListRoom())
  }, [dispatch])

  const listRoomData = useSelector((state) => state.roomReducer.data)
  const user = useCheckRole()

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredRoom, setfilteredRoom] = useState(null);

  const handleSearch = () => {
    const filteredData = listRoomData?.filter((room) => {
      const { tenPhong, id } = room;
      const keyword = searchKeyword.toLowerCase();
      return (
        tenPhong.toLowerCase().includes(keyword) ||
        id.toString().includes(keyword)
      );
    });

    setfilteredRoom(filteredData);
  };



  return (
    <div className='container'>
      <div className="">
        <h3 className="main__Title  text-center">Quản lý phòng</h3>
        <div className=" justify-content-center d-flex align-items-center mb-2">
          <div className='text-center w-50 mx-2'>
            <input
              type="text"
              className='form-control'
              placeholder="Search by id, name or email"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
          <button className="btn__Primary" onClick={() => handleSearch()}>Search</button>
        </div>
        <div className='text-right mb-2'><button className='btn__Primary'>Thêm phòng</button></div>
        <div className='table-responsive'>
          <Table
            className="table"
            dataSource={filteredRoom !== null ? filteredRoom : listRoomData}
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
                    <button className='btn btn-info' value={  room.id} > <Link to={`/roomdetail/${room.id}`}>View</Link> </button>
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
