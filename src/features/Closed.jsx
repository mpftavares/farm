import ContactBtn from '../features/ContactBtn';

export default function Closed() {
	return (
		<section className="box padding center-content dark-background">
			<h1>Estamos encerrados</h1>
			<p className="margin-bottom">
				Contacte-nos através do formulário disponível
			</p>
			<ContactBtn />
		</section>
	);
}
