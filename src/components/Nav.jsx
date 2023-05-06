import { Link } from 'react-router-dom';

export default function Nav({ onClick, className }) {
	return (
		<nav className={className} onClick={onClick}>
			<Link to="/home">Home</Link>
			<Link to="/services">Serviços</Link>
			<Link to="/sales">Promoções</Link>
			<Link to="/adress">Localização</Link>
			<Link to="/contacts">Contactos</Link>
		</nav>
	);
}
