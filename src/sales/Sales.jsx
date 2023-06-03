import { useEffect } from 'react';
import SaleList from './SaleList';
import SalesBanner from './SalesBanner';

export default function Sales() {
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
