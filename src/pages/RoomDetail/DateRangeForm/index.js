import React, { useEffect } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { DateRange, DefinedRange } from 'react-date-range';

import './style.css'
import { useDispatch } from 'react-redux';

const DateRangeForm = () => {

    const dispatch = useDispatch();

    const [showDateRange, setShowDateForm] = useState(false)
    const [guests, setGuests] = useState(0);

    useEffect(()=> {
        
    })
    
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const handleGuestChange = (increment) => {
        if (guests + increment >= 0) {
            setGuests((prevGuests) => prevGuests + increment);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("click dat phong");
    }

    return (

        <div className=''>
            <div className=''>
                <form className='p-4 form__Checkout border rounded rounded-lg' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <h5>10000<span> 4 .80 đánh giá</span></h5>

                        <div className='checkout__DateForm'>
                            <div className='d-flex'>
                                <div
                                    onClick={() => {
                                        setShowDateForm(!showDateRange);
                                    }}
                                    className='col-md-6 btn btn-outline-secondary checkout__DateFormItem'
                                >
                                    NHẬN PHÒNG
                                    <br />
                                    {state[0].startDate ? state[0].startDate.toDateString() : 'Chọn ngày'}
                                </div>
                                <div
                                    onClick={() => {
                                        setShowDateForm(!showDateRange);
                                    }}
                                    className='col-md-6 btn btn-outline-secondary checkout__DateFormItem'
                                >
                                    TRẢ PHÒNG
                                    <br />
                                    {state[0].endDate ? state[0].endDate.toDateString() : 'Chọn ngày'}
                                </div>
                            </div>


                            <div className='col-12 py-2 checkout__Guest'>
                                <div>
                                    <div>KHÁCH</div>

                                    <div className="d-flex d-flex justify-content-between">
                                        <button className="btn btn-secondary" onClick={(e) => {
                                            e.preventDefault();
                                            handleGuestChange(-1)
                                        }}>-</button>

                                        <div>{guests} khách</div>

                                        <button className="btn btn-secondary" onClick={(e) => {
                                            e.preventDefault(); handleGuestChange(1)
                                        }}>+</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <button className='w-100 btn btn-danger' type='submit'>Đặt phòng</button>

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
                (<div className=' checkOut-form'>
                    <div className='d-flex justify-content-between'>
                        <div>Ten</div>
                        <button type='button' className='btn btn-ouline-danger' onClick={(e) => {

                            setShowDateForm(!showDateRange)

                        }}>Close</button>
                    </div>

                    <div className='d-flex'>
                        <DefinedRange className='col-6'
                            onChange={item => setState([item.selection])}
                            ranges={state}
                        />

                        <DateRange className='col-6'
                            onChange={item => setState([item.selection])}
                            showSelectionPreview={true}
                            moveRangeOnFirstSelection={false}
                            months={1}
                            ranges={state}
                            direction="horizontal"
                        />
                    </div>
                </div>
                )
            }

        </div >
    )
}
export default DateRangeForm