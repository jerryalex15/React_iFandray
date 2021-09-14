import React from 'react';
import './../../styles/Content.css';
import avatar2 from './../../assets/avatar.png';

const MessageRecu = () => {
    return (
        <div className="absolute flex-1 w-1/2 left-5 flex flex-row justify-evenly">
            <div className="flex-initial">
                <img className="bg-gray-700 h-11 w-11 avatar" src={avatar2} alt="" />
            </div>
            <div className="flex-initial border-2 w-1/2 bordure p-5 bg-gray-100 shadow-md">
                <p>Voici ce qu'on reçoit dans ce message ...Nous sommes ravi de vous envoyer ce message.</p>
            </div>
            <h1 className="text-center text-blue-600 my-20">12:40 pm</h1>
        </div>
    );
};

export default MessageRecu;