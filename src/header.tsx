"use client";
import React from 'react';
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useState, useEffect } from "react";
import { filterProps, motion, useScroll, useTransform } from "framer-motion";
import "./App.css";

export function HeaderNav(){

    useEffect(() => {
        scrollSpy.update();

      }, []);
    const links = [
        { href: "agon", text: "Agon" },
        { href: "30birds", text: "30 Birds" },
        { href: "barter", text: "Barter" },
        { href: "yango", text: "Yango" }
    ];
    
    const handleSetActive = (to: any) => {
      };

    return (
        <>
        
            {links.map((link, index) => (
                <Link
                    className="flex flex-1 justify-center content-center items-center align-middle
                    rounded-full font-mono text-sm h-12 text-black cursor-pointer
                    transition-all ease-in-out headernav
                    duration-300 ..."
                    activeClass="font-extrabold"
                    to={link.href}
                    spy={true} 
                    hashSpy={true}
                    smooth={true} 
                    duration={400}
                    offset={-300}
                    onSetActive={handleSetActive}
                >
                    {link.text}
                </Link>
            ))}
        </>
    );
}


export default function Header(){

    const [showProjectNav, setShowProjectNav,] = useState(false);
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 1 * window.innerHeight;

        if (scrollPosition > threshold) {
            setShowProjectNav(true);
        } else {
            setShowProjectNav(false);
        }
    };
    const [showNav, setShowNav,] = useState(false);
    const headerScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = window.innerHeight * 0.7;

        if (scrollPosition > threshold) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    };

        const { scrollY } = useScroll();
    const headerColor = useTransform(
      scrollY,
      [400, 800],
      ["#fff7ed", "rgba(232, 220, 200, 0.8)"]
    );

    const padding = useTransform(
        scrollY,
        [400, 800],
        ["8px", "16px"]
    );

    const blur = useTransform(
        // Add the missing CSS filter style
        scrollY,
        [400, 800],
        [`blur(32px)`, `blur(0px)`]
    );

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", headerScroll);
    }, []);

    return (
            <header className= "flex flex-col items-center fixed top-0 left-0 right-0 z-30 pl-32 pr-32 pt-4 min-h-18">
            <div 
            className={` header-width items-between flex-row h-20`}>
                <motion.div className={`flex justify-between w-full flex-row rounded-full backdrop-blur-lg ${showNav ? "showNav" : "hideNav"}`}
                style={{ backgroundColor: headerColor, padding: padding, filter: blur}}
                >
                <Link
                    className="flex p-4 justify-center content-center items-center align-middle
                    rounded-full font-mono text-sm h-12 text-black cursor-pointer
                    transition-all ease-in-out
                    headernav duration-300 ..."
                    activeClass="font-extrabold decoration-solid"
                    to={"main"}
                    smooth={true} 
                    duration={400}
                    offset={-300}
                >
                    Artem Savelev
                </Link>
                <div className={`flex flex-row w-2/4 content-between ${showProjectNav ? "show" : "hide"}`}>
                    <HeaderNav />
                </div>
                <a
                    href="mailto:stua@fastmail.com"
                    className="flex p-4 justify-center content-center items-center align-middle
                    rounded-full font-mono text-sm h-12 text-black cursor-pointer
                    transition-all ease-in-out
                    headernav duration-300 ..."
                >
                    ↘︎ Contact me
                </a>
                </motion.div>
            </div>
            
        </header>
    );
};  