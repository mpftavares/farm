import { Link } from 'react-router-dom';

export default function ContactBtn() {
	return (
		<Link to="/contacts">
			<button className="btn">Contacte-nos</button>
		</Link>
	);
}
