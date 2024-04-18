import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function DateInput({ height, width, onChange, value}) {
    // const [selectedDate, setSelectedDate] = useState(null);
    const [isFocused, setIsFocused] = useState(false);

    const datePickerStyle = { 
        width: width,
        height: height, 
        backgroundColor: '#ffffff',
        border: `1px solid ${isFocused ? '#8C98A4' : '#ccc'}`, 
        borderRadius: '5px',
        padding: '10px', 
        fontSize: '16px', 
        fontFamily: 'Inter, sans-serif', 
        color: '#1E2022', 
        boxShadow: isFocused ? 'rgba(140, 152, 164, 0.25) 0px 0px 16px 0px' : 'none',
        transition: 'box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out',
        outline : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        resize:'none'
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };

    return (
        <div>
            <DatePicker
                onChange={onChange}
                selected={value}
                type ='Date'
                dateFormat="MMM d, yyyy" 
                onFocus={handleFocus}
                onBlur={handleBlur}
                customInput={<textarea style={datePickerStyle} />}
            />
        </div>
    );
}

export default DateInput;
