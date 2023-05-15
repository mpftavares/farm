import Map from '../features/map/components/Map';
import Contacts from './Contacts';

export default function Location() {
	return (
		<p>
			<div className="container location">
				<Contacts />
				<section className="hide-mobile">
					<Map />
				</section>
			</div>
			<section className="container show-mobile">
				<Map />
			</section>
		</p>
	);
}
