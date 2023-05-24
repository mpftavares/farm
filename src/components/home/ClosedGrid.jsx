import { Link } from 'react-router-dom';
import Highlights from './Highlights';
import Form from '../contacts/Form';
import StaticMap from '../maps/StaticMap';
import { getDirections } from '../../app/getDirections';

export default function ClosedGrid() {
	return (
		<section className="closed-home-grid margin-bottom">
			<Highlights />
			<article className="box padding light-background span-2r">
				<Form />
			</article>

			<div onClick={getDirections} className="clickable">
				<StaticMap />
			</div>
		</section>
	);
}
