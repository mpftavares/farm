import { useEffect } from 'react';
import SaleList from '../components/sales/SaleList';
import SalesBanner from '../components/sales/SalesBanner';



export default function Sales() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Promoções';
	}, []);
	return (
		<div className='flex-column'>
			<h1 className="show-mobile mobile-title">Campanhas em vigor</h1>
			<SalesBanner />
			<SaleList />
		</div>
	);
}
