import React from 'react';
import HeaderText from './HeaderText';
import NavBar from './NavBar';

const Banner = () => {
    return (
        <header className="relative bg-gradient-to-br from bg-green-100 to-green-300 w-full h-14 shadow-lg">
            <HeaderText></HeaderText>
            <NavBar></NavBar>
        </header>
    );
};

export default Banner;