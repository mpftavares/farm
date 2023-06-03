import { useEffect } from 'react';
import Map from '../features/Map';
import Open from '../features/Open';
import DirectionsBtn from '../features/DirectionsBtn';
import Call from '../features/CallBtn';
import FormLayout from '../features/FormLayout';
import { useSelector } from 'react-redux';
import { scrollToTop } from '../app/scrollToTop';

export default function Contacts() {
	useEffect(() => {
		scrollToTop();
	}, []);

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
