import React from 'react';
import HeaderText from './HeaderText';
import NavBar from './NavBar';

const Banner = () => {
    return (
        <header className="relative pl-5 bg-gradient-to-b from bg-yellow-500 to-yellow-200 w-full h-16 shadow-lg">
            <HeaderText></HeaderText>
            <NavBar></NavBar>
        </header>
    );
};

export default Banner;