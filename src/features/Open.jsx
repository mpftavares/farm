import { closingTime } from '../app/status';

export default function Open() {
	const openUntil = closingTime();

	return (
		<section className="box padding-2 animated-background center-content status">
			<h1>Estamos abertos até às {openUntil}</h1>
			<p className='margin-0'>
				Visite-nos ou contacte-nos diretamente por telefone{' '}
				<span className="material-symbols-outlined footer-icon">call</span>
			</p>
		</section>
	);
}
