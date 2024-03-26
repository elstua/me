import Image from 'next/image';

export default function BarterBlock() {
    return (
        <div className="flex flex-col items-center pl-60 pr-60">
        <div className="flex flex-col w-full items-center">

            <div className="flex flex-col items-center">
                <div className="flex w-full content-between items-center space-x-4">
                    <p>2022</p>
                    <div className="flex-1 w-auto h-1 bg-black"></div>
                    <p>2023</p>
                </div>
                <h1 className="">Barter</h1>
                <h3>Make crypto swaps more enjoyable</h3>
            </div>

            <div className="flex w-full h-auto pt-20 pb-10">
                    <Image src="/Barter/BarterMain.png" 
                    alt="Barter" 
                    width={1280} 
                    height={720} 
                    className="h-full rounded-3xl" 
                    quality={100} />
            </div>

             <div className="flex w-2/3 h-auto pt-10 pb-10">
                <div className='w-full'>
                <p>
                Barter is an intent based swap tool that change space of swapping crypto. Founders asked me to find a design language, build branding and explore the way to make a B2C part of product — interface for swaps.
                </p> 
                <p>
                Main idea of interface and branding — make crypto more material. With intetion to move away I design interfaces and marketing materials as interactive objects in digital space.
                </p> 
                </div>
             </div>

              {/* flow block */}
            <div className="flex w-full h-auto pt-10 pb-10 gap-8">
                <div className='browserwindow w-full flex-1 rounded-3xl'>
                    <Image src="/barter/swap.png" 
                    alt="30Birds" 
                    width={1280} 
                    height={720} 
                    quality={100} />
                </div>
                
                    <div className=' h-90 w-1/3 bg-slate-400'>
                        <p>some block with some interactions from this page</p>
                    </div>
             </div>
            
             <div className="flex flex-col w-full h-auto pt-20 pb-10">
                    <Image src="/Barter/Landing.png" 
                    alt="Barter" 
                    width={1280} 
                    height={720} 
                    className="h-full rounded-3xl" 
                    quality={100} />

                    <div className=' h-90 w-full bg-slate-400 mt-4'>
                        <p>some block with some interactions from this page</p>
                    </div>
            </div>


           

        </div>
        </div>

    );
}