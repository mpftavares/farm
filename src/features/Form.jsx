import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_akarsx9',
				'template_auj8wky',
				form.current,
				'Q9odTI4vGNZr7iFEO'
			)
			.then(
				(result) => {
					console.log(result.text);
					e.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<section className="box light-background padding margin-bottom contact-form">
			<figure className="show-laptop contact-form-img">
				<img
					className="radius"
					src="../../images/pharmacy/inside-left.jpg"
					alt="pharmacy"
				/>
			</figure>

			<article>
				<form
					ref={form}
					onSubmit={sendEmail}
					className="form">
					<h1>Contacte-nos</h1>
					<label htmlFor="name">Nome:</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Introduza o seu nome"
						className="input"
						autoComplete="off"
						required
					/>

					<label htmlFor="email">Telefone:</label>
					<input
						type="telephone"
						name="telephone"
						id="telephone"
						placeholder="Introduza o seu número de telefone"
						className="input"
						autoComplete="off"
						required
					/>

					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Introduza o seu email"
						className="input"
						autoComplete="off"
					/>

					<label htmlFor="message">Assunto:</label>
					<textarea
						name="message"
						id="message"
						placeholder="Diga-nos em que podemos ajudar"
						rows="5"
						className="input"
						autoComplete="off"
						required></textarea>
					<input
						type="submit"
						value="Submeter"
						className="btn submit clickable"
					/>
				</form>
			</article>
		</section>
	);
}
