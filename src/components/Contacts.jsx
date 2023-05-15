export default function Contacts() {
	return (
		<section className="padding light-background radius info">
			<article>
				<h1>Horário</h1>
				<p>2ª a 6ª feira das 9h00 às 13h00 e das 13h45 às 20h00</p>
				<p>Sábados das 9h00 às 13h00</p>
			</article>
			<article>
				<h1>Contacto</h1>
				<p>
					Telefone: <a href="tel:21 752 4103">21 752 4103</a>
				</p>
				<p>(Chamada Rede Fixa Nacional)</p>
			</article>
			<article>
				<h1>Localização</h1>
				<p>Alameda das Linhas de Torres 262-A</p>
				<p>1750-152 Lisboa</p>
				<button className="clickable">Obter direcções</button>
			</article>
		</section>
	);
}
