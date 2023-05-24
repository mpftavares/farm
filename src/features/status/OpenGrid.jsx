import { Link } from 'react-router-dom';
import Call from '../../components/contacts/Call';
import Directions from '../../components/contacts/Directions';
import StaticMap from '../map/components/StaticMap';
import Open from './Open';

export default function OpenGrid() {
	return (
		<section className="open-grid margin-bottom">
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
				<Directions />
			</div>
		</section>
	);
}
