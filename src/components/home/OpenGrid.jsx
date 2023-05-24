import { Link } from 'react-router-dom';
import Call from '../contacts/CallBtn';
import DirectionsBtn from '../contacts/DirectionsBtn';
import StaticMap from '../maps/StaticMap';
import Open from '../status/Open';

export default function OpenGrid() {
	return (
		<section className="open-home-grid margin-bottom">
			<div className="span-2c">
				<Open />
			</div>
			<div className="span-2r">
				<Link to="/contacts">
					<StaticMap />
				</Link>
			</div>
			<div className="contact-buttons span-2c">
				<Call />
				<DirectionsBtn />
			</div>
		</section>
	);
}
