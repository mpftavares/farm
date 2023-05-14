import { useEffect } from 'react';
import CallToAction from '../features/calltoaction/components/CallToAction';
import Form from '../features/form/components/Form';
import Map from '../features/map/components/Map';

export default function Contacts() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Contactos';
	}, []);

	return (
		<>
			<CallToAction />
			<Form />
			<Map />
		</>
	);
}
