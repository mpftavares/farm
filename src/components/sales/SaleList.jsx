import Sale from './Sale';
import useFetch from '../../utils/useFetch';

export default function SaleList() {
	const saleList = useFetch('http://localhost:3000/saleList');

	return (
		<section className="card-grid sales-grid">
			{saleList
				.filter((sale) => new Date(sale.expires) >= new Date())
				.map((sale, index) => (
					<Sale
						key={index}
						index={index}
						sale={sale}
					/>
				))}
		</section>
	);
}
