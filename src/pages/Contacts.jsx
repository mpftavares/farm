import { useEffect } from 'react';
import Open from '../features/wereopen/Open';
import Location from '../components/Location';
import Form from '../features/form/Form';

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
