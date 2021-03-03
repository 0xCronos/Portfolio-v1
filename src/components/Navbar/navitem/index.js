import styled from 'styled-components';
import Link from 'next/link';

const IconWrapper = styled.div`
	&:hover {
		border-top: 1px solid #66ffff;
		border-bottom: 1px solid #66ffff;
		transition: border-width 0.2s linear;
	}
`;

export const NavItem = ({ children, path, ...rest }) => {
	return (
		<IconWrapper className='flex m-4 text-primary' {...rest}>
			{path ? (
				<Link href={path} passHref>
					<a className='inline-block p-2 cursor-pointer'>{children}</a>
				</Link>
			) : (
				<span>{children}</span>
			)}
		</IconWrapper>
	);
};
