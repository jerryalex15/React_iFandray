import React from 'react';
import './../../styles/CenterText.css';

const CenterText = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-300 fill-screen">
            <h3 className="flex-initial text-base italic text-lg font-light ">Welcome to our Messenger</h3>
            <h1 className="flex-initial uppercase font-semibold text-5xl">Need to talk with your friends</h1>
            <div className=" relative w-60 h-14 border-2 box-border bouton bg-green-400 opacity-40 hover:border-green-500 hover:opacity-80 my-8">
                <a href="http" className="absolute top-2 left-10 text-xl no-underline text-gray-500">share somethings</a>
            </div>
        </div>
    );
};

export default CenterText;