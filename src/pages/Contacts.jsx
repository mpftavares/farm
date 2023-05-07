import { useEffect } from 'react';
import Form from '../components/Form';

export default function Contacts() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Contactos';
	});

	return (
		<div>
			<Form />
		</div>
	);
}
