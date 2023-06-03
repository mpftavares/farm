import { getDirections } from '../app/directions';

export default function DirectionsBtn() {
	return (
		<button
			onClick={getDirections}
			className="clickable directions-btn btn center-content">
			<span className="material-symbols-outlined">directions</span>Obter
			direcções
		</button>
	);
}
