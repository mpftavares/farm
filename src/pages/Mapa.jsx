import MapaBanner from "../components/mapa/MapaBanner";
import MapaContent from "../components/mapa/MapaContent";

export default function Mapa() {
	return (
		<>
		<h1 className="show-mobile mobile-title">MAPA 48h</h1>
			<MapaBanner/>
			<MapaContent/>
		</>
	);
}
