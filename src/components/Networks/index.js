import { GitHub, LinkedIn, Twitter } from '@material-ui/icons';
import { NetworkItem } from './NetworkItem';

export const Networks = ({ color, margin, padding }) => {
	const properties = { color, margin, padding };

	return (
		<>
			<NetworkItem properties={properties} href='https://github.com/0xcronos'>
				<GitHub />
			</NetworkItem>
			<NetworkItem properties={properties} href='https://www.linkedin.com/in/diegomu%C3%B1ozm/'>
				<LinkedIn />
			</NetworkItem>
			<NetworkItem properties={properties} href='https://twitter.com/'>
				<Twitter />
			</NetworkItem>
		</>
	);
};
