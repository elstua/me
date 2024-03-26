import Image from 'next/image';

export default function ThirtyBirdsBlock() {
    return (
        <div className="flex flex-col items-center p-60">
        <div className="flex flex-col w-full items-center">

            <div className="flex flex-col items-center">
                <div className="flex w-full content-between items-center space-x-4">
                    <p>2023</p>
                    <div className="flex-1 w-auto h-1 bg-black"></div>
                    <p>2023</p>
                </div>
                <h1 className="">30 Birds</h1>
                <h3>Transform 360 review with constant feedback</h3>
            </div>

            <div className="flex w-full h-auto pt-20 pb-10">
                    <Image src="/30Birds/Cabinet.png" 
                    alt="30Birds" 
                    width={1280} 
                    height={720} 
                    className="h-full rounded-3xl" 
                    quality={100} />
            </div>

             <div className="flex w-2/3 h-auto pt-10 pb-10">
                <div className='w-full'>
                <p>
                HRtech, recognition & meritocracy SaaS that transform 360 review process with consist feedback in form of a praise. I searched and execute from the ground main product scenarios with three co-founders as a designer. 
                Design interfaces and create design-language with a founding designer. Developed first version of landing on framer to start clients outreach.
                Unfortunately we found out that its hard to get a right retention to achieve the desired result and decided to pivot into other project</p> 
                </div>
             </div>

             <div className="flex flex-row w-full h-auto pt-10 pb-10 gap-2">
                    <Image src="/30Birds/Slack.png" 
                    alt="30Birds" 
                    width={1280} 
                    height={720} 
                    className="w-1/3 rounded-3xl" 
                    quality={100} />
                
                    <Image src="/30Birds/OpenBird.png" 
                    alt="30Birds" 
                    width={1280} 
                    height={720} 
                    className="w-2/3 rounded-3xl" 
                    quality={100} />
             </div>

             <div className="flex w-full h-auto pt-10 pb-10 gap-8">
                    <Image src="/30Birds/TeamView.png" 
                    alt="30Birds" 
                    width={1280} 
                    height={720} 
                    className="w-2/3 flex-1 rounded-3xl" 
                    quality={100} />
                
                    <div className='flex-1 h-90 w-full bg-slate-400'>
                        <p>some block with some interactions from this page</p>
                    </div>
             </div>

             <div className="flex flex-row-reverse w-full h-auto pt-10 pb-10 gap-8">
                    {/* <div className='h-80 w-full bg-slate-900'><p>main screen of 30birds</p> </div> */}
                    <Image src="/30Birds/CompanyView.png" 
                    alt="30Birds" 
                    width={1280} 
                    height={720} 
                    className="w-2/3 flex-1 rounded-3xl" 
                    quality={100} />
                
                    <div className='flex-1 h-90 w-full bg-slate-400'>
                        <p>We build a gamification for people to show new faces in companies and get to understand who is who</p>
                        <p>Add there images with awards and little</p>
                    </div>
             </div>

             <div className="flex w-full h-auto pt-10 pb-10">
                    <Image src="/30Birds/SkillSearch.png" 
                    alt="30Birds" 
                    width={1280} 
                    height={720} 
                    className="h-full rounded-3xl" 
                    quality={100} />
            </div>

            <div className="flex w-full h-auto pt-10 pb-10">
                    <div className='h-80 w-full bg-slate-500'><p>Awards and other graphic</p> </div>
            </div>

        </div>
        </div>
    );
}