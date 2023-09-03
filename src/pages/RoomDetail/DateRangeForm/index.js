import React from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateRange, DateRangePicker, DefinedRange } from 'react-date-range';
const DateRangeForm = () => {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    return (
        <div className='d-flex'>
            <DefinedRange className='col-6'
                onChange={item => setState([item.selection])}
                ranges={state}
            />;
            <DateRange className='col-6'
                onChange={item => setState([item.selection])}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={1}
                ranges={state}
                direction="horizontal"
            />
        </div>
    )
}
export default DateRangeForm