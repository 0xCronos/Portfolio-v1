import styled, { css } from 'styled-components';
import { classes } from '../../styles';
import { Brand } from '../Brand';
import { Networks } from '../Networks';

const Aside = styled.aside`
	transition: padding-top ease 0.2s;

	${(props) =>
		props.scrolled && css`
			padding-top: 80px;
		`}
`;

export const SideBar = ({ scrolled }) => {
	return (
		<Aside className={`hidden ${classes.stoneRightBox} lg:flex flex-col fixed top-0 left-0 w-20 h-full px-4 py-8`} scrolled={scrolled}>
			<div className='flex-grow m-auto'>
				<Brand width='38px' alt='Sidebar brand' />
			</div>
			<div className='mx-auto'>
				<Networks color='text-aquamarine' />
			</div>
		</Aside>
	);
};
