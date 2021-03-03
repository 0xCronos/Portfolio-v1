import { useState, useEffect } from 'react'

export const useScroll = () => {

	const [scrolled, setScrolled] = useState(false)

	function onScroll() {
		window.scrollY > 10 ? setScrolled(true) : setScrolled(false);
	}

	useEffect( () => {
		document.addEventListener('scroll', onScroll);

		return () => {
			document.removeEventListener("scroll", onScroll);
		}
	});

	return { scrolled }
}
