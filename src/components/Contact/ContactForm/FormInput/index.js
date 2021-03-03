import { useState } from 'react'; 
import { classes } from '../../../../styles';

export const FormInput = ({label, htmlFor, setValue, ...rest}) => {
	const [error, setError] = useState(false);

	const validateInput = e => {
		const value = e.target.value;

		if(value.trim() === ''){
			setValue('');
			setError(true);
			return;
		}
		error && setError(false);

		setValue(value);
	}

	return (
		<div className='flex flex-col'>
			<label className='text-xl sm:text-3xl text-secondary' htmlFor={htmlFor} >
				{label}
			</label>
			<input
				className={`${classes.ebonyBox} w-36 md:w-80 text-sm sm:text-lg p-2 mt-2`}
				autoComplete='off'
				onChange={validateInput}
				{...rest}
			/>
			{
				error && <span className='text-sm sm:text-md text-yellow-500'>{`This field is required`}</span> 
			}
		</div>
	);
};
