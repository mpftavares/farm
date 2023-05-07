import { useEffect } from 'react';
import Map from '../components/Map';

export default function Adress() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Localização';
	});

	return (
		<div className="map">
			<Map />
		</div>
	);
}
