import { useDispatch } from 'react-redux';
import { openModal, setSelectedSale } from '../../app/saleSlice';

export default function Sale({sale}) {
	let { id, title, imageUrl, description } = sale;
	let dispatch = useDispatch();

	return (
		<article className={`box light-background sale-card padding-2`}>
			<p className="description">{description}</p>
			<figure className="card-img center-content">
				<img
					src={`images/sales/${imageUrl}`}
					onClick={() => {
						dispatch(setSelectedSale(id));
						dispatch(openModal());
					}}
				/>
			</figure>
		</article>
	);
}
