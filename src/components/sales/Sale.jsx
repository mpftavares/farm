import { useDispatch } from 'react-redux';
import { openModal, setSelectedSale } from '../../app/saleSlice';

export default function Sale({ sale }) {
	let { id, imageUrl, description, expires } = sale;
	let dispatch = useDispatch();

	return (
		<article className={`box light-background sale-card padding-2`}>
			<div className='description'>
				<p>{description}</p>
				<p className="expires">Válido até {expires}</p>
			</div>
			<figure className="card-img center-content radius">
				<img
					className="radius"
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
