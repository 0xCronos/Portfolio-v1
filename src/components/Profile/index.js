import { classes } from '../../styles';
import { Avatar } from '../Avatar';

export const Profile = ({ name, ocupation, description }) => {
	return (
		<div className={`${classes.stoneBox} p-8 text-center`}>
			<div className='flex justify-center'>
				<Avatar />
			</div>
			<h1 className={`${classes.title}`}>
				Hi, I'm {name},
			</h1 >
			<h2 className={`${classes.subtitle}`}>
				{ocupation}.
			</h2>
			<h3 className={`${classes.subsubtitle}`}>
				{description}
			</h3>
		</div>
	);
};
