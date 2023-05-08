
export default function StaticMap() {
	const apiKey = 'AIzaSyCxosBXe5qZ96cgCqV9966gIZ8Js0wQXhU';

  return (
    <div className="map"><img src={`https://maps.googleapis.com/maps/api/staticmap?center=38.773439,-9.161105&zoom=19&scale=2&size=1200x250&markers=&key=${apiKey}`}/></div>
  )
}
