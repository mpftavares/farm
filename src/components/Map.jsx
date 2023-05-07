import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// https://react-google-maps-api-docs.netlify.app/

export default function Map() {

  const apiKey = 'AIzaSyCxosBXe5qZ96cgCqV9966gIZ8Js0wQXhU';

  const responsive = {
    width: '100%',
    height: '100%',
  };

  const position = {
    lat: 38.7734375316600,
    lng: -9.161105400048587,
  };

  return (
    <div className="map">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={responsive}
          center={position}
          zoom={20}
        >
          <Marker position={position} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
