import React, {useState} from 'react';
import PropTypes from 'prop-types';

//  styles
import 'tailwindcss/tailwind.css';
import '../styles/main.css';

// firebase
import firebase, { FirebaseContext } from '../../firebase';

import BlurContext from '../context/BlurContext';

const MyApp = ({ Component, pageProps }) => {

	// for blur window
	const [blur, setBlur] = useState(false);
	
	return (
		<FirebaseContext.Provider
			value={{
				firebase
			}}
		>
			<BlurContext.Provider
				value={{
					blur,
					setBlur
				}}
			>
				<Component {...pageProps} />
			</BlurContext.Provider>
		</FirebaseContext.Provider>
	);
};

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};

export default MyApp;
