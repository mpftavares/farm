import { useDispatch } from 'react-redux';
import { openModal, setSelectedSale } from './saleSlice';

export default function Sale({ sale, index }) {
	let { id, title, imageUrl, description } = sale;
	let dispatch = useDispatch();

	return (
		<article className={`box light-background padding sale-card`}>
			<p className="description">{description}</p>
			<figure className="card-img">
				<img
					src={`images/sales/${imageUrl}`}
					alt={title}
					onClick={() => {
						dispatch(setSelectedSale(id));
						dispatch(openModal());
					}}
				/>
			</figure>
		</article>
	);
}
