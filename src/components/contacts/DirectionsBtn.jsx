import {getDirections} from '../../app/getDirections';

export default function DirectionsBtn() {
	return (
		<button
			onClick={getDirections}
			className="clickable directions-btn btn">
			<span className="material-symbols-outlined">directions</span>Obter
			direcções
		</button>
	);
}
