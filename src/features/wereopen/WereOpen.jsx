import { isOpen } from './isOpen';

export default function WereOpen() {
	
	return isOpen ? (
		<section className="box padding margin-bottom open">
			<h1>Estamos abertos</h1>
			<p>
				Visite-nos ou contacte-nos diretamente por <a href="tel:21 752 4103">telefone</a>
				
			</p>
		</section>
	) : null;
}
