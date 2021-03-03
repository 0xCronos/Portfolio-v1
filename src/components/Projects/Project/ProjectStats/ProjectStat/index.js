export const ProjectStat = ({ children, amount }) => {
	return (
		<div className='bg-ebony border border-ebony-clay text-primary flex items-center rounded-sm p-1 mx-1'>
			<span className='text-sm mr-1'>{amount}</span>
			{children}
		</div>
	);
};
