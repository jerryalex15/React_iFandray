import React from 'react';
import './../../styles/Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import avatar from './../../assets/Avatar-Pierrick.png';

const BannerContent = () => {
    return (
        
        <div className="absolute ml-5 h-14 w-11/12 bg-white shadow-sm ">
            <section className="hidden laptop:flex desktop:flex flex-row justify-center items-center space-x-24 mr-0 my-auto">
                <div className="flex-1 bg-white w-1/4 pl-3">
                    <img className="bg-gray-700 h-11 w-11 avatar" src={avatar} alt=""/>
                </div>
                <div className="flex-auto bg-white w-1/3 text-center">
                    <h2 className="font-medium">Bohdan Kononets</h2>
                    <h3>Lisbon,<span className="font-light text-blue-600">Portugal 10:10 pm</span></h3>
                </div>
                <div className="flex-1 bg-white w-1/4 space-x-4">
                    <FontAwesomeIcon className="inline-block h-11 w-11 avatar" icon={["fal" , "camera"]} />
                    <FontAwesomeIcon className="inline-block h-11 w-11 avatar" icon={["fal" , "camera"]} />
                    <FontAwesomeIcon className="inline-block h-11 w-11 avatar" icon={["fal" , "camera"]} />
                </div>
            </section>
        </div>
    );
};

export default BannerContent;