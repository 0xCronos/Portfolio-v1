import { useContext } from 'react';
import BlurContext from '../../context/BlurContext';
import { useScroll } from '../../hooks/useScroll';
import { classes } from '../../styles';
import { Seo } from '../Seo';
import { Navbar } from '../Navbar';
import { SideBar } from '../SideBar';
import { Footer } from '../Footer';

export const Layout = ({ children, pageName }) => {
	const { scrolled } = useScroll();

	// controls popup window
	const { blur } = useContext(BlurContext);

	return (
		<>
			<Seo pageName={pageName} />
			<div className='max-h-full flex flex-col justify-center bg-ebony'>
				<div className={`${classes.blurEffect(blur)} z-50`}>
					<Navbar scrolled={scrolled} pageName={pageName}/>
					<SideBar scrolled={scrolled} />
				</div>
				<main className='min-h-screen ml-0 lg:ml-20 xl:ml-20 mt-32 flex-grow'>
					{children}
				</main>
				<div className={`${classes.blurEffect(blur)} ml-0 lg:ml-20 xl:ml-20`}>
					<Footer />
				</div>
			</div>
		</>
	);
};
