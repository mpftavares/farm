export default function Form() {
	const onInputChange = (e) => {
		const { name, value } = e.target;
		handleInputChange(name, value);
	};

	return (
		<div>
			<h1>Contacte-nos</h1>
			<form
				className="form"
				action="../../sendmail/send.php"
				method="post">
				<label htmlFor="name">Nome:</label>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Introduza o seu nome"
					className="input"
					autoComplete="off"
					required
					onChange={onInputChange}
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
					onChange={onInputChange}
				/>

				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="email"
					id="email"
					placeholder="Introduza o seu email"
					className="input"
					autoComplete="off"
					required
					onChange={onInputChange}
				/>

				<label htmlFor="subject">Assunto:</label>
				<textarea
					name="subject"
					id="subject"
					placeholder="Diga-nos em que podemos ajudar"
					rows="5"
					className="input"
					autoComplete="off"
					required
					onChange={onInputChange}></textarea>
				<input
					type="submit"
					value="Submeter"
					className="btn submit"
				/>
			</form>
		</div>
	);
}
