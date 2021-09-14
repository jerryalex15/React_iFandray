import React from 'react';
import './../../styles/AppBar.css';
import CardAppBar from './CardAppBar';
import HeaderAppBar from './HeaderAppBar';
import avatar1 from './../../assets/avatarsmiley.jpg';
import avatar2 from './../../assets/avatar.png';



const AppBar = () => {
    return (
        <div className="fixed bg-yellow-400  text-gray-900 left-0 w-full h-full pl-8 laptop:w-96 desktop:w-96">
            <section className="relative w-full h-full">             
                <div className="absolute space-y-5">
                    <div className="block"><HeaderAppBar/></div>
                    <div className="block"><input  className="h-8 w-full pl-10 italic bg-transparent border-2" type="search" placeholder="Search for people ..."/></div>
                    <div className="text-lg underline font-semibold">Yesterday</div>
                    <CardAppBar sary={avatar1} nom="Mittie Houston" text="salut!"></CardAppBar>
                    <div className="opacity-60">
                        <CardAppBar sary={avatar2} nom="Bob Marley" text="salama daholo ve"></CardAppBar>
                    </div>
                    <div className="opacity-60">
                        <CardAppBar sary={avatar1} nom="Harley Davidson" text="Andao igame"></CardAppBar>
                    </div>
                    <div>
                        <CardAppBar sary={avatar2} nom="Maroon steve" text="Kaiza Kaiza"></CardAppBar>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AppBar;