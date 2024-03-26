'use client'

import React, { useEffect, useRef } from 'react';

const Header = () => {
    return (
            <header className= "h-20 w-full bg-white fixed z-10">
            <div className="flex flex-row justify-between items-center h-full w-full pl-24 pr-24">
                <div className="flex flex-row items-center">
                <p className="text-2xl font-bold">Hi! I'm Artem Savelev</p>
                </div>
                <div className="flex flex-row items-center" id="projectnav">
                <a href="#agon" className="pr-4 active:">Agon</a>
                <a href="#30birds" className="pr-4">30 Birds</a>
                <a href="#barter" className="pr-4">Barter</a>
             </div>
            </div>
        </header>
    );
};

export default Header;
