import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { actAuth } from '../../redux/actions/actAuth';
import './style.css';

export default function Auth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { error } = useSelector((state) => state.authReducer)

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>{error}</div>
        }
    }

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
        const userData = localStorage.getItem("USER_LOGIN");
        const user = userData ? JSON.parse(userData).user : "";

        if (!user) {
            return (
                <form onSubmit={handleLogin} className='m-auto p-2 align-items-center mt-4'>
                    <div className=' text-center'>
                        <h2 className="text-center text-white main__Title">AUTHENTICATION</h2>
                        <h4 className="text-center text-warning main__p">Only for Adminstrators</h4>


                        {error && <div className="">{showError()}</div>}
                        <div className=' '>
                            <input type="text" name="email" className="form-control" required placeholder='Email' onChange={handleOnChange} />
                        </div>

                        <div className='mt-3  '>
                            <input type="password" name="password" className="form-control" required placeholder='Mật khẩu' onChange={handleOnChange}
                            />
                        </div>

                        <div className='d-flex mt-4 justify-content-center  '>
                            <div className=' '>
                                <Link to="/" type="submit" className="btn__Secondary text-white mx-1">Trở về trang chủ</Link>
                            </div>

                            <div className=' '>
                                <button type="submit" className="btn__Secondary mx-1">Đăng nhập</button>
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
        <div className='login-page d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <div>{renderContent()}</div>
        </div>
    );
}
