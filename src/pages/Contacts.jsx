import { useEffect } from 'react';
import Map from '../features/map/components/Map';
import Open from '../features/status/Open';
import { isOpen } from '../features/status/isOpen';
import Directions from '../components/contacts/Directions';
import Call from '../components/contacts/Call';
import Form from '../features/Form';
import Info from '../components/contacts/Info';

export default function Contacts() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Contactos';
	}, []);

	let isPharmacyOpen = isOpen();

	return (
		<>
			{isPharmacyOpen ? (
				<>
					<div className="margin-bottom">
						<Open />
					</div>

					<div className="contact-buttons margin-bottom">
						<Call />
						<Directions />
						
					</div>
					<div className="margin-bottom info-map">
						<Info />
						<Map />
					</div>
				</>
			) : null}

			<section className="box light-background padding margin-bottom contact-form">
				<figure className="show-laptop contact-form-img">
					<img
						className="radius"
						src="../../images/pharmacy/inside-left.jpg"
						alt="pharmacy"
					/>
				</figure>
				<Form />
			</section>

			{isPharmacyOpen ? null : <Map />}
		</>
	);
}
