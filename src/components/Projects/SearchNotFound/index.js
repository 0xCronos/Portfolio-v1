export const SearchNotFound = () => {
	return (
		<div className='flex flex-col items-center'>
			<h2 className='text-4xl text-primary p-10'>Oops! There are no results to display for this search...</h2>
			<p className='max-w-xl text-tertiary text-center'>
				HINT:
				
				<br />
				Try with other keywords like frameworks, technologies or programming languages.
			</p>
		</div>
	);
};
