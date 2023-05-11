import React, { useRef } from 'react';
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
		<div>
			<h1>Contacte-nos</h1>
			<form
				ref={form}
				onSubmit={sendEmail}
				className="form">
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
					className="btn submit"
				/>
			</form>
		</div>
	);
}
