import { classes } from '../../../styles';
import { ProjectCloseButton } from '../Project/ProjectCloseButton';
import { ProjectStats } from '../Project/ProjectStats';
import { ProjectAbout } from '../Project/ProjectAbout';
import { ProjectTechnologies } from '../Project/ProjectTechnologies';
import { ProjectLinks } from '../Project/ProjectLinks';

const { stoneBox, transition } = classes;

export const ExpandedProject = ({ project, selected, setSelected }) => {
	const { img, description, technologies, github, website } = project;

	return (
		<div className={`${transition} fixed z-10 ${selected ? 'visible opacity-100' : 'invisible opacity-0'}`}>
			<ProjectCloseButton setSelected={setSelected} />
			<div className={`${stoneBox} max-w-xl pb-2`}>
				<ProjectStats project={project} otherClassNames='text-3xl' />
				<img src={img} />
				<ProjectAbout description={description} />
				<ProjectTechnologies technologies={technologies} />
				<ProjectLinks github={github} website={website} />
			</div>
		</div>
	);
};
