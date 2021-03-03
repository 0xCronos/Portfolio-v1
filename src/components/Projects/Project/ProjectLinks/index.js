import { GitHub, Language } from '@material-ui/icons';

export const ProjectLinks = ({github, website}) => {
	return (
		<div className='p-2'>
			<div className='flex justify-between text-tertiary pt-2'>
				<a className='mr-2 items-center cursor-pointer' href={github} target='_blank' rel='noopener'>
					<GitHub className='mr-2'/>
					<span>Check the repository</span>
				</a>
				<a className={website ? 'cursor-pointer' : 'line-through'} href={website} target='_blank' rel='noopener'>
					<Language className='mr-2'/>
					<span>Check the website</span>
				</a>
			</div>
		</div>
	);
};
