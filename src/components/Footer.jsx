export default function Footer() {
	return (
		<footer className="footer light-background padding center-content">
			<article>
				<h1>
					Localização{' '}
					<span className="material-symbols-outlined footer-icon">
						location_on
					</span>
				</h1>

				<p>Alameda das Linhas de Torres 262-A</p>
				<p>1750-152 Lisboa</p>
			</article>
			<article>
				<h1>
					Horário{' '}
					<span className="material-symbols-outlined footer-icon">
						schedule
					</span>
				</h1>
				<p>2ª a 6ª feira das 9h00 às 13h00 e das 13h45 às 20h00</p>
				<p>Sábados das 9h00 às 13h00</p>
			</article>
			<article>
				<h1>
					Contacto{' '}
					<span className="material-symbols-outlined footer-icon">call</span>
				</h1>

				<p>
					Telefone: <a href="tel:21 752 4103">21 752 4103</a>
				</p>
				<p>(Chamada Rede Fixa Nacional)</p>
			</article>
		</footer>
	);
}
