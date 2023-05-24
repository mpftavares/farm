import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Call from '../contacts/Call';

export default function Highlights() {
	return (
			<Carousel className="radius">
				<Carousel.Item>
					<img
						className="d-block w-100 radius"
						src="images/pharmacy/products.jpg"
						alt="First slide"
					/>
					<Carousel.Caption className="radius">
						<h3>Aproveite as campanhas que temos em vigor</h3>
						<Link to="/sales">
							<button className="btn">Ver promoções</button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 radius"
						src="images/pharmacy/mapa-banner.jpeg"
						alt="Second slide"
					/>

					<Carousel.Caption>
						<h3>Realize a sua MAPA 48h connosco</h3>
						<Link to="/mapa">
							<button className="btn">Mais informações</button>
						</Link>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 radius"
						src="images/highlights/nutrition.jpg"
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Marque a sua consulta de nutrição connosco</h3>
						<Call />
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
	);
}
