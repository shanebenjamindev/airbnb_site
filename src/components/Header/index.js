import React, { useEffect, useState } from 'react';
import './style.css';
import { GlobalOutlined, MenuOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actListCity } from '../../redux/types/actions';

export default function Navbar() {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(actListCity());
    }, [dispatch]);

    // Button show the form State
    const [buttonActive, setButtonActive] = useState(false);

    // Form's State
    const [formActive, setFormActive] = useState(false);

    const [state, setState] = useState({
        id: ""
    });

    const listCityData = useSelector((state) => state.cityReducer.data);

    // Press Button to Show Form
    const toggleForm = () => {
        setFormActive(!formActive);
        setButtonActive(!formActive);
    };

    // Dropdown on change
    const handleOnChange = (e) => {
        return setState({
            id: e.target.value
        })
    };

    // Button Submit Pressed
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (state.id !== "") {
            navigate(`/roombycity/${state.id}`);
        }
    }

    const renderDropDownCity = () => {
        return (
            <form onSubmit={handleOnSubmit} className='formFindRoom w-75 m-auto d-flex flex-wrap justify-content-around align-items-center text-left'>
                <div className='col-md-4 p-4 formFindRoom__Item'>
                    <span>Địa điểm </span>
                    <select className='' onChange={handleOnChange} name="selectedCityId" >
                        <option value={""}>Chọn thành phố</option>
                        {
                            listCityData?.map((city, index) => {
                                return <option key={index} value={city.id}>{city.tenViTri}</option>
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
                                <a className="dropdown-item" href="/">Đăng ký</a>
                                <a className="dropdown-item" href="/">Đăng nhập</a>
                                <a className="dropdown-item" href="/">Cho thuê nhà</a>
                                <a className="dropdown-item" href="/">Tổ chức trãi nghiệm</a>
                                <a className="dropdown-item" href="/">Trợ giúp</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Button to Show Form */}
            <div className='btnFindRoom__Container w-100 d-flex'>
                <div className={`d-flex text-center m-auto justify-content-between`}>
                    <div onClick={toggleForm} className={`btnFindRoom__Items btn d-flex flex-wrap text-center justify-content-center ${buttonActive ? `btnFindRoom__Container-active` : ``}`}>
                        <div className='btnFindRoom__Item'>Dia diem</div>
                        <div className='btnFindRoom__Item'>Tuan</div>
                        <div className='btnFindRoom__Item'>Them khach</div>
                        <button className='btnFindRoom__Item btn border rounded-circle btn-danger'>S</button>
                    </div>
                </div>
            </div>

            {/** Form */}
            <div id='timPhongFormActive' className={`p-2 mt-4 mt-md-0 ${formActive ? 'formFindRoom-Show' : 'formFindRoom-Hide'} container-fluid text-center justify-content-center`}>
                {renderDropDownCity()}
            </div>
        </header>
    )
}
