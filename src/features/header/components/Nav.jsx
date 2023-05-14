import { NavLink } from 'react-router-dom';

export default function Nav({ onClick, className }) {
	return (
		<nav
			className={className}
			onClick={onClick}>
			<NavLink to="/home">Home</NavLink>
			<NavLink to="/services">Serviços</NavLink>
			<NavLink to="/mapa">MAPA</NavLink>
			<NavLink to="/sales">Promoções</NavLink>
			<NavLink to="/contacts">Contactos</NavLink>
		</nav>
	);
}
