import {isOpen} from '../../app/isOpen';

export default function Open() {
	
	return isOpen ? (
		<section className="box padding animated-background">
			<h1>Estamos abertos</h1>
			<p>
				Visite-nos ou contacte-nos diretamente por <a href="tel:21 752 4103">telefone</a>
				
			</p>
		</section>
	) : null;
}
