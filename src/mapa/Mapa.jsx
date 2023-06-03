import { useEffect } from 'react';
import { scrollToTop } from '../app/scrollToTop';
import MapaBanner from './MapaBanner';
import MapaContent from './MapaContent';

export default function Mapa() {
	useEffect(() => {
		scrollToTop();
	}, []);

	useEffect(() => {
		document.title = 'Farmácia Patuleia | MAPA 48h';
	}, []);
	return (
		<div className="flex-col">
			<h1 className="show-mobile mobile-title">MAPA 48h</h1>
			<MapaBanner />
			<MapaContent />
		</div>
	);
}
