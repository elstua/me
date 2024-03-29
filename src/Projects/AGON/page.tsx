import React from "react";


export default function AgonBlock() {
    const getRandomRotation = () => {
        return Math.floor(Math.random() * 10) - 4; // Generate a random number between -4 and 4
    };

    return (
        <div id="agon" className="flex flex-col items-center w-full">
            <div className="content-width flex flex-col items-center justify-between">

                <div className="flex flex-col items-center">
                    <div className="flex w-full content-between items-center space-x-4 font-mono text-sm">
                        <p>2023</p>
                        <div className="flex-1 w-auto h-1 bg-black"></div>
                        <p>2024</p>
                    </div>
                    <h1 className="">AGON</h1>
                    <h3>Fitness-challenges app with AI trainer</h3>
                </div>

                <div className="flex justify-between w-full h-auto pt-20 pb-10">
                    <div 
                    className='h-full phone-block'
                    style={{ transform: `rotate(${getRandomRotation()}deg)` }} >
                    <img
                        src="./Agon/MainScreen.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                    />
                </div>

                <div className='flex-1 p-12 font-mono text-sm'>
                    <p>There is a text about what agon is. How we move to it, what i've done and what's the language behind it.</p>
                </div>

                <div 
                    className='h-full phone-block'
                    style={{ transform: `rotate(${getRandomRotation()}deg)`, marginTop: '80px' }} >
                    <img
                        src="/Agon/SuccessScreen.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                    />
                </div>
                </div>


                <div className="flex justify-between flex-wrap content-center w-full pt-20 pb-10 gap-24">
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${getRandomRotation()}deg)`}}
                    >
                    <img
                        src="/Agon/Challenge.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                    />
                    </div>
                    <div className='flex-1 h-90 w-full bg-slate-400'>
                        <p>some block with challenge imgs</p>
                    {/* <img src="/Agon/CardEasy.png" alt="Agon" width={240} height={640} className="h-full screen-block challengescard " />
                    <img src="/Agon/CardMedium.png" alt="Agon" width={240} height={640} className="h-full screen-block " />
                    <img src="/Agon/CardHard.png" alt="Agon" width={240} height={640} className="h-full screen-block " /> */}
                    </div>
                </div>


                <div className="flex justify-between w-full pt-10 pb-10 place-content-center">
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${getRandomRotation()}deg)` }}
                    >
                    <img
                        src="/Agon/CoinsBuy.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                    />
                    </div>
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${getRandomRotation()}deg)`, marginTop: '80px' }}
                    >
                    <img
                        src="/Agon/CoinsBuy.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                    />
                    </div>
                </div>

                {/* onboarding block */}
                <div className="flex justify-between w-full pt-10 pb-10 place-content-center">
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${getRandomRotation()}deg)` }}
                    >
                    <img
                        src="/Agon/Onboarding01.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                    />
                    </div>
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${getRandomRotation()}deg)`, marginTop: '80px' }}
                    >
                    <img
                        src="/Agon/Onboarding02.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                    />
                    </div>
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${getRandomRotation()}deg)`}}
                    >
                    <img
                        src="/Agon/Onboarding04.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                    />
                    </div>
                </div>

                {/* Marketing block */}
                <div className='flex flex-row w-full gap-3'>
                    <div className='flex-1 bg-slate-400'>
                        <p>There are a lot of marketing materials, from app store screens to first advertisement in</p>
                    </div>
                    <div className='w-2/3 h-72 bg-slate-400'>
                        <p>marketing imgs and language</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
