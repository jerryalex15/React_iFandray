import React from 'react';

const SendText = () => {
    return (
        <div className="absolute bottom-0 bg-gray-100 w-full h-14 border-2 space-x-4 hidden laptop:inline-block desktop:inline-block">
            <input className="h-full w-10/12 bg-gray-100 pl-5" type="text" name="sendedText" id="sendedText" placeholder="Type a message her..."/>
            <button className="font-extrabold shadow-md w-32 h-12 mr-5 bg-yellow-400">Send</button>
        </div>
    );
};

export default SendText;