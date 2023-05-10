import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeBanner from '../features/banners/HomeBanner';
import StaticMap from '../features/map/components/StaticMap';

export default function Home() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Home';
	}, []);

	return (
		<>
			<HomeBanner />
			<Link to="/adress">
				<div className="container">
					<StaticMap />
				</div>
			</Link>
		</>
	);
}
