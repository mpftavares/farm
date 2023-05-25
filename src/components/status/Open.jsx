import { isOpen } from '../../app/isOpen';
import { closingTime } from '../../app/isOpen';

export default function Open() {
	const openUntil = closingTime();
	const isPharmacyOpen = isOpen();

	return isPharmacyOpen ? (
		<section className="box padding animated-background">
			<h1>Estamos abertos até às {openUntil}</h1>
			<p>
				Visite-nos ou contacte-nos diretamente por telefone{' '}
				<span className="material-symbols-outlined footer-icon">call</span>
			</p>
		</section>
	) : null;
}
