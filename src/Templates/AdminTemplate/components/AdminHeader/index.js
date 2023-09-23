import React from 'react'
import { Link } from 'react-router-dom';

export default function AdminHeader() {

  const userData = JSON.parse(localStorage.getItem("USER_LOGIN"));
  const user = userData?.user
  const token = userData?.token
  const { avatar } = user

  return (
    <div className='px-5 d-flex justify-content-between AdminHeader'>
      <div>
        <Link className="nav-link navbar-brand d-flex align-items-center" to="/">
          <img
            width="30px"
            className="item-link"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111254.png"
            alt=""
          />
          <div className='main__p ml-2'>
            AirBnb
          </div>
        </Link>
      </div>

      <div className='text-center main__Title'>
        AirBnb Management
      </div>
      <Link to={`/admin/admin-info/${user.id}`}>
        <div className='d-flex align-items-center'>
          <div className='main__p mr-2'>
            {user.name}
          </div>
          <img width="40" height="40" alt="" src={(avatar.length !== 0) ? (user.avatar) :
            ("https://cdn-icons-png.flaticon.com/512/149/149071.png")} />
        </div>
      </Link>
    </div>
  )
}
