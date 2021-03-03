import { Aptitude } from './Aptitude';
import { classes} from '../../styles';

const AptitudesList = [
	{
		key: 0,
		img: 'assets/icons/passion.svg',
		description: 'Every project I do is developed with passion, love and effort.',
	},
	{
		key: 1,
		img: 'assets/icons/learn.svg',
		description: 'Always learning about new technologies and others topics.',
	},
	{
		key: 2,
		img: 'assets/icons/focus.svg',
		description: 'Focused, organized and always engagement with the cause.',
	},
];

export const Aptitudes = () => {
	return (
		<div className={`${classes.flexWrapCenter}`}>
			{AptitudesList.map((apt) => 
				<Aptitude
					key={apt.key} 
					img={apt.img} 
					description={apt.description}
				/>
			)}
		</div>
	);
};
