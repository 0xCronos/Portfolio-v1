import { classes } from '../../styles';

export const Avatar = ({ width, height }) => {
	return (
		<div
			className={`${classes.transition} ${classes.avatar} w-48 h-48 sm:w-64 sm:h-64`}
		/>
	);
};