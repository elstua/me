import React from 'react';

const Footer: React.FC = () => {
    const version = '0.0.1';

    return (
        <footer className="flex flex-col items-center w-full">
            
            <div className="content-width pt-20 pb-20 flex flex-row items-left justify-between font-mono text-sm text-neutral-900">
            <div className='flex flex-col items-start w-2/5'>
            <p className=''>That's all for now! Thanks for scrolling ♥︎</p>
            <p className='opacity-50'> I continue to develop and add things (that we developed together)</p>
            </div>

            <div className='flex flex-col items-end'>
            <p className='opacity-50'>Version: {version}</p>
            <p className='opacity-50'>Developed with React</p>
            </div>
            
            </div>
        </footer>
    );
};

export default Footer;