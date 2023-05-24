import { useEffect } from 'react';
import Map from '../components/maps/Map';
import Open from '../components/status/Open';
import { isOpen } from '../app/isOpen';
import DirectionsBtn from '../components/contacts/DirectionsBtn';
import Call from '../components/contacts/CallBtn';
import Form from '../components/contacts/Form';

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
						<DirectionsBtn />
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
			<div className="margin-bottom">
				<Map />
			</div>
		</>
	);
}
