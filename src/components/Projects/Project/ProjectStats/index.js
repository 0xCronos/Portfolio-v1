import { Favorite, Visibility } from '@material-ui/icons/';

import { ProjectStat } from './ProjectStat';

export const ProjectStats = ({project, otherClassNames}) => {
	const {title, likes, views} = project;

	return (
		<div className={`flex items-center p-2 ${otherClassNames}`}>
			<h2 className={`text-aquamarine inline-block flex-grow`}>{title}</h2>
            {/* 
			descomentar y modificar una vez que se decida usar likes
			<ProjectStat amount={likes}>
				<Favorite className='text-primary' fontSize='small' />
            </ProjectStat> */}
            <ProjectStat amount={views}>
				<Visibility className='text-primary' fontSize='small' />
            </ProjectStat>
		</div>
	);
};
