import { useEffect } from 'react';
import Form from '../components/Form';

export default function Contacts() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Contactos';
	}, []);

	return (
		<div className="container contacts">
			<figure className="hide-tablet contacts-img">
				<img
					src="../../public/images/pharmacy/inside-left.jpg"
					alt="pharmacy"
				/>
			</figure>
			<Form />
		</div>
	);
}
