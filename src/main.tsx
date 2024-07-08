import React from 'react';
import { motion } from 'framer-motion';


export default function FirstScreen() {
    return (
      <main className="flex mainblock-height w-full flex-col items-center justify-between pt-8 md:pt-16 sm:pl-0 sm:pr-0" id="main">
        <div className="content-width flex-col items-left font-mono text-sm text-neutral-900 lg:flex">
          <div className='flex flex-row items-center gap-2 pb-10'>
            <h1>Hi, I'm Artem Savelev!</h1>
            <motion.img 
            src='/me.png' 
            alt="my avatar should be there"
            className='rounded-full w-8 h-8'
            initial={{ 
              zIndex: 0,
              scale: 1,
          }} 
          whileHover={{
              scale: 2,
              zIndex: 1,
              rotate: 0,
              transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 2 }}
            />
          </div>
          <p className='md:w-2/3 w-full'>
          Over the past nine years, my work title has been Product Designer.
          From seed-stage startups to large corporations, I have explored ways to design holistic experiences.</p>
          <p className='md:w-2/3 w-full pt-6'>
          I believe that software can tell a story. It can provide users with a new perspective on everyday life. It offer teams a journey of decisions and ideas that evolve into greateness.
          </p>
          
          <p className='md:w-2/3 w-full pt-6'>
          I am currently looking for a new project and would love to collaborate with you. Let's chat!
          </p>
          <ul className="flex flex-col w-full pt-4 pb-10 gap-4">
          <li className='flex flex-row gap-2'><p className='opacity-50'>Mail</p> <a href="mailto:stua@fastmail.com" className='no-underline hover:underline'>stua@fastmail.com</a></li>
          <li className='flex flex-row gap-2'><p className='opacity-50'>Experience</p> 
            <a href="https://read.cv/stua" target="_blank" rel="noopener noreferrer" 
            className='no-underline hover:underline'>Read.cv ↗︎</a>
            <p>,</p>
            <a href="https://linkedin.com/in/stua" target="_blank" rel="noopener noreferrer" 
            className='no-underline hover:underline'>LinkedIn ↗︎</a>
          </li>
          <li className='flex flex-row gap-2'><p className='opacity-50'>Social</p> 
          <a href="https://twitter.com/s_tu_a" target="_blank" rel="noopener noreferrer" 
          className='no-underline hover:underline'>Twitter ↗︎</a>
          <p>,</p>
          <a href="https://posts.cv/stua" target="_blank" rel="noopener noreferrer" 
          className='no-underline hover:underline'>Posts ↗︎</a>
          </li>
          <li className='flex flex-row gap-2'><p className='opacity-50'>City</p><p>Lisbon</p></li>
          </ul>
        </div>
      </main>
    );
  }