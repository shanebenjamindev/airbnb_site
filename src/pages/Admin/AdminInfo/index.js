import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { actGetRoomByUser } from 'redux/actions/actRoom'
import { actDeleteUserRoom } from 'redux/actions/actUser'

import { Box, Tab, Tabs } from '@mui/material'
import { Button } from 'antd'
import { useCheckRole } from 'hooks/useCheckRole'

export default function AdminInfo() {
  const dispatch = useDispatch()
  const param = useParams()

  const user = useCheckRole()

  useEffect(() => {
    dispatch(actGetRoomByUser(param.id))

    setNewProfile({
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      role: user.role,
    })

  }, [])

  const [isEditMode, setIsEditMode] = useState(false);
  const [newProfile, setNewProfile] = useState({
    avatar: '',
    name: '',
    email: '',
    phone: '',
    birthday: '',
    gender: true,
    role: '',
  })

  const listRoomByUser = useSelector((state) => state.roomReducer.data)
  console.log(listRoomByUser);

  // Tab:
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setNewProfile({
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      phone: user.phone,
      birthday: user.birthday,
      gender: user.gender,
      role: user.role,
    })
  };

  const handleSave = (e) => {
    setIsEditMode(false);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({
      ...newProfile,
      [name]: value,
    })
  };

  const handleDelete = (e) => {
    e.preventDefault();
    if (window.confirm(`Bạn có muốn xóa phòng ${e.target.value} ?`)) {
      dispatch(actDeleteUserRoom(e.target.value))
      dispatch(actGetRoomByUser(user.id))
    }
  }
  const renderListRoomByUser = () => {
    return (
      <>
        <table className="table text-center">
          <thead>
            <tr className='text-center'>
              <th>Phòng</th>
              <th>Ngày đến</th>
              <th>Ngày đi</th>
              <th>Khách</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {listRoomByUser?.map((room, index) => (
              <tr key={index}>
                <td>{room.maPhong}</td>
                <td>{room.ngayDen}</td>
                <td>{room.ngayDi}</td>
                <td>{room.soLuongKhach}</td>
                <td className='d-flex justify-content-around'>
                  <Link to={`/roomdetail/${room.maPhong}`} className="btn btn-outline-info">View</Link>
                  <button className="btn btn-outline-danger" onClick={handleDelete} value={room.id}>Delete</button>
                </td>
              </tr>
            )).slice(0, 5)}
          </tbody>

        </table>
      </>
    );
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className='container'>
      <div className=' d-md-flex'>
        <div className='userAvatar__Container col-6 col-md-3 col-lg-3 p-3 d-none d-md-block'>
          <div className='text-center flex-column align-items-center h-100 justify-content-center'>
            <div className='d-flex justify-content-center py-2'>
              <input
                name='avatar'
                type="file"
                id="avatar-input"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleAvatarChange}
              />
              <img
                className=''
                width="200"
                height="200"
                alt=""
                src={`${newProfile.avatar}` || (user.avatar) ? (user.avatar) : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              />
            </div>
            <div className='main__p'>{user.name}</div>
          </div>
        </div>

        <div className='user-Info__Container  col-md-9 col-lg-9'>

          <div className='userAvatar__Container text-center d-block d-md-none'>
            <div className='userAvatar d-flex justify-content-center align-items-center h-100 '>
              <input
                name='avatar'
                type="file"
                id="avatar-input"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleAvatarChange}
              />
              <img
                className=''
                width="200"
                height="200"
                alt=""
                src={`${newProfile.avatar}` || (user.avatar) ? (user.avatar) : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
              />
            </div>
            <div className='main__p my-4'>{user.name}</div>
          </div>
          <Box sx={{ width: '100%' }}>
            <Tabs
              value={value}
              className=''
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              <Tab label="User Information" className='' value={0} />
              <Tab label="Room Contract" value={1} />
            </Tabs>

            {/* Content for Tab 0 (User Information) */}
            {value === 0 && (
              <div className='mt-2 p-4'>
                <form className=''>
                  <div className='form-header d-flex justify-content-end'>
                    <div className='d-flex align-items-center'>
                      <Button
                        variant="contained"
                        color="warning"
                        className='mr-2'
                        onClick={() => setIsEditMode(!isEditMode)}
                      >
                        {isEditMode ? 'Close' : 'Edit'}
                      </Button>

                      <Button
                        variant="contained"
                        color="warning"
                        onClick={handleSave}
                        disabled={!isEditMode} // Disable the save button when not in edit mode
                      >
                        Save
                      </Button>

                    </div>
                  </div>

                  <div className='col-12'>
                    <label className='main__p'>Email:</label>
                    <input
                      name='email'
                      className='form-control custom-formControl'
                      placeholder={user.email}
                      readOnly={!isEditMode} // Make the input editable only in edit mode
                      onChange={handleOnChange}
                    />
                  </div>

                  <div className='d-md-flex'>
                    <div className='col-lg-6 col-md-6'>
                      <div>
                        <label className='main__p'>Tên:</label>
                        <input
                          type='text'
                          name='name'
                          className='form-control custom-formControl'
                          defaultValue={user.name}
                          onChange={handleOnChange}
                          readOnly={!isEditMode} // Make the input editable only in edit mode
                        />
                      </div>
                      <div className=''>
                        <label className='main__p'>Giới tính:</label>
                        <select
                          name='gender'
                          className='form-control custom-formControl'
                          defaultValue={user.role}
                          disabled={!isEditMode} // Make the input editable only in edit mode
                          onChange={handleOnChange}
                        >
                          <option className='' value={true}>Nam</option>
                          <option className='' value={false}>Nữ</option>
                        </select>
                      </div>
                    </div>

                    <div className='col-lg-6 col-md-6'>
                      <div className=''>
                        <label className='main__p'>Số điện thoại:</label>
                        <input
                          name='phone'
                          className='form-control custom-formControl'
                          defaultValue={user.phone}
                          readOnly={!isEditMode} // Make the input editable only in edit mode
                          onChange={handleOnChange}
                        />
                      </div>
                      <div className=''>
                        <label className='main__p'>Quyền:</label>
                        <select
                          name='role'
                          className='form-control custom-formControl'
                          defaultValue={user.role}
                          disabled={!isEditMode} // Make the input editable only in edit mode
                          onChange={handleOnChange}
                        >
                          <option className='' value="USER">USER</option>
                          <option className='' value="ADMIN">ADMIN</option>
                        </select>
                      </div>

                    </div>

                  </div>




                </form>
              </div>
            )}

            {/* Content for Tab 2 (Room) */}
            {value === 1 && (
              <div>
                <div className='user__ListRoom '>
                  {(listRoomByUser) && listRoomByUser.length >= 1 ? (
                    <>

                      <div className='text-right py-2'>
                        <Link to="/" className='btn__Primary' >
                          Thêm phòng
                        </Link>
                      </div>
                      <div className=' p-2 table-responsive'>

                        <>
                          {renderListRoomByUser()}
                        </>
                      </div>

                    </>
                  ) : (
                    <div className='text-center noti__NotFound'>
                      <div>
                        <h3 className='main__Title'>Not Found</h3>
                        <div className='main__'>Hiện bạn chưa đặt phòng ó</div>
                        <Link to="/">Hãy đặt thêm tại đây</Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Box>
        </div>
      </div>
    </div >

  );
}