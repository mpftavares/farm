import { useEffect } from 'react';
import SaleList from '../features/sales/components/saleList';
import SalesBanner from '../features/sales/components/SalesBanner';

export default function Sales() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Promoções';
	}, []);
	return (
		<>
			<SalesBanner />
			<SaleList />
		</>
	);
}
