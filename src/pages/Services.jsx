import { useEffect } from 'react';
import ServiceList from '../features/services/components/ServiceList';

export default function Services() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Serviços';
	}, []);
	return (
	<ServiceList/>);
}
