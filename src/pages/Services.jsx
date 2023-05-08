import { useEffect } from 'react';

export default function Services() {
	useEffect(() => {
		document.title = 'Farmácia Patuleia | Serviços';
	}, []);
	return <div>Services</div>;
}
