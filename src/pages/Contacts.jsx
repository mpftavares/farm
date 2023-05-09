import { useEffect } from 'react';
import Form from '../features/form/components/Form';

export default function Contacts() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Contactos';
	}, []);

	return (
		<div className="container contacts">
			<figure className="hide-tablet contacts-img">
				<img
					src="../../images/pharmacy/inside-left.jpg"
					alt="pharmacy"
				/>
			</figure>
			<Form />
		</div>
	);
}
