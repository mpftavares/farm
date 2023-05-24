import {isOpen} from '../../app/isOpen';
import {closingTime} from '../../app/isOpen';

export default function Open() {

	const openUntil = closingTime(); 
	
	return isOpen ? (
		<section className="box padding animated-background">
			<h1>Estamos abertos até às {openUntil}</h1>
			<p>
				Visite-nos ou contacte-nos diretamente por <a href="tel:21 752 4103">telefone</a>
				
			</p>
		</section>
	) : null;
}
