import { useEffect } from 'react';
import Map from '../features/map/components/Map';
import Open from '../features/status/Open';
import { isOpen } from '../features/status/isOpen';
import Directions from '../components/contacts/Directions';
import Call from '../components/contacts/Call';import Form from '../features/Form';

export default function Contacts() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Contactos';
	}, []);

	let isPharmacyOpen = isOpen();

	return (
		<>
			{isPharmacyOpen ? (
				<>
					<Open />
					<div className="dir-call">
						<Directions />
						<Call />
					</div>
				</>
			) : null}

			<Form />
			<Map />
		</>
	);
}
