import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Map from '../components/Map';

export default function Home() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Home';
	});

	return (
		<>
			<Link to="/adress">
				<div className="container map-container no-padding">
					<Map />
				</div>
			</Link>
		</>
	);
}
