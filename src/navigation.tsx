// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from "framer-motion";
// import scrollRef from "./header";
import React from 'react';
export default function ProjectsRow(){

    return (
        <div className="flex h-96 w-full">
            <a href="#agon" className="flex flex-auto bg-slate-500 h-auto"> Agon</a>
            <a href="#30birds" className="flex flex-auto bg-slate-700 h-"> 30 Birds</a>
            <a href="#barter" className="flex flex-auto bg-slate-900 h-auto"> Barter</a>
        </div>
    );
};
