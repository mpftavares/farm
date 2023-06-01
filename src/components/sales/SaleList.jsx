import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSales } from '../../app/saleSlice';
import Sale from './Sale';

export default function SaleList() {
	let dispatch = useDispatch();
	let { loading, sales } = useSelector((state) => state.sales);

	useEffect(() => {
		dispatch(getSales());
	}, [dispatch]);

	if (loading) {
		return <h2>Loading...</h2>;
	}

	return (
		<section className="card-grid sales-grid">
			{sales
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
