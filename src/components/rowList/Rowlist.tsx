"use client"

import React, { useState } from 'react';
import './stylesRow.css';

function RowList(props: any) {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const formattedValue = new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0,
    }).format(props.dayrate);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    const backgroundColor = getRandomColor();

    return (
        <li className={`flex flex-1  hover color-div px-[24px] py-[16px] ${isChecked ? 'selectedRow' : ''}`}>
            <div className="flex gap-[9px] w-[293px]  items-center">
                <input
                    className=""
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <div className="unique text-white flex items-center  rounded-[8px]  w-[24px]"
                    style={{ backgroundColor }}>
                    {props.unique.charAt(0)}</div>
                <div className={`text-[#1B1B18]  ${isChecked ? 'selectedRowText' : ''}`}>
                    {props.fullname}
                </div>
            </div>
            <div className="flex w-[298px] gap-[6px] items-center ">
                {props.specialities.slice(0, 2).map((specialities: any, i: any) => (
                    <div key={i} className={` bg-[#F3F3F3]  rounded-[5px] text-[#5E5E5E] px-[8px] py-[6px] ${isChecked ? 'selectedRowTag' : ''}`}>
                        {specialities}
                    </div>
                ))}
                {props.specialities.length > 2 && (
                    <div className={` bg-[#F3F3F3]  rounded-[5px] text-[#5E5E5E] px-[8px] py-[6px] ${isChecked ? 'selectedRowTag' : ''}`}>
                        {props.specialities.length - 2}+
                    </div>
                )}

            </div>
            <div className="flex w-[120px] items-center" >${formattedValue}</div>
            <div className="flex w-[120px] items-center" >{props.availability}</div>

        </li>
    );
}

export default RowList;
