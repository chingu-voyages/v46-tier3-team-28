'use client';
import React from 'react';

type ButtonProps = {
    text: string;
    onClick: () => void;
}
export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            className="bg-[#633CFF] text-white flex flex-col justify-center items-center font-medium py-3 px-3 mt-6 rounded-md hover:bg-opacity-80 cursor-pointer transition-all duration-300"
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
};