"use client"

import React, { useState } from 'react';
import './modal.css';

function Modal(props: any) {
    const [valueInput, setValueInput] = useState('')
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button className='fixed justify-center top-1/2 left-1/2 items-center z-[100]' onClick={openModal}>Open Modal</button>
            {isOpen && (
                <div className='flex fixed items-center justify-center w-full h-full top-0 left-0 z-[100] bg-backgroud_gray'>
                    <div className='flex justify-center'>
                        <div className=" flex-1 w-[676px] h-[360px] bg-[#fff] rounded-[5px] ">
                            <div className="flex p-[24px] ">
                                <input
                                    className="flex flex-1 bg-[transparent]  w-[628px] h-[24px] z-10"
                                    type="text"
                                    placeholder="Type something"
                                    value={valueInput}
                                    onChange={e => setValueInput(e.target.value)}
                                />
                                <button className='flex' onClick={closeModal}>x</button>
                            </div>
                            <div className='px-[16px] text-[#868683] text-[10px]'>
                                RECOMENDED
                            </div>
                            <div className='hoverTitle px-[16px] py-[12px] flex-1 text-[#555] text-[14px] rounded-[8px]'>
                                Title goes here
                            </div>
                            <div className='hoverTitle px-[16px] py-[12px] flex-1 text-[#555] text-[14px] rounded-[8px]'>
                                Title goes here
                            </div>
                            <div className='hoverTitle px-[16px] py-[12px] flex-1 text-[#555] text-[14px] rounded-[8px]'>
                                Title goes here
                            </div>
                            <div className='hoverTitle px-[16px] py-[12px] flex-1 text-[#555] text-[14px] rounded-[8px]'>
                                Title goes here
                            </div>

                            <div className='hoverTitle px-[16px] py-[12px] flex-1 text-[#555] text-[14px] rounded-[8px]'>
                                Title goes here
                            </div>
                            <div className='hoverTitle px-[16px] py-[12px] flex-1 text-[#555] text-[14px] rounded-[8px]'>
                                Title goes here
                            </div>

                        </div>
                    </div>

                
                </div>
                )}
        </div>

    );
}

export default Modal;
