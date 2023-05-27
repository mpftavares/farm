import { useEffect } from 'react';
import ServiceBanner from '../components/services/ServiceBanner';
import ServiceList from '../components/services/ServiceList';

export default function Services() {
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
