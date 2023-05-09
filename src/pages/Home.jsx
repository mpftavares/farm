import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import StaticMap from '../features/map/components/StaticMap';


export default function Home() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Home';
	}, []);

	return (
		<>
			<Link to="/adress">
				<div className="container">
					<StaticMap />
				</div>
			</Link>
		</>
	);
}
