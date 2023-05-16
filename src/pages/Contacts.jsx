import { useEffect } from 'react';
import Open from '../features/wereopen/Open';
import Form from '../features/form/Form';
import Info from '../components/Info';
import Map from '../features/map/components/Map';
import Directions from '../components/Directions';

export default function Contacts() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Contactos';
	}, []);

	return (
		<>
			<Open />
			<Info />
			<Map />
			<Directions />
			<Form />
		</>
	);
}
