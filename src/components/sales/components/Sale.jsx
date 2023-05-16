import { useDispatch } from 'react-redux';
import { openModal, setSelectedSale } from '../saleSlice';

export default function Sale({ sale, index }) {
	let { id, title, imageUrl, description } = sale;
	let dispatch = useDispatch();

	return (
		<article className={`container light-background padding sale-card`}>
			<p className="description">{description}</p>
			<img
				src={`images/sales/${imageUrl}`}
				alt={title}
				onClick={() => {
					dispatch(setSelectedSale(id));
					dispatch(openModal());
				}}
			/>
		</article>
	);
}
