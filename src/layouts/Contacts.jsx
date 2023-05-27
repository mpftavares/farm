import { useEffect } from 'react';
import Map from '../components/maps/Map';
import Open from '../components/status/Open';
import { isOpen } from '../app/isOpen';
import DirectionsBtn from '../components/contacts/DirectionsBtn';
import Call from '../components/contacts/CallBtn';
import FormLayout from '../components/contacts/FormLayout';

export default function Contacts() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Contactos';
	}, []);

	const isPharmacyOpen = isOpen();

	return isPharmacyOpen ? (
		<div className="contacts-open-grid flex-col">
			<div className="flex-laptop">
				<div className="flex-col">
					<div className="flex-1">
						<Open />
					</div>
					<div className="contact-buttons">
						<Call />
						<DirectionsBtn />
					</div>
				</div>
				<Map />
			</div>
			<FormLayout />
		</div>
	) : (
		<div className="contacts-closed-grid flex-col">
			<FormLayout />
			<Map />
		</div>
	);
}
