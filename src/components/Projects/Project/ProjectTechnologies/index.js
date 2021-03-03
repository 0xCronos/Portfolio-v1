import { classes } from '../../../../styles';

export const ProjectTechnologies = ({ technologies }) => {
	return (
		<div>
			<div className='px-2'>
				<h2 className='text-xl text-primary my-2 py-2'>Technologies involved</h2>
			</div>
			<div className='flex items-center rounded-b-sm px-2'>
				{technologies !== undefined &&
					technologies.map((technology, index) => (
						<div key={index} className={`${classes.ebonyBox} rounded-md p-1 mr-1`}>
							<h3 className='text-sm'>{technology}</h3>
						</div>
					))}
			</div>
		</div>
	);
};
