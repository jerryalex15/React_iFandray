import React from 'react';

const NavBar = () => {
    return (
        <div className="absolute right-8 flex flex-row justify-between space-x-3 top-3 desktop:space-x-20 laptop:space-x-20">
            <a href ="service" className="uppercase no-underline flex-1">services</a>
            <a href="team" className="uppercase no-underline flex-1">team</a>
            <a href="contact" className="uppercase no-underline flex-1">contact</a>
        </div>
    );
};

export default NavBar;