import Image from 'next/image';

export default function BarterBlock() {

    const getRandomRotation = () => {
        return Math.floor(Math.random() * 10) - 4; // Generate a random number between -4 and 4
    };
    
    return (
        <div className="flex flex-col items-center pl-60 pr-60">
        <div className="flex flex-col w-full items-center">

            <div className="flex flex-col items-center">
                <div className="flex w-full content-between items-center space-x-4">
                    <p>2017</p>
                    <div className="flex-1 w-auto h-1 bg-black"></div>
                    <p>2020</p>
                </div>
                <h1 className="">Yango</h1>
                <h3>Biggest Taxi and delivery service in Russia</h3>
            </div>

                            {/* onboarding block */}
                            <div className="flex justify-between w-full pt-10 pb-10 place-content-center">
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${getRandomRotation()}deg)` }}
                    >
                    <Image
                        src="/Agon/Onboarding01.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                        quality={100}
                    />
                    </div>
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${getRandomRotation()}deg)`, marginTop: '80px' }}
                    >
                    <Image
                        src="/Agon/Onboarding02.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                        quality={100}
                    />
                    </div>
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${getRandomRotation()}deg)`}}
                    >
                    <Image
                        src="/Agon/Onboarding04.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                        quality={100}
                    />
                    </div>
                </div>
        </div>
        </div>
    );
}