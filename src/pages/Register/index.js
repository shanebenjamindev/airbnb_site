import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { actRegister } from '../../redux/types/actions';

export default function RegisterPage() {
    const dispatch = useDispatch();

    const { data, error } = useSelector((state) => state.signupReducer)

    const showError = () => {

        if (data) {
            return <div className='alert alert-success'>Đăng kí thành công</div>
        }
        if (error) {
            return <div className='alert alert-danger'>Đăng kí không thành công, vui lòng kiểm tra lại</div>
        }

    }

    const [state, setState] = useState({
        name: '',
        phone: '',
        gender: '',
        email: '',
        password: '',
        birthday: true,
        role: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        gender: true,
        email: '',
        password: '',
        birthday: '',
        role: '',
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value,
        });

        if (name === 'name') {
            setErrors({
                ...errors,
                name: value.trim() === '' ? 'Tên không được để trống' : value.trim().length < 4 ? 'Phải từ 4 kí tự' : '',
            });
        } else if (name === 'phone') {
            setErrors({
                ...errors,
                phone: value.trim() === '' ? 'Số điện thoại không được để trống' : !/^\d{10,11}$/.test(value) ? 'Số điện thoại không hợp lệ' : '',
            });
        } else if (name === 'email') {
            setErrors({
                ...errors,
                email: value.trim() === '' ? 'Email không được để trống' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Email không hợp lệ' : '',
            });
        } else if (name === 'password') {
            setErrors({
                ...errors,
                password: value.trim() === '' ? 'Mật khẩu không được để trống' : value.trim().length < 8 ? 'Mật khẩu phải từ 8 kí tự' : '',
            });
        }
        else {
            setErrors({
                ...errors,
                [name]: '',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const hasErrors = Object.values(errors).some((error) => error !== '');

        if (!hasErrors) {
            dispatch(actRegister(state));
        }
    };

    return (
        <div className="register-page py-5">
            <div className='w-75 d-flex py-5 m-auto justify-content-center align-items-center' >
                <form onSubmit={handleSubmit} className="m-auto col-12 d-flex flex-column text-white">
                    <div className="text-center  mb-4">
                        <NavLink to="/" className=""> <h1 className='text-white main__Title'>REGISTER PAGE</h1></NavLink>
                        <h4 className='main__Title text-white'>- Register -</h4>
                    </div>
                    {error && <div className="">{showError()}</div>}
                    <div className="form-group">
                        <label htmlFor="name">Tên người dùng</label>
                        <input
                            type="text"
                            required
                            name="name"
                            id="name"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            onChange={handleOnChange}
                            placeholder="Điền tên người dùng vào đây ..."
                        />
                        {errors.name && <div className="alert alert-danger error-message">{errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Số điện thoại</label>
                        <input
                            type="text"
                            required
                            name="phone"
                            id="phone"
                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            onChange={handleOnChange}
                            placeholder="098 6888 234"
                        />
                        {errors.phone && <div className="alert alert-danger error-message">{errors.phone}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            name="email"
                            id="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            onChange={handleOnChange}
                            placeholder="Example@gmail.com"
                        />
                        {errors.email && <div className="alert alert-danger error-message">{errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            required
                            name="password"
                            id="password"
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                            onChange={handleOnChange}
                            placeholder="**********"
                        />
                        {errors.password && <div className="alert alert-danger error-message">{errors.password}</div>}
                    </div>
                    <div className="form-group d-flex">
                        <div className='col-6 pl-1'>
                            <label>Giới tính</label>
                            <select name="gender" id="gender" className="form-control bg-white" onChange={handleOnChange}>
                                <option value="">Chọn giới tính</option>
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>

                        <div className='col-6 p-0'>
                            <label htmlFor="birthday">Ngày sinh</label>
                            <input
                                type="date"
                                name="birthday"
                                id="birthday"
                                className="form-control"
                                required
                                onChange={handleOnChange}
                            />
                        </div>


                    </div>
                    <div className='form-group'>
                        <div className="text-center">
                            <button type="submit" className="rounded btn__Secondary px-5 my-2">
                                Đăng kí
                            </button>
                        </div>
                        <div className="text-center">
                            <NavLink to="/login-page" className="text-white">Đăng nhập ngay</NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
