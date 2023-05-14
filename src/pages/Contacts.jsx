import { useEffect } from 'react';
import Open from '../features/calltoaction/components/Open';
import Location from '../features/contacts/components/Location';
import Form from '../features/form/components/Form';

export default function Contacts() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Contactos';
	}, []);

	return (
		<>
			<Open />
			<Location />
			<Form />
		</>
	);
}
