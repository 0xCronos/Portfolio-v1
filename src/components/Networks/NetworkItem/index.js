export const NetworkItem = ({ children, href, properties }) => {
	const { color, margin, padding } = properties;
	return (
		<div className='pt-6'>
			<a href={href} target='_blank' rel='noopener' 
				className={`${color} ${margin} ${padding}`}
			>
				{children}
			</a>
		</div>
	);
};
