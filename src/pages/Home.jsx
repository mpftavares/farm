import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import StaticMap from '../features/map/components/StaticMap';
import Open from '../features/wereopen/Open';
import HomeBanner from '../components/HomeBanner';

export default function Home() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Home';
	}, []);

	return (
		<>
			<Link to="/contacts">
				<Open />
			</Link>
			<HomeBanner />
			<Link to="/contacts">
				<StaticMap />
			</Link>
		</>
	);
}
