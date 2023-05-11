import { useEffect } from 'react';
import ServiceBanner from '../features/banners/ServiceBanner';
import ServiceList from '../features/services/components/ServiceList';

export default function Services() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Serviços';
	}, []);
	return (
		<>
			<ServiceBanner />
			<ServiceList />
		</>
	);
}
