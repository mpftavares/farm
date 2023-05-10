import { useEffect } from 'react';
import SaleList from '../features/sales/components/saleList';

export default function Sales() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Promoções';
	}, []);
	return (
	<section className='container padding'><SaleList/></section>
		);
}
