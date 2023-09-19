import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { actAuth } from '../../redux/types/actions';
import './style.css';

export default function Auth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        dispatch(actAuth(state, navigate));
    };

    const renderContent = () => {
        const userJSON = localStorage.getItem("USER_LOGIN");
        const user = userJSON ? JSON.parse(userJSON) : null;

        if (!user) {
            return (
                <form onSubmit={handleLogin} className='align-items-center mt-4'>
                    <div className=' text-center'>
                        <h2 className="text-center text-white">AUTHENTICATION</h2>
                        <h4 className="text-center text-white">Only for Adminstrators</h4>

                        <div className=''>
                            <input type="text" name="email" className="form-control" placeholder='Email' onChange={handleOnChange} />
                        </div>

                        <div className='mt-3'>
                            <input type="password" name="password" className="form-control" placeholder='Mật khẩu' onChange={handleOnChange}
                            />
                        </div>

                        <div className='d-flex justify-content-center'>
                            <div className='mt-2'>
                                <button type="submit" className="btn btn-danger px-5">Đăng nhập</button>
                            </div>
                        </div>
                    </div>
                </form>
            );

        }
        else if (user.role !== "ADMIN") {
            return <div className=' text-center'>
                <h2 className="text-center text-white main__Title">AUTHENTICATION</h2>
                <h5 className="text-center text-white ">This Function Only for Adminstrators</h5>
                <Link to="/"> <p className='main__p text-warning'> (Back to Home page)</p></Link>
            </div>
        }
        else if (user.role === "ADMIN") {
            setTimeout(() => {
                navigate('/admin/dashboard');
            }, 1500);

            return (
                <div className='text-center text-warning'>
                    <h2 className="text-center main__Title text-white">AUTHENTICATION SUCCESS</h2>
                    <h4 className="text-center main__p text-warning">Bạn đã đăng nhập, Directing to dashboard...</h4>
                </div>
            );
        }
    };

    return (
        <div className='login-page'>
            <div className='w-75 d-flex m-auto justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
                <div className="">
                    <div>{renderContent()}</div>
                </div>
            </div>
        </div>
    );
}
