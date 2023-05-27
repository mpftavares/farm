import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<section className="flex-col box padding light-background not-found center-content">
			<p>Página não encontrada</p>
			<Link to="/home">
				<button className="clickable btn">Home</button>
			</Link>
		</section>
	);
}
