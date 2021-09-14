import React from 'react';
import './../../styles/Content.css';
import avatar from './../../assets/Avatar-Pierrick.png';

const MessageEnvoye = () => {
    return (
        <div className="absolute flex-1 w-1/2 right-5 flex flex-row-reverse justify-evenly">
            <div className="flex-initial">
                <img className="bg-gray-700 h-11 w-11 avatar" src={avatar} alt="" />
            </div>
            <div className="flex-initial border-2 w-1/2 bordure p-5 shadow-md bg-gray-100">
                <p>... Voici ce qu'on a envoyé.</p>
            </div>
            <h1 className="text-center text-blue-600 my-20">12:45 pm</h1>
        </div>
    );
};

export default MessageEnvoye;