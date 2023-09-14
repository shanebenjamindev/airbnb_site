import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { actLogin } from '../../redux/types/actions';

export default function LoginPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [state, setState] = useState({
        email: "",
        password: ""
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

        dispatch(actLogin(state, navigate))
    };


    if (localStorage.getItem("USER_LOGIN")) {
        alert("Bạn đã đăng nhập, quay về trang chủ?")
        return <Navigate replace to="/" />;
    }


    return (

        <div style={{ backgroundImage: 'url("https://demo4.cybersoft.edu.vn/static/media/logo_login.a444f2681cc7b623ead2.jpg")' }}>


            <div className='container d-flex m-auto justify-content-center align-items-center' style={{ minHeight: '100vh' }}>

                <div className='w-50 bg-white p-4  border rounded'>

                    <div className="form-group">

                        <h2 className="text-center mb-4">Đăng nhập</h2>

                        <form onSubmit={handleLogin}>
                            <div className='form-group'>
                                <label>Email</label>
                                <input type="text" name="email" className="form-control" placeholder='Tên đăng nhập' onChange={handleOnChange} />

                            </div>

                            <div className='form-group'>
                                <label>Mật khẩu</label>
                                <input type="password" name="password" className="form-control" placeholder='Mật khẩu' onChange={handleOnChange} />

                            </div>

                            <div className='form-group text-right'>

                                <div className='d-flex justify-content-between'>

                                    <div className='my-2'>
                                        <a href='/'>Quên mật khẩu?</a>
                                    </div>

                                    <div className='my-2'>
                                        <button type="submit" className="btn btn-danger px-5">Đăng nhập</button>
                                    </div>

                                </div>

                                <div className=" text-center mt-2 text-sm font-display font-semibold text-gray-700 ">
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
