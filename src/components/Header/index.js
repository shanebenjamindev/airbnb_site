import React, { useEffect, useState } from 'react';
import './style.css';
import { FacebookOutlined, InstagramOutlined, MenuOutlined, PhoneOutlined, TwitterOutlined, YoutubeOutlined, UserOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actListCity } from '../../redux/types/actions';

export default function Navbar() {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(actListCity());
    }, [dispatch]);

    const listCityData = useSelector((state) => state.cityReducer.data);
    const userData = JSON.parse(localStorage.getItem("USER_LOGIN"));

    const [buttonActive, setButtonActive] = useState(false);
    const [formActive, setFormActive] = useState(false);

    const [state, setState] = useState({
        id: "",
    });

    const toggleForm = () => {
        setFormActive(!formActive);
        setButtonActive(!formActive);
    };

    const handleOnChange = (e) => {
        return setState({
            id: e.target.value
        })
    };

    const handleOnSubmit = (e) => {
        if (state.id !== "") {
            navigate(`/roombycity/${state.id}`);
        }
    }

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            localStorage.removeItem("USER_LOGIN");
            navigate(`/`);
        }
    }

    const renderDropDownCity = () => {
        return (
            <form onSubmit={handleOnSubmit} className='formFindRoom w-75 m-auto d-flex flex-wrap justify-content-around align-items-center text-left'>
                <div className='col-md-4 p-4 formFindRoom__Item'>
                    <span>Địa điểm </span>
                    <select className='' onChange={handleOnChange} name="selectedCityId" >
                        <option className='bg-dark text-light' value={""}>- Chọn thành phố -</option>
                        {
                            listCityData?.map((city, index) => {
                                return <option className='bg-dark text-light' key={index} value={city.id}>{city.tenViTri}</option>
                            })
                        }
                    </select>

                </div>
                <div className='col-md-2 formFindRoom__Item d-flex flex-column'>
                    <label>Nhận phòng</label>
                    <input className=' border-0' type='date' />
                </div>
                <div className='col-md-2 formFindRoom__Item d-flex flex-column'>
                    <label>Trả phòng</label>
                    <input className=' border-0' type='date' />
                </div>
                <div className='col-md-4 formFindRoom__Item d-flex align-items-center flex-wrap  w-md-25 '>
                    <div className='d-flex flex-column col-md-5 mb-3 mb-md-0'>
                        <label>Khách</label>
                        <input className=' border-0' defaultValue={0} />
                    </div>
                    <div className='col-md-7'>
                        <button type='submit' className=' w-100 mt-3-sm btn__Primary rounded-50'>Search</button>
                    </div>
                </div>
            </form>
        )
    }

    return (
        <header>
            <div className='header'>
                <div className='navbar__Container align-items-center navbar-expand-lg navbar-dark pb-2'>
                    <nav className="navbar d-flex">
                        <div className="d-flex w-100 justify-content-between">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon">
                                </span>
                            </button>

                            <Link className="nav-link navbar-brand d-flex align-items-center" to="/">
                                <img
                                    width="30px"
                                    className="item-link"
                                    src="https://cdn-icons-png.flaticon.com/512/2111/2111254.png"
                                    alt=""
                                />
                                <div className='main__Title ml-2'>
                                    AirBnb
                                </div>
                            </Link>

                            <a className="user-avatar nav-link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <MenuOutlined />
                                <UserOutlined />
                            </a>
                            <div className="dropdown-menu main__p dropdown-menu-right mt-0" aria-labelledby="navbarDropdown">
                                {userData ? (
                                    <>
                                        <Link to="/user-info" className="dropdown-item">Hồ sơ</Link>
                                        <Link to="/" onClick={handleLogout} className="dropdown-item">Đăng xuất</Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/register-page" className="dropdown-item">Đăng ký</Link>
                                        <Link to="/login-page" className="dropdown-item">Đăng nhập</Link>
                                    </>
                                )}
                                <a className="dropdown-item" href="/">Cho thuê nhà</a>
                                <a className="dropdown-item" href="/">Tổ chức trãi nghiệm</a>
                                <a className="dropdown-item" href="/">Trợ giúp</a>
                                <Link className='dropdown-item' to="/auth">
                                    <span className='main__p'>Admin Page</span>
                                </Link>
                            </div>
                        </div>




                    </nav>
                    {/** Form */}
                    <div id='navbarSupportedContent' className="collapse navbar-collapse">
                        <div className="d-flex flex-wrap container align-items-center justify-content-around text-white">

                            <div className="nav-link phone-info">
                                <PhoneOutlined />
                                <span> (+84) 28. 38 12 17 19</span>
                            </div>

                            <div className="text-center nav-link">
                                {/* Button to Show Form */}
                                <div className='btnFindRoom__Container d-flex'>
                                    <div className={`d-flex text-center m-auto justify-content-between`}>
                                        <div onClick={toggleForm} className={`btnFindRoom__Items btn d-flex flex-wrap text-center justify-content-center ${buttonActive ? `btnFindRoom__Container-active` : ``}`}>
                                            <div className='btnFindRoom__Item'>Địa điểm bất kỳ</div>
                                            <div className='btnFindRoom__Item'>Tuần bất kỳ</div>
                                            <div className='btnFindRoom__Item'>Thêm khách</div>
                                            <button className='btnFindRoom__Item btn border rounded-circle '>S</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='text-white icon1 nav-link'>
                                <div>
                                    <a href="/">
                                        {" "}
                                        <FacebookOutlined className="px-2" />
                                    </a>
                                    <a href="/">
                                        <TwitterOutlined className="px-2" />
                                    </a>
                                    <a href="/">
                                        {" "}
                                        <YoutubeOutlined className="px-2" />
                                    </a>
                                    <a href="/">
                                        <InstagramOutlined className="px-2" />
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div id='timPhongFormActive' className={`p-2 ${formActive ? 'formFindRoom-Show' : 'formFindRoom-Hide'} container-fluid text-center justify-content-center`}>
                        {renderDropDownCity()}
                    </div>
                </div>

            </div>
        </header>
    )
}
