import { classes } from '../../../styles';
import { Search } from '@material-ui/icons';

export const ProjectSearch = ({projects, setProjects}) => {
	const handleChange = (e) => {
        const search = e.target.value.toLowerCase().trim();

        if(search === ''){
            setProjects(projects);
            return;
        }

        const results = projects.filter( p => {
            const keywords = `${p.title} ${p.description} ${p.technologies.join(' ')}`;            
            return keywords.toLowerCase().includes(search) && p;
        })

        setProjects(results);
    };

	return (
		<div className={`${classes.ebonyBox} max-w-xs flex flex-row items-center`}>
			<Search className='ml-2'/>
			<input
				className={`w-full bg-transparent outline-none p-2`}
				type='text'
				placeholder='Type something...'
				onChange={handleChange}
			/>
		</div>
	);
};