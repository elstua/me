import React from 'react';

interface ProjectHeaderProps {
    name: string;
    startDate: number;
    endDate: number;
    description: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ name, startDate, endDate, description }) => {
    return (
        <div className='pt-24 font-mono w-full text-sm'>
            <div className='flex flex-wrap flex-row justify-between items-center gap-2'>
            <h1>{name}</h1>
            <line className='flex-1 bg-slate-500 h-px'></line>
            <p>{`${startDate} → ${endDate}`}</p>
            </div>
            
            <p className='pt-4'>{description}</p>
        </div>
    );
};

export default ProjectHeader;