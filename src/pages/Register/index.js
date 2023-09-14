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
            return <div className='alert alert-success'>Email đã tồn tại</div>
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
        <div>
            <div className="sign__In d-flex justify-content-center align-items-center vh-100">
                <div className="border rounded bg-white col-md-6 ">
                    <div className='m-md-4 d-flex  justify-content-between'>
                        <NavLink to="/">AirBnb</NavLink>
                        <h2>Đăng ký tài khoản</h2>
                        <h2 className="invisible">spa</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>{showError()}</div>
                        <div className='d-flex flex-wrap'>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label>Tên người dùng</label>
                                    <input
                                        type='text' required
                                        name="name"
                                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                        onChange={handleOnChange}
                                        placeholder='Điền tên người dùng vào đây ...'
                                    />
                                    {errors.name && (
                                        <div className="alert alert-danger error-message">{errors.name}</div>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input
                                        type="text" required
                                        name="phone"
                                        className="form-control"
                                        onChange={handleOnChange}
                                        placeholder='098 6888 234'
                                    />
                                    {errors.phone && (
                                        <div className="alert alert-danger error-message">{errors.phone}</div>
                                    )}
                                </div>

                                <label>Giới tính</label>
                                <select name='gender' onChange={handleOnChange}>
                                    <option value={true}>Nam</option>
                                    <option value={false}>Nữ</option>
                                </select>
                            </div>
                            <div className='col-md-6'>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email" required
                                        name="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        onChange={handleOnChange}
                                        placeholder='Example@gmail.com'
                                    />
                                    {errors.email && (
                                        <div className="alert alert-danger error-message">{errors.email}</div>
                                    )}

                                </div>

                                <div className="form-group">
                                    <label>Mật khẩu</label>
                                    <input
                                        type="password" required
                                        name="password"
                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        onChange={handleOnChange}
                                        placeholder='**********'
                                    />
                                </div>
                                {errors.password && (
                                    <div className="alert alert-danger error-message">{errors.password}</div>
                                )}

                                <div className="form-group">
                                    <label>Ngày sinh</label>
                                    <input
                                        type="date"
                                        name="birthday"
                                        className="form-control" required
                                        onChange={handleOnChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='text-center mb-4'>
                            <button type="submit" className="rounded btn btn-danger px-5">
                                Đăng kí
                            </button>
                            <div>
                                <NavLink to="/login-page" className="text-danger">Đăng nhập ngay</NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
