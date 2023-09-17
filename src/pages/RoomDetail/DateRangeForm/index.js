import React, { useEffect } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { DateRange, DefinedRange } from 'react-date-range';

import './style.css'
import { useDispatch } from 'react-redux';
import { actCheckout } from '../../../redux/types/actions';
import { useNavigate } from 'react-router-dom';

const DateRangeForm = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data, user } = props

    const [showDateRange, setShowDateForm] = useState(false)
    const [guests, setGuests] = useState(data.khach);

    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const handleSelect = (ranges) => {
        const { startDate, endDate } = ranges.selection
        setSelectionRange(ranges.selection);
        setState({
            ...state,
            ngayDen: startDate,
            ngayDi: endDate,
        });

    };

    const selectedRanges = [selectionRange];

    const [state, setState] = useState(
        {
            id: data.id,
            maPhong: data.id,
            soLuongKhach: guests,
            ngayDen: selectionRange.startDate,
            ngayDi: selectedRanges.endDate,
            maKhachHang: null
        }
    );

    useEffect(() => {
        if (user) {
            setState(
                {
                    ...state,
                    maKhachHang: user.id
                }
            )
        }
    }, [])

    console.log(state);
    const handleGuestChange = (increment) => {
        if (guests + increment >= 1) {
            setGuests((prevGuests) => prevGuests + increment);
            setState({ ...state, soLuongKhach: guests + increment });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!localStorage.getItem("USER_LOGIN")) {
            if (window.confirm("Hãy đăng nhập để thực hiện chức năng này")) {
                navigate("/login-page", { replace: true })
            }
        }
        else {
            dispatch(actCheckout(state))
        }
    }

    return (
        <div>
            <div className=''>
                <form className=' p-3 form__Checkout border rounded rounded-lg' onSubmit={handleSubmit}>
                    <div className="">
                        <h5>10000<span> 4 .80 đánh giá</span></h5>

                        <div className=''>
                            <div className='d-flex'>
                                <div
                                    onClick={() => {
                                        setShowDateForm(!showDateRange);
                                    }}
                                    className='col-6 btn__Primary'
                                >
                                    NHẬN PHÒNG
                                    <br />
                                    {selectionRange.startDate ? selectionRange.startDate.toLocaleDateString() : "chọn ngày"}
                                </div>
                                <div
                                    onClick={() => {
                                        setShowDateForm(!showDateRange);
                                    }}
                                    className='col-6 btn__Primary'
                                >
                                    TRẢ PHÒNG
                                    <br />
                                    {selectionRange.endDate ? selectionRange.endDate.toLocaleDateString() : "chọn ngày"}
                                </div>
                            </div>


                            <div className='col-12 py-2 checkout__Guest'>
                                <div>
                                    <div>KHÁCH</div>

                                    <div className="d-flex justify-content-center align-items-center">
                                        <button className="btn__Primary" onClick={(e) => {
                                            e.preventDefault();
                                            handleGuestChange(-1)
                                        }}>-</button>

                                        <div className='guest__Input mx-2'>
                                            <input
                                                type='number'
                                                name='soLuongKhach'
                                                value={guests}
                                                onChange={(e) => setGuests(parseInt(e.target.value))}
                                            />
                                            Khách
                                        </div>

                                        <button className="btn__Primary" onClick={(e) => {
                                            e.preventDefault();
                                            handleGuestChange(1)
                                        }}>+</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <button className='w-100 btn__Primary' type='submit'>Đặt phòng</button>

                    <div className='text-center text-secondary mt-1'>Bạn vẫn chưa bị trừ tiền</div>

                    <div className='checkout__Bill mt-3'>
                        <div className='d-flex flex-wrap justify-content-between'>
                            <div>$ 100000 x 0 đêm </div>
                            <div>1500000 $</div>

                        </div>
                        <div className='d-flex flex-wrap justify-content-between'>
                            <div>Phí dịch vụ</div>
                            <div>0 $</div>
                        </div>
                    </div>

                    <hr />
                    <div className='d-flex flex-wrap justify-content-between'>
                        <h5 className=''>
                            Tổng trước thuế
                        </h5 >
                        <h5 className=''>1500000 $</h5>
                    </div>

                </form>
            </div >
            {/** Form */}

            {
                (showDateRange) &&
                (<div className='checkOut-form'>
                    <div className='d-flex justify-content-between'>
                        <div>Ten</div>
                        <button type='button' className='btn' onClick={(e) => {
                            setShowDateForm(!showDateRange)
                        }}>Close</button>
                    </div>

                    <div className='row'>
                        <div className='col-lg-5 col-md-5 col-sm-12'>
                            <DefinedRange
                                onChange={handleSelect}
                                ranges={selectedRanges}
                            />
                        </div>
                        <div className='col-lg-7 col-md-7 col-sm-12'>
                            <DateRange
                                editableDateInputs={true}
                                onChange={handleSelect}
                                moveRangeOnFirstSelection={false}
                                ranges={selectedRanges} // Pass the selectedRanges array
                            />
                        </div>
                    </div>
                </div>
                )
            }

        </div >
    )
}
export default DateRangeForm