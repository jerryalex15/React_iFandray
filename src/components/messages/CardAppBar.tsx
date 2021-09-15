import React from 'react';

type CardAppBarProps = {sary: string, nom: string , text: string}

const CardAppBar: React.FC<CardAppBarProps> = (props) => {
    return (
        <div className="block  hover:opacity-50 shadow-sm flex flex-row justify-between space-x-20 h-16 items-start shadow-sm pr-4 pl-4 bg-yellow-300 opacity-80">
            <section className="flex-auto space-x-1">
                <div className="inline-block ">
                    <img className="avatar h-11 w-11 bg-white" src={props.sary} alt="" />   
                </div>
                <div className="inline-block h-full ">
                    <h1 className="text-xl font-medium ">{props.nom}</h1>
                    <h3 className="text-lg font-normal">{props.text}<span className="circle"></span></h3>
                </div>
            </section>
            <section className="flex-1 space-y-3">
                <button className="block">...</button>
                <h5 className="block text-xs text-blue-400">2m</h5>
            </section>
            
        </div>
    );
};

export default CardAppBar;