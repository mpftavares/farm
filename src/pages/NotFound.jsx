import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<section className="container padding light-background not-found">
			<p>Page not found</p>
			<button className='clickable btn'>
				<Link to="/home">Home</Link>
			</button>
		</section>
	);
}
