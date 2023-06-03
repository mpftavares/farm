import { useEffect } from 'react';
import { scrollToTop } from '../app/scrollToTop';
import ServiceBanner from './ServiceBanner';
import ServiceList from './ServiceList';

export default function Services() {
	useEffect(() => {
		scrollToTop();
	}, []);

	useEffect(() => {
		document.title = 'Farmácia Patuleia | Serviços';
	}, []);
	return (
		<div className="flex-col">
			<h1 className="show-mobile mobile-title">
				Serviços <br /> farmacêuticos
			</h1>
			<ServiceBanner />
			<ServiceList />
		</div>
	);
}
