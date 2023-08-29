import React, { useEffect, useState } from 'react';
import './style.css';
import { GlobalOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listCityAct } from '../../redux/types/actions';

export default function Navbar() {
    const [formActive, setFormActive] = useState(false);
    const listCityData = useSelector((state) => state.cityReducer.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listCityAct());
    }, [dispatch]);

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedCityValue, setSelectedCityValue] = useState('');

    const renderDropDownCity = () => {
        const handleCitySelect = (city) => {
            setSelectedCity(city);
            setSelectedCityValue(city.maViTri);
        };

        return listCityData?.map((city, index) => (
            <div
                key={index}
                className='dropdown-item'
                onClick={() => handleCitySelect(city)}
            >
                {city.tenViTri}
            </div>
        ));
    };
    const toggleForm = () => {
        setFormActive(!formActive);
    };

    return (
        <nav className="navbar py-3 px-0 navbar-expand-sm navbar-light justify-content-between">
            <div className='position-absolute container d-flex flex-column bg-danger'>
                <div id='timPhongForm' className={`d-flex text-center m-auto justify-content-between ${formActive ? 'd-none' : ''}`}>
                    <Link onClick={toggleForm} className='btn btn-warning d-flex flex-wrap text-center justify-content-center'>
                        <div className='timPhongItem'>Dia diem</div>
                        <div className='timPhongItem'>Tuan</div>
                        <div className='timPhongItem'>Them khach</div>
                        <button className='timPhongItem btn border rounded-circle btn-danger'>S</button>
                    </Link>
                </div>
                <div id='timPhongFormActive' className={` ${formActive ? 'd-flex' : 'd-none'} text-center m-auto justify-content-between`}>
                    <form className='btn btn-warning d-flex flex-wrap text-center justify-content-center'>
                        <div className='timPhongItem'>
                            <Link
                                className="nav-link border rounded d-flex"
                                to="/"
                                id="dropdownCity"
                                data-toggle="dropdown"
                            >
                                {selectedCity ? selectedCity.tenViTri : 'Select City'}
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="dropdownCity" value="">
                                {renderDropDownCity()}
                            </div>
                        </div>
                        <div className='timPhongItem'>Tuan</div>
                        <div className='timPhongItem'>Them khach</div>
                        <button className='timPhongItem btn btn-danger'>Search</button>
                    </form>

                </div>
            </div>
            <div className='d-none d-lg-flex'>
                <Link className="bg-warning navbar-brand" to="/">Navbar</Link>
            </div>
            <div className="d-none d-lg-flex" id="collapsibleNavId">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <a className="nav-link" href="/">Trở thành chủ nhà</a>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" href="/" >
                            <GlobalOutlined />
                        </Link>
                    </li>

                    <li className="nav-item dropdown">
                        <Link className="nav-link border rounded d-flex " href="/" id="dropdownId" data-toggle="dropdown">
                            <div>
                                <UnorderedListOutlined className='mt-0' />
                            </div>

                            <div>
                                <img className='border rounded-circle' src='https://th.bing.com/th/id/R.a3d20cfa04c5affc24975d409ea20974?rik=PafJFHKVzjS2BA&pid=ImgRaw&r=0' width="20" height="20" />
                            </div>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownId">
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

    )
}
