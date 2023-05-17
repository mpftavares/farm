import { isOpen } from './isOpen';

export default function WereOpen() {
	
	return isOpen ? (
		<section className="box padding margin-bottom open">
			<h1>Estamos abertos</h1>
			<p>
				Venha visitar-nos ou contacte-nos diretamente por <a href="tel:21 752 4103">telefone <span className="material-symbols-outlined footer-icon">call</span></a>
				
			</p>
		</section>
	) : null;
}
