import styled, { css } from 'styled-components';
import { Home, Code, Mail } from '@material-ui/icons';
import { classes } from '../../styles';
import { NavItem } from './navitem';
import { Link, animateScroll } from 'react-scroll';

const Nav = styled.nav`
	transition: width ease 0.1s, margin ease 0.1s;
	${(props) =>
		props.scrolled &&
		css`
			// refactor !
			width: 100%;
			margin: 0px;
			border: none;
			border-bottom: 1px solid #26323f;
			padding-left: 80px;

			@media (max-width: 1024px) {
				// Refactor asap!!
				padding-left: 0;
			}
		`}
`;

export const Navbar = ({ scrolled, pageName }) => {

	const scrollTopTop = () => {
		if (process.browser) {
			animateScroll.scrollToTop();
		}
	}

	return (
		<Nav className={`${classes.stoneBox} w-64 p-1 fixed top-0 right-0 m-4 rounded-sm}`} scrolled={scrolled}>
			<div className='w-full h-16 flex justify-around items-center'>
				<NavItem path='/' onClick={scrollTopTop}>
					<div className='flex flex-col items-center justify-center'>
						<Home />
						<span className='text-sm'>Home</span>
					</div>
				</NavItem>
				<NavItem path='/portfolio'>
					<div className='flex flex-col items-center justify-center'>
						<Code />
						<span className='text-sm'>Portfolio</span>
					</div>
				</NavItem>
				{pageName !== 'Home' ? null : (
					<NavItem>
						<Link
							className='inline-block p-2 cursor-pointer'
							to='contact'
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
						>
							<div className='flex flex-col items-center justify-center'>
								<Mail />
								<span className='text-sm'>Contact</span>
							</div>
						</Link>
					</NavItem>
				)}
			</div>
		</Nav>
	);
};
