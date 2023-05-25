import { getDirections } from "../../app/getDirections";

export default function StaticMap() {
	const apiKey = 'AIzaSyCxosBXe5qZ96cgCqV9966gIZ8Js0wQXhU';

	return (
		<section className="box static-map clickable" onClick={getDirections}>
			<img className="radius"
				src={`https://maps.googleapis.com/maps/api/staticmap?center=38.773439,-9.161105&zoom=14&scale=2&size=1200x250&markers=size:mid%7Ccolor:red%7Clabel:%7CFarm%C3%A1cia%20Patuleia&key=${apiKey}`}
			/>
		</section>
	);
}
