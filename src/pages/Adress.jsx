import { useEffect } from 'react';
import Map from '../components/Map';

export default function Adress() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Localização';
	}, []);

	return (
		<div className="container map-container adress">
			<Map />
			<figure className="hide-tablet adress-img">
				<img
					src="../../public/images/pharmacy/DSC_0128.jpg"
					alt="pharmacy"
				/>
			</figure>
		</div>
	);
}
