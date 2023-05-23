import { useEffect } from 'react';
import { isOpen } from '../features/status/isOpen';
import HomeBanner from '../components/home/HomeBanner';
import Highlights from '../components/home/Highlights';
import OpenGrid from '../features/status/OpenGrid';
import StaticMap from '../features/map/components/StaticMap';
import { Link } from 'react-router-dom';

export default function Home() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Home';
	}, []);

	let isPharmacyOpen = isOpen();

	return (
		<>
			<HomeBanner />
			<Highlights />
			{isPharmacyOpen ? (
				<>
					<OpenGrid />
				</>
			) : (
				<Link to="/contacts">
					<StaticMap />
				</Link>
			)}
		</>
	);
}
