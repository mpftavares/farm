import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

// https://react-google-maps-api-docs.netlify.app/

export default function Map() {
	const apiKey = 'AIzaSyCxosBXe5qZ96cgCqV9966gIZ8Js0wQXhU';

	const responsive = {
		width: '100%',
		height: '100%',
	};

	const position = {
		lat: 38.77343753166,
		lng: -9.161105400048587,
	};

	const { isLoaded, loadError } = useLoadScript({
		googleMapsApiKey: apiKey,
	});

	if (loadError) {
		return <span>Error loading Google Maps API</span>;
	}

	return (
		<section className="box contact-map">
			{isLoaded && (
				<GoogleMap
					mapContainerStyle={responsive}
					center={position}
					zoom={19}>
					<Marker position={position} />
				</GoogleMap>
			)}
		</section>
	);
}
