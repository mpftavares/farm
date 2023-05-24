import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<section className="box padding light-background not-found">
			<p>Página não encontrada</p>
			<button className='clickable btn'>
				<Link to="/home">Home</Link>
			</button>
		</section>
	);
}
