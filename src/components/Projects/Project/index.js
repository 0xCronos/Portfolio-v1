import { useState } from 'react';
import { ProjectBar } from './ProjectBar';
import { ProjectStats } from './ProjectStats';

export const Project = ({ project, setSelected, setCurrentProject }) => {
    const [visibleBar, setVisibleBar] = useState(false);
    
    const showProjectBar = () => setVisibleBar(true);
    const hideProjectBar = () => setVisibleBar(false);

	return (
		<div onMouseEnter={showProjectBar} onMouseLeave={hideProjectBar} >
            <ProjectBar 
                visible={visibleBar}
                project={project}
                setSelected={setSelected}
                setCurrentProject={setCurrentProject}
            />
            <img 
                className='object-fill rounded-t-sm' 
                src={project.img} 
                alt={project.title}
            />
			<ProjectStats
                project={project}
                otherClassNames='bg-stone border border-ebony-clay rounded-b-sm'
            />
		</div>
	);
};
