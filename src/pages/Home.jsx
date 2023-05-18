import { useEffect } from 'react';

import HomeBanner from '../components/HomeBanner';
import Highlights from '../features/Highlights';
import { isOpen } from '../features/wereopen/isOpen';
import OpenGrid from '../components/OpenGrid';

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
