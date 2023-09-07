import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function RegisterPage() {

    const initialUserState = {
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        hoTen: '',
    };
    const initialState = {
        user: { ...initialUserState },
        errors: { ...initialUserState },
        formValid: false,
    };

    const [state, setState] = useState(initialState);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        let { formValid, errors } = state;

        setState({
            ...state,
            errors: { ...errors },
            user: {
                ...state.user,
                [name]: value,
            },
            formValid: formValid,
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    };


    return (
        <div>

            <div className='position-absolute p-3'>
                <NavLink to="/">  <span className='text-info'> {`< Trở về trang chủ`}</span></NavLink>
            </div>

            <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: 'url("https://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg")' }}>


                <div className="col-lg-3 col-sm-6 border rounded py-4 bg-white ">

                    <h2 className="mb-4 text-center">Đăng ký</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type='text' required
                                name="hoTen"
                                className="form-control"
                                onChange={handleOnChange}
                                value={state.user.hoTen}
                                placeholder='Họ tên *'
                            />
                            {state.errors.hoTen && <div className="text-danger my-2">{state.errors.hoTen}</div>}
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="taiKhoan"
                                className="form-control" required
                                onChange={handleOnChange}
                                value={state.user.taiKhoan}
                                placeholder='Tài khoản *'
                            />
                            {state.errors.taiKhoan && <div className="text-danger my-2">{state.errors.taiKhoan}</div>}
                        </div>

                        <div className="form-group">
                            <input
                                type="password" required
                                name="matKhau"
                                className="form-control"
                                onChange={handleOnChange}
                                value={state.user.matKhau}
                                placeholder='Mật khẩu *'
                            />
                            {state.errors.matKhau && <div className="text-danger my-2">{state.errors.matKhau}</div>}
                        </div>

                        <div className="form-group">
                            <input
                                type="email" required
                                name="email"
                                className="form-control"
                                onChange={handleOnChange}
                                value={state.user.email}
                                placeholder='Email *'
                            />
                            {state.errors.email && <div className="text-danger my-2">{state.errors.email}</div>}
                        </div>

                        <div className="form-group">
                            <input
                                type='text' required
                                name="soDt"
                                className="form-control"
                                onChange={handleOnChange}
                                value={state.user.soDt}
                                placeholder='Số điện thoại *'
                            />
                            {state.errors.soDt && <div className="text-danger my-2">{state.errors.soDt}</div>}
                        </div>


                        <div className='text-right my-3'>
                            <button type="submit" className="btn btn-danger" disabled={!state.formValid}>
                                Sign Up
                            </button>
                        </div>

                        <div className="text-right">
                            Bạn bạn đã có tài khoản ? <NavLink to="/login-page" className="cursor-pointer text-primary">Đăng nhập</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
