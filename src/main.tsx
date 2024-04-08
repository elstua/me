import React from 'react';
import { motion } from 'framer-motion';


export default function FirstScreen() {
    return (
      <main className="flex mainblock-height flex-col items-center justify-between pt-24" id="main">
        <div className="content-width flex-col items-left font-mono text-sm lg:flex">
          <h1 className='pb-10'>Hi, I'm Artem Savelev!</h1>
          <p className='w-1/2'>
          My work title last 9 years is Product Designer.
          Through seed stage  startups to huge corporation I exploring ways of create holistic experience.</p>
          <p className='w-1/2 pt-6'>
          My goal is design products that can create their own stories, not just solve user stories. And every product is story of it's own. Every team, decision and task is a huge part of experience that we bring into user’s world.
          </p>
          <p className='w-1/2 pt-6'>
          I’m open to work right now and would love to chat with you
          </p>
          <ul className="flex flex-col w-full pt-4 pb-10 gap-2">
          <li className='flex flex-row gap-2'><p className='text-gray-400	'>Location</p><p>Lisbon</p></li>
          <li className='flex flex-row gap-2'><p className='text-gray-400	'>Mail</p> <a href="mailto:stua@fastmail.com" className='no-underline hover:underline'>stua@fastmail.com</a></li>
          <li className='flex flex-row gap-2'><p className='text-gray-400	'>Experience</p> 
            <a href="https://read.cv/stua" className='no-underline hover:underline'>Read.cv</a>
            <p>,</p>
            <a href="https://linkedin.com/in/stua" className='no-underline hover:underline'>LinkedIn</a>
          </li>
          <li className='flex flex-row gap-2'><p className='text-gray-400	'>Social</p> <a href="https://twitter.com/s_tu_a" className='no-underline hover:underline'>Twitter</a></li>
          </ul>
        </div>
      </main>
    );
  }