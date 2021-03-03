import Link from 'next/link';

export const Brand = ({ width, alt }) => {
	return (
		<div>
			<Link href='/' passHref>
				<img className='cursor-pointer' src='./assets/logo.png' alt={alt} width={width} />
			</Link>
		</div>
	);
};
