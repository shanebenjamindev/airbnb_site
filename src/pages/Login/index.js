import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { actLogin } from '../../redux/types/actions';
import './style.css'
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";


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

        <div className='login-page'>
            <div className='w-75 d-flex m-auto justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
                <div className="">
                    <h2 className="text-center text-white main__Title">LOGIN ACCOUNT</h2>
                    <h4 className="text-center text-white main__Title">- Sign In To Use The Service -</h4>

                <form onSubmit={handleLogin} className='align-items-center mt-4'>
                    <div className=''>
                        <input type="text" name="email" className="form-control" placeholder='Email' onChange={handleOnChange} />
                    </div>

                    <div className='mt-3'>
                        <input type="password" name="password" className="form-control" placeholder='Mật khẩu' onChange={handleOnChange} 
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                          }
                        
                        />

                    </div>

                    <div className=' text-center'>

                        <div className='d-flex justify-content-center'>

                            <div className='mt-2'>
                                <button type="submit" className="btn btn-danger px-5">Đăng nhập</button>
                            </div>

                        </div>

                        <div className=" ">
                           <NavLink to="/register-page" className="cursor-pointer text-white"> Bạn chưa có tài khoản ? Đăng ký</NavLink>
                        </div>
                    </div>
                </form>
                </div>

            </div>
        </div>
    )
}
