import React, { useEffect, useState } from 'react';
import './style.css';
import { GlobalOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listCityAct } from '../../redux/types/actions';

export default function Navbar() {
    const [formActive, setFormActive] = useState(false);
    const listCityData = useSelector((state) => state.cityReducer.data);


    const dispatch = useDispatch();



    const toggleForm = () => {
        setFormActive(!formActive);
    };


    const renderDropDownCity = () => {

        return (
            <form onSubmit={handleOnSubmit} className='formTimPhong w-75 m-auto d-flex justify-content-around align-items-center text-left'>
                <div className='col-4 p-4 timPhongItemSearch'>
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
                <div className='col-2 timPhongItemSearch d-flex flex-column'>
                    <label>Nhận phòng</label>
                    <input className=' border-0' type='date' />
                </div>
                <div className='col-2 timPhongItemSearch d-flex flex-column'>
                    <label>Trả phòng</label>
                    <input className=' border-0' type='date' />
                </div>
                <div className='col-4 timPhongItemSearch w-25 d-flex align-items-center'>
                    <div className='d-flex flex-column col-5'>
                        <label>Khách</label>
                        <input className=' border-0' defaultValue={0} />
                    </div>
                    <div className='col-7'>
                        <button type='submit' className=' w-100 btn btn-danger rounded-50'>Search</button>
                    </div>
                </div>
            </form>
        )
    }

    const [state, setState] = useState({
        id: ""
    });

    const handleOnChange = (e) => {
        return setState({
            id: e.target.value
        })
    };


    useEffect(() => {
        dispatch(listCityAct());
    }, [dispatch]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (state.id !== "") {
            // dispatch, navigate
            console.log(state);
        }
    }

    return (
        <header>
            <nav className="navbar py-3 navbar-expand-sm navbar-light justify-content-between w-75 m-auto">
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
                                <UnorderedListOutlined />
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
            <div className='timPhongForm w-100 d-flex'>
                <div className={`d-flex text-center m-auto justify-content-between`}>
                    <Link onClick={toggleForm} className='timPhong-Show-btn btn d-flex flex-wrap text-center justify-content-center'>
                        <div className='timPhongItem'>Dia diem</div>
                        <div className='timPhongItem'>Tuan</div>
                        <div className='timPhongItem'>Them khach</div>
                        <button className='timPhongItem btn border rounded-circle btn-danger'>S</button>
                    </Link>
                </div>
            </div>

            <div id='timPhongFormActive' className={`p-2 ${formActive ? 'timPhongForm-Show' : 'timPhongForm-Hide'} container-fluid text-center justify-content-center`}>
                {renderDropDownCity()}
            </div>
        </header>
    )
}
