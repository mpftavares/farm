import { useEffect } from 'react';
import Map from '../components/maps/Map';
import Open from '../components/status/Open';
import DirectionsBtn from '../components/contacts/DirectionsBtn';
import Call from '../components/contacts/CallBtn';
import FormLayout from '../components/contacts/FormLayout';
import { useSelector } from 'react-redux';

export default function Contacts() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Contactos';
	}, []);

	const isPharmacyOpen = useSelector((state) => state.status.isOpen);

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
