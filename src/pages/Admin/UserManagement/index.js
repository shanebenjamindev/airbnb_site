import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actDeleteRoom, actHomeListRoom } from '../../../redux/actions/actRoom'
import { Table } from 'antd'
import { actDeleteCity } from '../../../redux/actions/actCity'
import { Link } from 'react-router-dom'
import { actGetListUser } from '../../../redux/actions/actUser'

export default function UserManagement() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actGetListUser())
  }, [])

  const listUserData = useSelector((state) => state.userReducer.data)

  return (
    <div className='container'>
      <h3 className="main__Title text-center">Quản lý người dùng</h3>
      <div className='text-right mb-2'><button className='btn__Primary'>Thêm phòng</button></div>
      <div className="table-responsive">
        <Table
          className="table"
          dataSource={listUserData}
          rowKey={"id"}
          columns={[
            {
              title: "ID",
              dataIndex: "id"
            },
            {
              title: "Hình ảnh",
              dataIndex: "avatar",
              render: (hinhAnh, index) => {
                return <img key={index} width={150} src={hinhAnh} alt=''></img>
              }
            },
            {
              title: "Họ Tên",
              dataIndex: "name"
            },
            {
              title: "Email",
              dataIndex: "email",
            },
            {
              title: "Chức vụ",
              dataIndex: "role",
            },
            {
              title: "Hành động",
              render: (user, index) => {
                return <div className='d-flex justify-content-around' key={index}>
                  <button className='btn btn-info' value={user.id} > <Link to={`/roomdetail/${user.id}`}>View</Link> </button>
                  <button className='btn btn-danger' value={user.id} onClick={(e) => {
                    e.preventDefault();
                    if (window.confirm("Bạn có muốn xóa " + user.name)) {
                      dispatch(actDeleteCity(user.id))
                    }
                  }}
                  > Delete </button>
                </div>
              }
            }
          ]}
        >
        </Table >
      </div >
    </div>
  )
}
