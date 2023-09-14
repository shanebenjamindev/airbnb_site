import React, { useEffect, useState } from 'react';
import './style.css';
import { DingdingOutlined, FacebookOutlined, GlobalOutlined, InstagramOutlined, MenuOutlined, PhoneOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actListCity } from '../../redux/types/actions';

export default function Navbar() {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const listCityData = useSelector((state) => state.cityReducer.data);
    const userData = JSON.parse(localStorage.getItem("USER_LOGIN"));

    console.log(userData);

    useEffect(() => {
        dispatch(actListCity());
    }, [dispatch]);

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
                        <button type='submit' className=' w-100 mt-3-sm btn btn-danger rounded-50'>Search</button>
                    </div>
                </div>
            </form>
        )
    }

    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light justify-content-between m-auto">
                <div className='d-none d-lg-flex'>
                    <Link className="navbar-brand" to="/">Airbnb</Link>
                </div>
                <div className="d-none d-lg-flex" id="collapsibleNavId">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link" href="/">Trở thành chủ nhà</a>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link pt-1" href='/'> <GlobalOutlined /></a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="user-avatar nav-link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <MenuOutlined />
                                <img width="25" height="25" alt='avatar user' className='border rounded-circle' src='https://th.bing.com/th/id/R.a3d20cfa04c5affc24975d409ea20974?rik=PafJFHKVzjS2BA&pid=ImgRaw&r=0' />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <Link to="/register-page" className="dropdown-item">Đăng ký</Link>
                                {userData ?
                                    (

                                        <Link to="/" onClick={handleLogout} className="dropdown-item">Đăng xuất</Link>
                                    ) :
                                    (
                                        <Link to="/login-page" className="dropdown-item">Đăng nhập</Link>
                                    )
                                }
                                <a className="dropdown-item" href="/">Cho thuê nhà</a>
                                <a className="dropdown-item" href="/">Tổ chức trãi nghiệm</a>
                                <a className="dropdown-item" href="/">Trợ giúp</a>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </nav>
             {/* Button to Show Form */}
             <div className='btnFindRoom__Container d-flex'>
             <div className={`d-flex text-center m-auto justify-content-between`}>
                 <div onClick={toggleForm} className={`btnFindRoom__Items btn d-flex flex-wrap text-center justify-content-center ${buttonActive ? `btnFindRoom__Container-active` : ``}`}>
                     <div className='btnFindRoom__Item'>Địa điểm bất kỳ</div>
                     <div className='btnFindRoom__Item'>Tuần bất kỳ</div>
                     <div className='btnFindRoom__Item'>Thêm khách</div>
                     <button className='btnFindRoom__Item btn border rounded-circle btn-danger'>S</button>
                 </div>
             </div>
         </div>

         {/** Form */}
         <div id='timPhongFormActive' className={`p-2 mt-5 mt-md-0 ${formActive ? 'formFindRoom-Show' : 'formFindRoom-Hide'} container-fluid text-center justify-content-center`}>
             {renderDropDownCity()}
         </div>


            <div
                className="d-flex navbar-expand-lg justify-content-end">
                <div className="content1">
                    <DingdingOutlined />{" "}
                    <span>BINH CYBERSOFT</span>
                </div>
                <div className="phone1">
                    <PhoneOutlined />
                    <span> (+84) 28. 38 12 17 19</span>
                </div>

                <div className="logo p-3 navbar-brand collapse navbar-collapse" id="navbarSupportedContent">
                    <img
                        className="nav-item item-link"
                        src="../img/sky-logo-header.png"
                        alt=""
                    />
                </div>

                <div>

                    <div
                        className="icon1"
                        style={{
                            color: "white",
                        }}
                    >
                        <a href="">
                            {" "}
                            <FacebookOutlined className="px-3" />
                        </a>
                        <a href="">
                            <TwitterOutlined className="px-3" />
                        </a>
                        <a href="">
                            {" "}
                            <YoutubeOutlined className="px-3" />
                        </a>
                        <a href="">
                            <InstagramOutlined className="px-3" />
                        </a>
                    </div>
                </div>

            </div>

           
        </header>
    )
}
