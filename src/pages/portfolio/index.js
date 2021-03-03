import { Layout } from '../../components/Layout';
import { Projects } from '../../components/Projects';

const Portfolio = () => {
	return (
		<Layout pageName='Portfolio'>
			<div className='mb-10'>
				<Projects />
			</div>
		</Layout>
	);
};

export default Portfolio;
