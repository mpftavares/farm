import { Link } from 'react-router-dom';
import Highlights from '../../components/home/Highlights';
import Form from '../Form';
import StaticMap from '../map/components/StaticMap';

export default function ClosedGrid() {
	return (
		<section className="closed-grid margin-bottom">
			<Highlights />
			<article className="box padding light-background span-2r">
				<Form />
			</article>
			<Link to="/contacts">
				<StaticMap />
			</Link>
		</section>
	);
}
