import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSales } from './saleSlice';
import Sale from './Sale';

export default function SaleList() {
	const { saleList } = useSelector((state) => state.sales);

	let dispatch = useDispatch();

	useEffect(() => {
		fetch('http://localhost:3000/saleList')
			.then((resp) => resp.json())
			.then((data) => dispatch(getSales(data)))
			.catch((err) => console.log('Error: ', err));
	}, []);

	return (
		<>
			<section className="card-grid margin-bottom">
				{saleList.map((s, i) => (
					<Sale
						key={i}
						index={i}
						sale={s}
					/>
				))}
			</section>
		</>
	);
}
