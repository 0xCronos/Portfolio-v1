import { classes } from '../../../../styles';

export const ProjectAbout = ({description}) => {
	return (
		<div className='px-2'>
			<h2 className='text-xl text-primary my-2 py-2'>About the project</h2>
			<p className={`${classes.ebonyBoxTertiary} text-sm px-4 py-6`}>
				{description}
			</p>
		</div>
	);
};
