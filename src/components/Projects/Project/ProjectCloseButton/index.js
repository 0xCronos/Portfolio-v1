import { useContext } from 'react';
import { Close } from '@material-ui/icons/';
import BlurContext from '../../../../context/BlurContext';

export const ProjectCloseButton = ({ setSelected }) => {
	const { setBlur } = useContext(BlurContext);

	const handleClick = () => {
		setBlur(false);
		setSelected(false);
	}
	
	return (
		<div className='flex justify-end'>
			<Close 
				className='text-primary cursor-pointer' 
				fontSize='large'
				onClick={handleClick}
			/>
		</div>
	);
};
