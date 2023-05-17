
export default function Directions() {

    const handleGetDirections = () => {
        // Retrieve user's current location using geolocation API
        navigator.geolocation.getCurrentPosition(success, error);
      };
    
      const success = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
    
        // Build the Google Maps URL with the user's current location and the target address
        const targetAddress = encodeURIComponent('Farmácia Patuleia');
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${targetAddress}`;
    
        // Open the Google Maps URL in a new tab or window
        window.open(mapsUrl, '_blank');
      };
    
      const error = () => {
        console.log('Error getting user location');
      };

  return (
    <button onClick={handleGetDirections} className="clickable directions margin-bottom btn">Obter direcções</button>
  )
}
