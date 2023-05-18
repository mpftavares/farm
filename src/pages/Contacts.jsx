import { useEffect } from 'react';
import Form from '../features/form/Form';
import Info from '../components/Info';
import Map from '../features/map/components/Map';
import Directions from '../components/Directions';
import WereOpen from '../features/wereopen/WereOpen';
import Call from '../components/Call';
import { isOpen } from '../features/wereopen/isOpen';

export default function Contacts() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Contactos';
	}, []);

	return (
		<>
			{isOpen ? (
				<>
					<WereOpen />
					<div className="dir-call">
						<Directions />
						<Call />
					</div>
				</>
			) : null}

			<Form />
			<Map />
		</>
	);
}
