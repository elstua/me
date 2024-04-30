import React from 'react';
import Image from './imageExpand';

const Footer: React.FC = () => {
    const version = '0.0.2';

    return (
        <footer className="flex flex-col items-center w-full z-[99]">
            
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
            <div className='flex flex-col items-center mt-[-24px] mb-[-100px]'>
                <div className='flex flex-row items-center my-[-24px] z-[2]'>
                    <Image src='/Footer/nda_f.webp' alt='Nda period app' layoutId='nda_f'/>
                    <Image src='/Footer/barter-landing.webp' alt='Nda period app' layoutId='Barter'/>
                </div>
                <div className='flex flex-row items-center my-[-24px]'>
                    <Image src='/Footer/cabinet_q.webp' alt='storage startup order' layoutId='cabinet_q'/>
                    <Image src='/Footer/qb-graphics.webp' alt='graphic for storage startup' layoutId='qbgraph'/>
                    <Image src='/Footer/zorion_app.webp' alt='30Birds' layoutId='zorion'/>
                </div>
            </div>


        </footer>
    );
};

export default Footer;