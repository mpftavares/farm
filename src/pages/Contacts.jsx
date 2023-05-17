import { useEffect } from 'react';
import Form from '../features/form/Form';
import Info from '../components/Info';
import Map from '../features/map/components/Map';
import Directions from '../components/Directions';
import WereOpen from '../features/wereopen/WereOpen';

export default function Contacts() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Contactos';
	}, []);

	return (
		<>
			<WereOpen />
			<Info />
			<Map />
			<Directions />
			<Form />
		</>
	);
}
