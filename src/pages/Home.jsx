import { useEffect } from 'react';
import { isOpen } from '../features/status/isOpen';
import HomeBanner from '../components/home/HomeBanner';
import Highlights from '../components/home/Highlights';
import OpenGrid from '../features/status/OpenGrid';

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
					<OpenGrid/>
				</>
			) : null}
			
		</>
	);
}