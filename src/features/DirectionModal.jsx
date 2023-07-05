import { useDispatch } from 'react-redux';
import { openModal } from '../app/directionSlice';
import MapsBtn from './MapsBtn';

export default function DirectionModal() {
	let dispatch = useDispatch();

	return (
		<section className="modal-overlay center-content">
			<span
				className="material-symbols-outlined close-icon clickable"
				onClick={() => dispatch(openModal())}>
				close
			</span>

			<section className="radius animated-background center-content modal-content padding-2">
				<h1>Obter direcções</h1>
				<MapsBtn />
			</section>
		</section>
	);
}
