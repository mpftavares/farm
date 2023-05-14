import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../saleSlice';

export default function SaleModal() {
	let dispatch = useDispatch();

	const { selectedSale } = useSelector((state) => state.sales);

	return (
		<section className="modal-overlay">
			<figure className="modal">
				<img
					src={`images/sales/${selectedSale}`}
					onClick={() => dispatch(openModal())}
				/>
			</figure>
		</section>
	);
}
