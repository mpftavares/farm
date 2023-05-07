import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="footer">
			<article>
            <Link to="/adress"><h1>Localização</h1></Link>
				<p>Alameda das Linhas de Torres 262-A</p>
				<p>1750-152 Lisboa</p>
			</article>
			<article>
				<h1>Horário</h1>
				<p>2ª a 6ª feira das 9h00 às 20h00</p>
				<p>Sábados das 9h00 às 13h00</p>
			</article>
			<article>
            <Link to="/contacts"><h1>Contacto</h1></Link>
                 <p>Telefone: <a href="tel:21 752 4103">21 752 4103</a></p>
                <p>(Chamada Rede Fixa Nacional)</p>

			</article>
		</footer>
	);
}
