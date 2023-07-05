import { getDirections } from '../app/directions';

export default function MapsBtn() {
	return (
		<button
			onClick={getDirections}
			className="clickable directions-btn btn center-content">
			<p>
				<span className="material-symbols-outlined">directions</span>
				Abrir Maps
			</p>
		</button>
	);
}
