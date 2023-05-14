import { useDispatch } from 'react-redux';
import { openModal, setSelectedSale } from '../saleSlice';

export default function Sale({ sale, index }) {
	let { id, title, imageUrl, description } = sale;
	let dispatch = useDispatch();

	return (
		<section
			className={`container light-background padding card card-sales`}>
			<article className="description">{description}</article>
			<img
				src={`images/sales/${imageUrl}`}
				alt={title}
				onClick={() => {
					dispatch(setSelectedSale(id));
					dispatch(openModal());
				}}
			/>
		</section>
	);
}
