import { useEffect } from 'react';
import { scrollToTop } from '../app/scrollToTop';
import SaleList from './SaleList';
import SalesBanner from './SalesBanner';

export default function Sales() {
	useEffect(() => {
		scrollToTop();
	}, []);

	useEffect(() => {
		document.title = 'Farmácia Patuleia | Promoções';
	}, []);
	return (
		<div className="flex-col">
			<h1 className="show-mobile mobile-title">Campanhas em vigor</h1>
			<SalesBanner />
			<SaleList />
		</div>
	);
}
