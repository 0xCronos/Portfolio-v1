export const Aptitude = ({ img, description }) => {
	return (
		<div className='flex p-4 items-center'>
			<img 
				className='w-12 h-12 xl:w-16 xl:h-16 bg-aquamarine rounded-full' 
				src={img}
				alt='Aptitude avatar'
			/>
			<h2 className='text-sm sm:text-lg text-primary ml-4'>{description}</h2>
		</div>
	);
};