import React from 'react';
import './../../styles/Banner.css';
import avatar from './../../assets/Avatar-Pierrick.png';

const HeaderAppBar = () => {
    return (
        <div className="flex flex-row justify-between items-start space-x-20 h-14 shadow-sm pr-4 pl-4">
            <section className="flex-auto space-x-1">
                <div className="inline-block ">
                    <img className="avatar h-11 w-11 bg-white" src={avatar} alt="" />   
                </div>
                <div className="inline-block h-full ">
                    <h1 className="text-xl text-gray-800">Bohdan Kononets</h1>
                    <h3 className="text-sm text-gray-700">Available<span className="circle"></span></h3>
                </div>
            </section>
            <button className="flex-1">...</button>
        </div>
    );
};

export default HeaderAppBar;