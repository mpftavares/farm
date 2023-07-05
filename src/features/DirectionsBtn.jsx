import { useDispatch } from 'react-redux';
import { openModal } from '../app/directionSlice';

export default function DirectionsBtn() {
	let dispatch = useDispatch();
	return (
		<button
			onClick={() => dispatch(openModal())}
			className="clickable directions-btn btn center-content">
			<span className="material-symbols-outlined">directions</span>Obter
			direcções
		</button>
	);
}
