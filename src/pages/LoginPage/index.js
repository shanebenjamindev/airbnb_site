import React, { useState } from 'react'
import { NavLink, Navigate } from 'react-router-dom'

export default function LoginPage() {

    const [state, setState] = useState({
        taikhoan: "",
        matkhau: ""
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(state);
    };


    if (localStorage.getItem("USER_LOGIN")) {
        return <Navigate replace to="/" />;
    }


    return (

        <div style={{ backgroundImage: 'url("https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg")' }}>

            <div className='position-absolute p-3'>
                <NavLink to="/">  <span className='text-info'> {`< Trở về trang chủ`}</span></NavLink>
            </div>


            <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: '100vh' }}>

                <div className='col-lg-5 col-sm-6 border rounded py-2 bg-white'>

                    <div className="form-group ">

                        <h2 className="text-center mb-4">Đăng nhập</h2>

                        <form onSubmit={handleLogin}>
                            <div className='form-group'>
                                <input type="text" name="taikhoan" className="form-control" placeholder='Tên đăng nhập' onChange={handleOnChange} />
                            </div>

                            <div className='form-group'>
                                <input type="password" name="matkhau" className="form-control" placeholder='Mật khẩu' onChange={handleOnChange} />
                            </div>

                            <div className='form-group text-right'>
                                <div className='my-2'>
                                    <button type="submit" className="btn btn-danger">Login</button>
                                </div>

                                <div className="mt-12 text-sm font-display font-semibold text-gray-700 ">
                                    Bạn chưa có tài khoản ? <NavLink to="/register-page" className="cursor-pointer text-primary">Đăng ký</NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
