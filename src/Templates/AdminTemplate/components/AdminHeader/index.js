import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useCheckRole } from '../../../../hooks/useCheckRole';
export default function AdminHeader() {
  const user = useCheckRole()
  const navigate = useNavigate()

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("USER_LOGIN");
      navigate(`/`, { replace: true });
    }
  };

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

      <div className='d-flex'>
        <Link to={`/admin/admin-info/${user.id}`}>
          <div className='d-flex align-items-center'>
            <div className='main__p mr-2'>
              {user.name}
            </div>
            <img width="40" height="40" alt="" src={(user.avatar.length !== 0) ? (user.avatar) :
              ("https://cdn-icons-png.flaticon.com/512/149/149071.png")} />
          </div>
        </Link>
        <button onClick={handleLogout} className='btn btn-danger ml-2'>Đăng xuất </button>
      </div>
    </div>
  )
}
