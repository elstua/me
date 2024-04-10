import React from 'react';

interface ProjectHeaderProps {
    name: string;
    startDate: number;
    endDate: number;
    description: string;
    link: string;
    linkText: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ name, startDate, endDate, description, link, linkText }) => {
    return (
        <div className='pt-32 pb-10 font-mono w-full text-sm text-neutral-900'>
            <div className='flex flex-wrap flex-row justify-between items-center gap-2 pb-2'>
            <h1>{name}</h1>
            <line className='flex-1 bg-neutral-700 h-px'></line>
            <p>{`${startDate} → ${endDate}`}</p>
            </div>
            <p className='pb-2 opacity-50'>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className='pt-8 text-sm font-mono hover:underline'>{linkText} ↗︎</a>
        </div>
    );
};

export default ProjectHeader;