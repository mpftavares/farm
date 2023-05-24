import { useEffect } from 'react';
import { isOpen } from '../features/status/isOpen';
import HomeBanner from '../components/home/HomeBanner';
import Highlights from '../components/home/Highlights';
import OpenGrid from '../features/status/OpenGrid';
import ClosedGrid from '../features/status/ClosedGrid';

export default function Home() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Home';
	}, []);

	let isPharmacyOpen = isOpen();

	return (
		<>
			<div className='hide-mobile'><HomeBanner /></div>
			{isPharmacyOpen ? (
				<>
					<div className='margin-bottom'><Highlights /></div>
					<OpenGrid />
				</>
			) : (
				<ClosedGrid/>
			)}
		</>
	);
}
