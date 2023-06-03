import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../app/saleSlice';

export default function SaleModal() {
	let dispatch = useDispatch();

	const { selectedSale } = useSelector((state) => state.sales);

	return (
		<section className="modal-overlay center-content">
			<span
				className="material-symbols-outlined close-icon clickable"
				onClick={() => dispatch(openModal())}>
				close
			</span>

				<img
				className='modal-img'
					src={`images/sales/${selectedSale}`}
					onClick={() => dispatch(openModal())}
				/>
		</section>
	);
}
