import { useEffect } from 'react';
import Map from '../features/map/components/Map';

export default function Adress() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Localização';
	}, []);

	return (
		<div className="container map-container adress">
			<Map />
			<figure className="hide-tablet adress-img">
				<img
					src="../../images/pharmacy/outside.jpg"
					alt="pharmacy"
				/>
			</figure>
		</div>
	);
}
