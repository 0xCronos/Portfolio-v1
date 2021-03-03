import { animateScroll } from 'react-scroll';

export const Brand = ({ width, alt }) => {
	return (
		<div>
			<img 
				className='cursor-pointer' 
				src='./assets/logo.png' 
				alt={alt} 
				width={width} 
				onClick={() => animateScroll.scrollToTop()}
			/>
		</div>
	);
};
