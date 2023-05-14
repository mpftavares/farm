import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeBanner from '../features/home/HomeBanner';
import StaticMap from '../features/map/components/StaticMap';
import Open from '../features/calltoaction/components/Open';

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
