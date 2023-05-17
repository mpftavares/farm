import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import StaticMap from '../features/map/components/StaticMap';
import Open from '../features/wereopen/Open';
import HomeBanner from '../components/HomeBanner';
import Highlights from '../features/Highlights';

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
			<Highlights/>
			<Link to="/contacts">
				<StaticMap />
			</Link>
		</>
	);
}
